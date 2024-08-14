import React from 'react'
import {CatagoryInfos} from './CatagoryFullInfo'
import CatagoryCard from './CatagoryCard'
import './Catagory.css'

function Catagory() {
  return (
    <section className='catagory_container'>
        {
            CatagoryInfos.map((infos)=>(
              <CatagoryCard data = {infos}/>
            ))
        }
    </section>
  )
}

export default Catagory