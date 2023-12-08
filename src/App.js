import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Profile from './Profile';
import React from 'react';
import { LoginContext } from './LoginContext';
import { useState } from 'react';
function App() {

    const [username,setusername]=useState("")
    const[productprice,setproductprice]=useState("")
    const[productquntity,setproductquntity]=useState("")
    const[descriptipn,setdescription]=useState("")
     const[showprofile,setprofile]=useState(false)

  return (
    <div className="App">
     <LoginContext.Provider value={{username,setusername,productprice,setproductprice,productquntity,setproductquntity,descriptipn,setdescription,setprofile}}>
      {
        showprofile ? <Profile/>:<Login />
      }
     </LoginContext.Provider>
      
    </div>
  );
}

export default App;
