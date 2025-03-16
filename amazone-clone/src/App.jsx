import React, {useContext, useEffect} from 'react';
import './App.css';
// import Layout from './components/LayOut/Layout';
// import Header from './components/Header/Header';
import Routing from './Router.jsx';
import { DataContext } from './components/DetailProvider/DetailProvider.jsx';
import { auth } from './Utility/firebase.js';
import { Type } from './Utility/actionType.jsx';
import { onAuthStateChanged } from 'firebase/auth';


function App() {

  const [{user}, dispatch] = useContext(DataContext);

  useEffect(()=>{
    onAuthStateChanged(auth, (authUser)=>{
      if(authUser){
        dispatch({
          type: Type.SET_USER,
          user
        })
      }else{
        dispatch({
          type: Type.SET_USER,
          user: null
        })
      }
    });

  }, []);

  return <Routing/>
  
}

export default App
