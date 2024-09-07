import React, {useState, useEffect } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import classes from './Product.module.css'
import Loader from '../Loader/Loader';

function Product() {
    const [products, setproducts] = useState([]);
    const [isLoading,setIsLoading] = useState(false);

    useEffect(() => {
      axios.get('https://fakestoreapi.com/products')
      .then((res)=>{
        setproducts(res.data);
        setIsLoading(false)
        // console.log(res);
      }).catch((err)=>{
        console.log(err);
        setIsLoading(false);
      })
    }, [])
    
  return (
    <>
      {isLoading? (<Loader/>): (<section className={`${classes.product_container}`}>
        {
          products && products.map((singleProduct)=>{
            return <ProductCard 
            product={singleProduct}
             key={singleProduct.id}
             renderAdd={true}
             />
          })
        }
      </section> )}
    </>
    
  )
}

export default Product