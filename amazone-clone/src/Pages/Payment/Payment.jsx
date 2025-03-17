import React, { useContext } from 'react'
import Layout from '../../components/LayOut/Layout'
import classes from './Payment.module.css';
import { DataContext } from '../../components/DetailProvider/DetailProvider';
import ProductCard from '../../components/Product/ProductCard';
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
import CurrencyFormat from '../../components/CurrencyFormat/CurrencyFormat';


function Payment() {
  const stripe = useStripe();
  const elements = useElements();
  const [{user, basket}] = useContext(DataContext);

  const totalItem = basket?.reduce((amount, item)=>{
    return item.amount + amount;
  },0);

  const total = basket?.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);
  return (
    <Layout>
        {/* header */}
        <div className={classes.payment_header}>
          <h5>Checkout {totalItem} items</h5>
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
          <div>
            <form action="">
              <CardElement />
              <div>
                Total | <CurrencyFormat amount={total} />
              </div>
              <button>Pay Now</button>
            </form>
          </div>

        </div>

      </section>
    </Layout>
  )
}

export default Payment