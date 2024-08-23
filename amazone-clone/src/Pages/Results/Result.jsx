import React, { useEffect, useState } from 'react'
import Layout from '../../components/LayOut/Layout'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { producturl } from '../../Api/EndPoints';


function Result() {
  const [result, setresult] = useState([]);
  const {catagoryName} = useParams()
  useEffect(() => {
    axios.get(`${producturl}/products/catagory/${catagoryName}`)
    .then((res)=>{
      // setresult(res.data);
      console.log(res.data);
      
    }).catch((err)=>{
      console.log(err);
    })
  }, [])
  
  

  return (
    <Layout>
      <section>
        Result: {catagoryName}
      </section>
    </Layout>
  )
}

export default Result