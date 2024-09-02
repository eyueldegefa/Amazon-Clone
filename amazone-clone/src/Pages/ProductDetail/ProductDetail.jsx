import React, { useEffect, useState } from 'react'
import Layout from '../../components/LayOut/Layout'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { producturl } from '../../Api/EndPoints';
import ProductCard from '../../components/Product/ProductCard';
import Loader from '../../components/Loader/Loader'

function ProductDetail() {
  const {productId} = useParams()
  const [products, setproduct] = useState({})
  const [isLoading,setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios.get(`${producturl}/products/${productId}`)
    .then((res)=>{
      // console.log(res.data);
      setproduct(res.data);
      setIsLoading(false);
    }).catch((err)=>{
      console.log(err);
    })
  }, [])
  

  return (
    <Layout>
       {isLoading? (<Loader />):(<ProductCard  
       product={products} 
       flex={true}
       renderDesc={true} />)} 
    </Layout>
  )
}

export default ProductDetail