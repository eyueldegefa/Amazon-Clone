import React from 'react'
import './CatagoryFullInfo'
import './Catagory.css'

function CatagoryCard({data}) {
  return (
    <div className='catagory'>
        <a href="#">
            <span>
                <h4>{data.title}</h4>
            </span>
            <img src={data.imgLink} alt="#" />
            <p>shop now</p> 
        </a>
    </div>
  )
}

export default CatagoryCard