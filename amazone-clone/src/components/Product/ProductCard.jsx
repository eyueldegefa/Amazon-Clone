import React from 'react'
import Rating from '@mui/material/Rating'
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat'

function ProductCard({product}) {
  // const {image, title, rating, price} = product;
  return (
    <div>
        <a href="#">
            <img src={product.image} alt="#" />
        </a>
        <div>
          <h3>{product.title}</h3>
          <div>
            {/* rating */}
            <Rating value={product.rating.rate} precision={0.1}/>
            {/* count */}
            <small>{product.rating.count}</small>
          </div>
          <div>
            {/* price */}
            <CurrencyFormat amount={product.price}/>
          </div>
          <button>
            add to cart
          </button>
        </div>
    </div>
  )
}

export default ProductCard