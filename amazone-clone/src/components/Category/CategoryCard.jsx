import React from 'react'
import './CategoryFullInfo'
import './Category.css'
import { Link } from 'react-router-dom'

function CategoryCard({data}) {
  return (
    <div className='category'>
        <Link to={`/category/${data.name}`}>
            <span>
                <h4>{data.title}</h4>
            </span>
            <img src={data.imgLink} alt="#" />
            <p>shop now</p> 
        </Link>
    </div>
  )
}

export default CategoryCard