import React from 'react'
import Layout from '../../components/LayOut/Layout'
import CarouselEffect from '../../components/Carousel/CarouselEffect'
import Catagory from '../../components/Catagory/Catagory'
import Product from '../../components/Product/Product'

function Landing() {
  return (
    <Layout>
      <CarouselEffect />
      <Catagory />
      <Product />
    </Layout>
  )
}

export default Landing