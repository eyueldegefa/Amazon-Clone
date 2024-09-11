import React, { useContext } from 'react'
import Layout from '../../components/LayOut/Layout'
import { DataContext } from '../../components/DetailProvider/DetailProvider'
import ProductCard from '../../components/Product/ProductCard'
import classes from './Cart.module.css'
import CurrencyFormat from '../../components/CurrencyFormat/CurrencyFormat'
import { Link } from 'react-router-dom'

function Cart() {
  const [{basket, user}, dispatch] = useContext(DataContext);
  const total = basket.reduce((amount,item)=>{
      return  item.price + amount
  },0)
  return (
    <Layout>
        <section className={`${classes.container}`}>
          <div className={`${classes.cart_container}`}>
            <h4>Hello</h4>
            <h6>Your shopping basket</h6>
            <hr />
            {
              basket?.length==0?(<p>Opps! No item in your cart</p>):(
                basket?.map((item,i)=>{
                  return <ProductCard 
                  key={i}
                    product={item}
                    renderDesc={true}
                    flex={true}
                    renderAdd={false}
                  />
                })
              )
            }
          </div>
          {
            basket?.length !==0&&(
              <div className={`${classes.subtotal}`}>
                <div>
                  <h6>Subtotal ({basket?.length}item)</h6>
                  <CurrencyFormat amount={total} />
                </div>
                <span>
                  <input type="checkbox" />
                  <small> This order contains a gift</small>
                </span>
                <Link to="/payments" >Continue to checkout</Link>
              </div>
            )
          }
        </section>
    </Layout>
  )
}

export default Cart