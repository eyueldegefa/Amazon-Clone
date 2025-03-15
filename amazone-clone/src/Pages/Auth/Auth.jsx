import React from 'react'
import classes from './SignUp.module.css';
import { Link} from "react-router-dom";
import amazonLogo from '../../assets/amazonLogo.png';

function Signup() {
  return (
        <section className={classes.login}>
          <img src={amazonLogo} alt="" />
          <p>check</p>
        </section>
  )
}

export default Signup