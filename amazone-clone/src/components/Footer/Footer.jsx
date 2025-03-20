import React from 'react'
import classes from './Footer.module.css'
import AmazonLogo from '../Header/images/Amazon-logo.png';
import AmericanFlag from '../Header/images/AmericanFlag.jpg';
import LanguageIcon from '@mui/icons-material/Language';

function Footer() {
  return (
    <section>
        {/* Back to top */}
        <div className={classes.backBtn}>Back to top</div>
        {/* footer links */}
        <section className={classes.firstRow}>
            <div>
                <ul>
                    <h6 className='fw-bold'>Get to Know Us</h6> 
                    <li>Careers</li>
                    <li>Blog</li>
                    <li>About Amazon</li>
                    <li>Investor Relations</li>
                    <li>Amazon Device</li>
                    <li>Amazon Silence</li>
                </ul>
            </div>

            <div>
                <ul>
                    <h6 className='fw-bold'>Make money with us</h6>
                    <li>Sell products on Amazon</li>
                    <li>Sell on Amazon Business</li>
                    <li>Sell apps on Amazon</li>
                    <li>Become an Affiliate</li>
                    <li>Advertise Your Products</li>
                    <li>Self-Publish with Us</li>
                    <li>Host an Amazon Hub</li>
                    <li>›See More Make Money with Us</li>
                </ul>
            </div>

            <div> 
                <ul>
                    <h6 className='fw-bold'>Amazon Payment Products</h6>
                    <li>Amazon Business Card</li>
                    <li>Shop with Points</li>
                    <li>Reload Your Balance</li>
                    <li>Amazon Currency Converter</li>
                </ul>
            </div>

            <div> 
                <ul>
                    <h6 className='fw-bold'>Let Us Help You</h6>
                    <li>Amazon and COVID-19</li>
                    <li>Your Account</li>
                    <li>Your Orders</li>
                    <li>Shipping Rates & Policies</li>
                    <li>Returns & Replacements</li>
                    <li>Manage Your Content and Devices</li>
                    <li>Help</li>
                </ul>
            </div>
        </section>

        <section className={classes.secondRow}>
            <img className={classes.amazonLogo} src={AmazonLogo} alt="Amazon Logo" />
            <div>
                <LanguageIcon/> English
            </div>
            <div>
                $ USD-U.S Dollar
            </div>
            <div>
                <img className={classes.americanFlag} src={AmericanFlag} alt="American Flag" />
                United State
            </div>
        </section>

        {/* Third row */}
        <section className={classes.thirdRow}>
            <div>
                <div>Amazon Music</div>
                <div className={classes.txtSilver}>Stream millions of songs</div>
            </div>
            <div>
                <div>Amazon Ads</div>
                <div className={classes.txtSilver}>Reach customers wherever they spend their time</div>
            </div>
            <div>
                <div>6pm</div>
                <div className={classes.txtSilver}>Score deals on fashion brands</div>
            </div>
            <div>
                <div>AbeBooks</div>
                <div className={classes.txtSilver}>Books, art & collectibles</div>
            </div>
            <div>
                <div>ACX</div>
                <div className={classes.txtSilver}>Audiobook Publishing Made Easy</div>
            </div>
            <div>
                <div>Sell on Amazon</div>
                <div className={classes.txtSilver}>Start a Selling Account</div>
            </div>
            <div>
                <div>Veeqo</div>
                <div className={classes.txtSilver}>Shipping Software Inventory Management</div>
            </div>
            {/* ---------------------------------------- */}
            <div>
                <div>Amazon Business</div>
                <div className={classes.txtSilver}>Everything For Your Business</div>
            </div>
            <div>
                <div>Amazon Global</div>
                <div className={classes.txtSilver}>Ship Orders Internationally</div>
            </div>
            <div>
                <div>Amazon Web Services</div>
                <div className={classes.txtSilver}>Scalable Cloud Computing Services</div>
            </div>
            <div>
                <div>Audible</div>
                <div className={classes.txtSilver}>Listen to Books & Original Audio Performances</div>
            </div>
            <div>
                <div>Box Office Mojo</div>
                <div className={classes.txtSilver}>Find Movie Box Office Data</div>
            </div>
            <div>
                <div>Good reads</div>
                <div className={classes.txtSilver}>Book reviews & recommendations</div>
            </div>
            <div>
                <div>IMDb</div>
                <div className={classes.txtSilver}>Movies, TV & Celebrities</div>
            </div>
            {/* ---------------------------------------- */}
            <div>
                <div>Amazon Business</div>
                <div className={classes.txtSilver}>Everything For Your Business</div>
            </div>
            <div>
                <div>Amazon Global</div>
                <div className={classes.txtSilver}>Ship Orders Internationally</div>
            </div>
            <div>
                <div>Amazon Web Services</div>
                <div className={classes.txtSilver}>Scalable Cloud Computing Services</div>
            </div>
            <div>
                <div>Audible</div>
                <div className={classes.txtSilver}>Listen to Books & Original Audio Performances</div>
            </div>
            <div>
                <div>Box Office Mojo</div>
                <div className={classes.txtSilver}>Find Movie Box Office Data</div>
            </div>
            <div>
                <div>Good reads</div>
                <div className={classes.txtSilver}>Book reviews & recommendations</div>
            </div>
            <div>
                <div>IMDb</div>
                <div className={classes.txtSilver}>Movies, TV & Celebrities</div>
            </div>
        </section>
        {/* forth row */}
        <section className={classes.forthRow}>
            <div className={classes.forthRowFlex}>
               <div>Conditions of Use</div>
               <div>Privacy Notice</div>
               <div>Consumer Health Data Privacy Disclosure</div>
               <div>Your Ads Privacy Choices</div>
            </div>
            <div className='text-center'>© 1996-2025, Amazon.com, Inc. or its affiliates</div>
        </section>
    </section>
  )
}

export default Footer