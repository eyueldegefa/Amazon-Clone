import React, {useState, useEffect } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import classes from './Product.module.css'

function Product() {
    const [products, setproducts] = useState();

    useEffect(() => {
      axios.get('https://fakestoreapi.com/products')
      .then((res)=>{
        // setproducts(res.data);
        console.log(res);
        
      }).catch((err)=>{
        console.log(err);
      })
    }, [])
    
  return (
    // <div></div>
    <section className={`${classes.product_container}`}>
      {
        products.map((singleProduct)=>{
          return <ProductCard product={singleProduct} key={singleProduct.id}/>
        })
      }
    </section>
  )
}

export default Product