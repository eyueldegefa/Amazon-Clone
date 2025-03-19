import React, { useContext, useState, useEffect } from 'react';
import Layout from '../../components/LayOut/Layout';
import classes from './Orders.module.css';
import { db } from '../../Utility/firebase';
import { DataContext } from '../../components/DetailProvider/DetailProvider';
import ProductCard from '../../components/Product/ProductCard';

function Orders() {
  const [{ user }, dispatch] = useContext(DataContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      console.log("Fetching orders for user:", user.uid);
      db.collection("users")
        .doc(user.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          console.log(snapshot);
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        });
    } else {
      console.log("No user is logged in");
      setOrders([]);
    }
  }, []);

  return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.orders_container}>
          <h2>Your Orders</h2>
          {
            orders.length == 0 && <div>You don't have an order!</div>
          }
          {/* Ordered items */}
          <div>
            {orders?.map((eachOrder, i) => {
              return (
                <div key={i}>
                  <p> <span className='fw-bold'>Ordered ID:</span> {eachOrder?.id}</p>
                  {eachOrder?.data?.basket?.map((order) => (
                    <ProductCard
                      flex={true}
                      product={order}
                      key={order.id}
                    />
                  ))}
                  <hr />
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Orders;