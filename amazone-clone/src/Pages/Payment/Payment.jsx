import React, { useContext, useState } from 'react'
import Layout from '../../components/LayOut/Layout'
import classes from './Payment.module.css';
import { DataContext } from '../../components/DetailProvider/DetailProvider';
import ProductCard from '../../components/Product/ProductCard';
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
import CurrencyFormat from '../../components/CurrencyFormat/CurrencyFormat';
import { axiosInstance } from '../../Api/Axios';
import { ClipLoader } from 'react-spinners';
import { db } from '../../Utility/firebase';
import { useNavigate } from 'react-router-dom';
import { Type } from '../../Utility/actionType';


function Payment() {
  const [{user, basket}, dispatch] = useContext(DataContext);

  const totalItem = basket?.reduce((amount, item)=>{
    return item.amount + amount;
  },0);

  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  const [Error, setError] = useState('');
  const [Processing, setProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const handleChange = (e) => {
    if(e.error){
      setError(e.error.message);
    }else{
      setError('');
    }
  }

  const handlePayment = async (e) => {
    e.preventDefault();

    try{
      setProcessing(true);
      // 1. Backend || functions contact to client secret
      const response = await axiosInstance({
        method:"POST",
        url: `/payments/create?total=${total*100}`
      })
      console.log(response.data);

      const clientSecret = response.data?.clientSecret;

      // 2. Client side (React side ) confirmation
      const {paymentIntent} = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method:{
            card: elements.getElement(CardElement),
          }
        },
      )

      console.log(paymentIntent);

      // 3. send the data to firestore
      await db
        .collection("users")
        .doc(user.uid)
        .collection("orders")
        .doc(paymentIntent.id)
        .set({
          basket: basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created
        })
        dispatch({type:Type.EMPTY_BASKET})
      setProcessing(false);
      navigate("/orders", {state:{msg: "here you are"}})
    } catch (error){
      console.log(error);
      setProcessing(false);
    }
  }


  return (
    <Layout>
        {/* header */}
        <div className={classes.payment_header}>
          <h5>Checkout ({totalItem}) items</h5>
        </div>
      <section className={classes.payment_container}>
        {/* address */}
        <div className={classes.flex}>
          <h5>Delivery Address</h5>
          <div>
            <div>Eyuel</div>
            <div>17 Lusy</div>
            <div>Hossana Ethiopia</div>
          </div>
        </div>
        <hr />

        {/* Review items */}
        <div className={classes.flex}>
          <h5>Review items for delivery</h5>
          <div className={classes.items}>
            {
              basket.map((item, i) => {
                return <ProductCard 
                product={item}
                key={i}
                flex={true}
                renderAdd={false}
                />
              })
            }
          </div>
        </div>
        <hr />

        {/* Payment Method */}
        <div className={classes.flex}>
          <h5>Payment Method</h5>
          <div className={classes.paymentCard_container}>
            <form onSubmit={handlePayment}>
              {/* cardError */}
              {Error && (<small className='text-danger'>{Error}</small>)}
              <CardElement onChange={handleChange}/>
              <div className='d-flex fw-bold gap-3'>
                <span>Total</span> | <CurrencyFormat amount={total} />
              </div>
              <button type='submit'>
                {
                  Processing? (
                    <div className={classes.loading}>
                      <ClipLoader color='gray' size={12}/>
                      <div>Please wait...</div>
                    </div>
                  ): " Pay Now "
                }
              </button>
            </form>
          </div>

        </div>

      </section>
    </Layout>
  )
}

export default Payment