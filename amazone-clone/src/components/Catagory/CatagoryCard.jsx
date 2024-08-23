import React from 'react'
import './CatagoryFullInfo'
import './Catagory.css'
import { Link } from 'react-router-dom'

function CatagoryCard({data}) {
  return (
    <div className='catagory'>
        <Link to={`/catagory/${data.name}`}>
            <span>
                <h4>{data.title}</h4>
            </span>
            <img src={data.imgLink} alt="#" />
            <p>shop now</p> 
        </Link>
    </div>
  )
}

export default CatagoryCard