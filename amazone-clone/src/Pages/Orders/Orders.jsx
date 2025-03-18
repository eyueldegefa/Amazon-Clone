import React, {useContext,useState, useEffect} from 'react'
import Layout from '../../components/LayOut/Layout'
import classes from './Orders.module.css'
import { db } from '../../Utility/firebase'
import { DataContext } from '../../components/DetailProvider/DetailProvider'
import ProductCard from '../../components/Product/ProductCard'

function Orders() {

  const [{user}, dispatch] = useContext(DataContext);
  const [orders, setOrders] = useState([]);

  useEffect(()=>{
    if(user){
      db.collection("users")
        .doc(user.id)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot)=>{
          console.log(snapshot);
          
          setOrders(
            snapshot.docs.map((doc)=>({
              id: doc.id,
              data: doc.data,
            }))
          )
        })
    }else{
      // setOrders([]);
    }
  })

  return (
    <Layout>
        <section className={classes.container}>
          <div className={classes.orders_container}>
            <h2>Your Orders</h2>
            {/* Ordered items */}
            <div>
              {
                orders?.map((eachOrder, i)=>{
                  return (
                    <div key={i}>
                      <hr />
                      <p>Ordered ID {eachOrder?.id}</p>
                      {
                        eachOrder?.data?.basket?.map((order)=>(
                          <ProductCard
                          flex={true}
                          product={order}
                          key={order.id}
                          />
                        ))
                      }
                    </div>
                  )
                })
              }
            </div>
          </div>
        </section>
    </Layout>
  )
}

export default Orders