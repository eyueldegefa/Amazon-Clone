import React from 'react'
import classes from './Footer.module.css'

function Footer() {
  return (
    <section>
        {/* Back to top */}
        <div className={classes.backBtn}>Back to top</div>
        {/* footer links */}
        <section className={classes.firstRow}>
            <div> Get to know us
                <ul>
                    <li>Careers</li>
                    <li>Blog</li>
                    <li>About Amazon</li>
                    <li>Investor Relations</li>
                    <li>Amazon Device</li>
                    <li>Amazon Silence</li>
                </ul>
            </div>

            <div> Make money with us
                <ul>
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

            <div> Amazon Payment Products
                <ul>
                    <li>Amazon Business Card</li>
                    <li>Shop with Points</li>
                    <li>Reload Your Balance</li>
                    <li>Amazon Currency Converter</li>
                </ul>
            </div>

            <div> Let Us Help You
                <ul>
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
        <hr />
        <section>
            <div>
                <img src="#" alt="#" />
            </div>
            <div>
                English
            </div>
            <div>
                $ USD - U.S Dollar
            </div>
            <div>
                United State
            </div>
        </section>
    </section>
  )
}

export default Footer