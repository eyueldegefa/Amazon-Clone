import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
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
        <div className='contents px-4 py-2'>
            <Link to="/" className='lists'><img className='logo' src={AmazonLogo} alt="" /></Link>

            <div><span className='unique text-silver other'>Deliver to</span><span className='location fw-bold'><span className='icons'><RoomOutlinedIcon/></span>Ethiopia</span></div>

            <div><span className='arrange unique text-dark py-2 border-start'>All<ArrowDropDownIcon/></span><input className='inputField px-2' type="text" placeholder='Search Amazon' /><span className='search_logo py-2 px-3'><FaSearch/></span></div>

            <div className='fw-bold'><img className='flag pe-1' src={AmericanFlag} alt="" />EN<ArrowDropDownIcon/></div>

            <Link to="/auth" className='text-white text-decoration-none'><span className=''>Hello, Sign in</span> <span className='location fw-bold'>Account & lists <ArrowDropDownIcon/></span></Link>

            <Link to="/orders" className='text-white text-decoration-none'><span className=''>Returns</span> <span className='location fw-bold'>& Orders</span></Link>

            <Link to="/cart" className='text-white text-decoration-none fw-bold'><span className='count ps-2 fw-bold text-warning'>0</span><span className='cart location'><ShoppingCartOutlinedIcon/>Cart</span></Link>
        </div>
        <div className='bg-silver mx-4 py-2 second fw-bold'>
          <div className='lists'><MenuIcon/>  All</div>
          <div>Today's Deals</div>
          <div>Customer Service</div>
          <div>Registry</div>
          <div>Gift Cards</div>
          <div>Sell</div>
        </div> 
    </div>
  )
}

export default Header;