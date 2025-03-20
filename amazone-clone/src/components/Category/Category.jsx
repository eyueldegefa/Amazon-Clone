import React from 'react'
import {CategoryInfos} from './CategoryFullInfo'
import CategoryCard from './CategoryCard'
import './Category.css'

function Category() {
  return (
    <section className='category_container'>
        {
            CategoryInfos.map((infos)=>(
              <CategoryCard data = {infos}/>
            ))
        }
    </section>
  )
}

export default Category