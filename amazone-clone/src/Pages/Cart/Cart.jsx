import React, { useContext } from 'react'
import Layout from '../../components/LayOut/Layout'
import { DataContext } from '../../components/DetailProvider/DetailProvider'
import ProductCard from '../../components/Product/ProductCard'
import classes from './Cart.module.css'

function Cart() {
  const [{basket, user}, dispatch] = useContext(DataContext);
  return (
    <Layout>
        <section className={`${classes.container}`}>
          <div className={`${classes.cart_container}`}>
            <h4>Hello</h4>
            <h6>Your shopping basket</h6>
            <hr />
            {
              basket?.length==0?(<p>Opps! No item in your cart</p>):(
                basket?.map((item)=>{
                  return <ProductCard 
                  
                    product={item}
                    renderDesc={true}
                    flex={true}
                    renderAdd={false}
                  />
                })
              )
            }
          </div>
        </section>
    </Layout>
  )
}

export default Cart