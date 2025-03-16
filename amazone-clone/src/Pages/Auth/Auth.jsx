import React, {useState, useContext} from 'react'
import classes from './SignUp.module.css';
import { Link, useNavigate} from "react-router-dom";
import amazonLogo from '../../assets/amazonLogo.png';
import { auth } from '../../Utility/firebase';
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth';
import { ClipLoader } from 'react-spinners';
import {DataContext} from '../../components/DetailProvider/DetailProvider';
import { Type } from '../../Utility/actionType';


function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [Loding, setLoding] = useState({
    signIn: false,
    signUp: false
  })
  const navigate = useNavigate();

  // Data Layer
  const [{user}, dispatch] = useContext(DataContext);

  // Firebase auth
  const authHandler = async(e)=>{
    e.preventDefault();

    if(e.target.name === 'signin'){
      setLoding({...Loding, signIn: true})
      signInWithEmailAndPassword(auth, email, password).then((userInfo)=>{
        dispatch({
          type: Type.SET_USER,
          user: userInfo.user
        });
        setLoding({...Loding, signIn: false})
        navigate('/');
      }).catch((error)=>{
        setEmail(error.message);
      })
    }else{
      setLoding({...Loding, signUp: true})
      createUserWithEmailAndPassword(auth, email, password).then((userInfo)=>{
        dispatch({
          type: Type.SET_USER,
          user: userInfo.user
        });
        setLoding({...Loding, signUp: false})
        navigate('/');
      }).catch((error)=>{
        setEmail(error.message);
      })
    }
  }

  return (
        <section className={classes.login}>
          <Link to='/'>
            <img src={amazonLogo} alt="" />
          </Link>
          {/* form */}
          <div className={classes.login_container}>
            <h3>Sign in</h3>
            <form action="" >
              <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" onChange={(e)=>setEmail(e.target.value)} id="email" placeholder='Enter your email' />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" onChange={(e)=>setPassword(e.target.value)}  id="password" placeholder='Enter your password'/>
              </div>
              <button 
                name='signin'
                type='submit'
                onClick={authHandler}
                className={classes.btn_signin}>
                  {Loding.signIn ? (<ClipLoader color='black' size={15}/>): (" Sign in")}
              </button>
              <p>By signing-in you agree the AMAZON FAKE CLONE conditons use and sales. Please see our Company Notice, Our Cookies Notice and our Interest-Based Ads Notice </p>
              <button 
                name='signup'
                type='submit'
                onClick={authHandler}
                className={classes.btn_createacc}>
                  {Loding.signUp ? (<ClipLoader color='black' size={15}/>): ("Create Amazon Account")}
                
              </button>
            </form>
          </div>
          { error && (<p className='pt-3 text-danger'>{error}</p>)}
        </section>
  )
}

export default Signup