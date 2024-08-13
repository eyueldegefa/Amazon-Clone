import React from 'react'
import './Header.css'
import AmazonLogo from './images/Amazon-logo.png';
import AmericanFlag from './images/AmericanFlag.jpg'
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { FaSearch } from "react-icons/fa";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  return (
    <div className='header_wrapper text-white'>
        <ul className='contents bg-dark px-4 py-1'>
            <li className=''><img className='logo' src={AmazonLogo} alt="" /></li>
            <li><span className='unique text-silver other'>Deliver to</span><span className='location fw-bold'><span className='icons'><RoomOutlinedIcon/></span>Ethiopia</span></li>
            <li><span className='arrange unique text-dark py-2 border-start'>All<ArrowDropDownIcon/></span><input className='inputField px-2' type="text" placeholder='Search Amazon' /><span className='bg-warning p-2 px-3'><FaSearch/></span></li>
            <li className='fw-bold'><img className='flag pe-1' src={AmericanFlag} alt="" />EN<ArrowDropDownIcon/></li>
            <li><span className='other'>Hello, Sign in</span> <span className='location fw-bold'>Account & lists <ArrowDropDownIcon/></span></li>
            <li><span className='other'>Returns</span> <span className='location fw-bold'>& Orders</span></li>
            <li className='fw-bold'><span className='count ps-2 fw-bold text-warning'>0</span><span className='cart location'><ShoppingCartOutlinedIcon/>Cart</span></li>
        </ul>
        <ul className='contents pb-2 px-4 second fw-bold'>
          <li><MenuIcon/>All</li>
          <li>Today's Deals</li>
          <li>Customer Service</li>
          <li>Registry</li>
          <li>Gift Cards</li>
          <li>Sell</li>
        </ul> 
    </div>
  )
}

export default Header