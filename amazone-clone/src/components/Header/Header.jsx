import React from 'react'
import './Header.css'
import AmazonLogo from '../../assets/Amazon-logo.png'
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';

const Header = () => {
  return (
    <div>
        <ul className='contents'>
            <li className=''><img className='logo' src={AmazonLogo} alt="" /></li>
            <li><span className='unique'>Deliver to</span><span className='location'><span className='icons'><RoomOutlinedIcon/></span>Ethiopia</span></li>
            <li>All<span className='arrange'><ArrowDropDownIcon/></span><input className='inputField' type="text" /><span className='search '><SearchIcon/></span></li>
            <li>EN</li>
            <li><span className='other'>Hello, Sign in</span> <span className='location'>Account & lists <ArrowDropDownIcon/></span></li>
            <li>Returns <span className='location'>& Orders</span></li>
            <li><ProductionQuantityLimitsIcon/>Cart</li>
        </ul>
    </div>
  )
}

export default Header