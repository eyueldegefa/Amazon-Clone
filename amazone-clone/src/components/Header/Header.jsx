import React, { useContext } from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
import AmazonLogo from './images/Amazon-logo.png';
import AmericanFlag from './images/AmericanFlag.jpg'
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { FaSearch } from "react-icons/fa";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { DataContext } from '../DetailProvider/DetailProvider';
import { auth } from '../../Utility/firebase';

const Header = () => {
  const [{user, basket},dispatch]=useContext(DataContext)
  // console.log(basket.length);
  const totalItem = basket?.reduce((amount, item)=>{
    return item.amount + amount;
  },0);
  
  return (
    <div className='header_wrapper text-white flexed'>
        <section className='contents p-2 upperHeader'>
          <div className='d-flex pt-2'>
            <Link to="/" className='lists hover_border'><img className='logo' src={AmazonLogo} alt="" /></Link> 
            <div className='hover_border pb-2'>
              <span className='unique text-silver other'>Deliver to</span>
              <span className='location fw-bold'><span className='icons'><RoomOutlinedIcon/></span>Ethiopia</span>
            </div>
          </div>
            
          <div className='d-flex'>
            <span className='arrange unique text-dark py-2 border-start'>All<ArrowDropDownIcon/></span>
            <input className='inputField px-2' type="text" placeholder='Search Amazon' />
            <span className='search_logo py-2 px-3'><FaSearch/></span>
          </div>

          <div className='d-flex pt-3 gap-3 rightSide'>
            <div className='fw-bold hover_border'>
                <img className='flag pe-1' src={AmericanFlag} alt="" />EN<ArrowDropDownIcon/>
            </div>
  
            <Link to={!user && "/auth"} className='text-white text-decoration-none'>
              <div className='hover_border'>
                {user ? (
                  <>
                    <span>Hello {user?.email?.split("@")[0]} <br /></span>
                    <span onClick={()=>auth.signOut()}>Sign Out</span>
                  </>
                ): (
                  <>
                    <span>Sign in <br /></span>
                    <span className='location fw-bold'>Account & Lists <ArrowDropDownIcon/></span>
                  </>
                )}
              </div>
            </Link>
  
            <Link to="/orders" className='text-white text-decoration-none hover_border'>
              <span className=''>Returns & </span> <span className='location fw-bold'>Orders</span>
            </Link>
  
            <Link to="/cart" className='text-white text-decoration-none fw-bold hover_border'>
              <span className='count ps-2 fw-bold text-warning'>{totalItem}</span>
              <span className='cart location'><ShoppingCartOutlinedIcon/>Cart</span>
            </Link>
          </div>
        </section>

        <section className='second fw-bold'>
          <div className='lists hover_border'><MenuIcon/>  All</div>
          <div className='hover_border'>Today's Deals</div>
          <div className='hover_border'>Customer Service</div>
          <div className='hover_border'>Registry</div>
          <div className='hover_border'>Gift Cards</div>
          <div className='hover_border'>Sell</div>
        </section> 
    </div>
  )
}

export default Header;