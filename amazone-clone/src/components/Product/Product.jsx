import React, {useState, useEffect } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'

function Product() {
    const [products, setproducts] = useState();

    useEffect(() => {
      axios.get('https://fakestoreapi.com/products')
      .then((res)=>{
        setproducts(res.data);
        console.log(setproducts);
        
      }).catch((err)=>{
        console.log(err);
      })
    }, ['https://fakestoreapi.com/products'])
    
  return (
    // <div></div>
    <section>
      {
        products.map((singleProduct)=>{
          return <ProductCard product={singleProduct} key={singleProduct.id}/>
        })
      }
    </section>
  )
}

export default Product