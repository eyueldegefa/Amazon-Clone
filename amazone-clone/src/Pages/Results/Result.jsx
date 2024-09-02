import React, { useEffect, useState } from 'react'
import Layout from '../../components/LayOut/Layout'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { producturl } from '../../Api/EndPoints';
import ProductCard from '../../components/Product/ProductCard';
import classes from './Result.module.css'


function Result() {
  const [results, setresult] = useState([]);
  const {catagoryName} = useParams();
  useEffect(() => {
    axios.get(`${producturl}/products/category/${catagoryName}`)
    .then((res)=>{
      setresult(res.data);
      // console.log(res.data);
    }).catch((err)=>{
      console.log(err);
    })
  }, [])
  
  

  return (
    <Layout>
      <section>
        <h5 className='px-4 pt-4 fw-bold'>Results</h5>
        <div className={classes.border}>
        Catagory / {catagoryName}
        </div> 
        <div className={classes.product_container}>
          {
           results && results.map((product)=>{
            return <ProductCard key={product.id} product={product} />
           })
          }
        </div>
      </section>
    </Layout>
  )
}

export default Result