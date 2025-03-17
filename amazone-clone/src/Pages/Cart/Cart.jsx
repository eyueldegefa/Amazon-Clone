import React, { useContext } from 'react';
import Layout from '../../components/LayOut/Layout';
import { DataContext } from '../../components/DetailProvider/DetailProvider';
import ProductCard from '../../components/Product/ProductCard';
import classes from './Cart.module.css';
import CurrencyFormat from '../../components/CurrencyFormat/CurrencyFormat';
import { Link } from 'react-router-dom';
import { Type } from '../../Utility/actionType';
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const total = basket?.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  const increment = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: { ...item, amount: item.amount + 1 }
    });
  };

  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id
    });
  };

  return (
    <Layout>
      <div className={classes.header}>
          <h4>Hello</h4>
          <h6>Your shopping basket</h6>
          <hr />
      </div>
      <section className={`${classes.container}`}>
        <div className={`${classes.cart_container}`}>
          {
            basket?.length === 0 ? (<p>Opps! No item in your cart</p>) : (
              basket?.map((item, i) => {
                return (
                  <section key={i} className={classes.cart_item}>
                    <ProductCard 
                      product={item}
                      renderDesc={true}
                      flex={true}
                      renderAdd={false}
                    />
                    {/* Buttons to increase and decrease the items */}
                    <div className={classes.btn_container}>
                      <button className={classes.btn} onClick={() => increment(item)}><IoIosArrowUp size={30}/></button>
                      <span>{item.amount}</span>
                      <button className={classes.btn} onClick={() => decrement(item.id)}><IoIosArrowDown size={30}/></button>
                    </div>
                  </section>
                )
              })
            )
          }
        </div>

        <div className={classes.subtotal}> 
          {
            basket?.length !== 0 && (
              <>
                <div>
                  <h6>Subtotal ({basket?.length} item{basket?.length > 1 ? 's' : ''})</h6>
                  <CurrencyFormat amount={total} />
                </div>
                <span>
                  <input type="checkbox" />
                  <small> This order contains a gift</small>
                </span>
                <Link to="/payments" >Continue to checkout</Link>
              </>
            )
          }
        </div>

      </section>
    </Layout>
  )
}

export default Cart;