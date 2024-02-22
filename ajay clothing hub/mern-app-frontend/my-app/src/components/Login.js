import React, {useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'


function Login () {
  const [email,setEmail]=useState([])
  const [password,setPassword]=useState([])
  const naviagate=useNavigate();
useEffect(()=>{
  
  const auth=localStorage.getItem('user')
  if(auth){
    naviagate('/')
  }
})
  const submitForm=async ()=>{
    
    const result=await fetch('http://localhost:4000/login',{
      method:"post",
      body:JSON.stringify({email,password}),
      headers:{
        'Content-Type':'application/json'
      },
    });
    const data= await result.json()
    console.log(data)
    if(data.username){
      localStorage.setItem('user',JSON.stringify(result));
      naviagate('/')
    }else{
      alert('correct details')
    }
  }

  return (
    <>
    <br /><br />
    <div className="bgclr">
   <div className="loginform">
    <div className="container">
      <div className="row">
        <div className="col-lg-4">

        </div>
        <div className="col-lg-4">
          <div className="loginbox">
            <h3>Login</h3><br />
            <input className="input-field" value={email} onChange={(e)=>setEmail(e.target.value)}type="email" placeholder="Your email" />
            <input className="input-field" value={password} onChange={(e)=>setPassword(e.target.value)}type="text" placeholder="Password" />
            <input  className="submitbtn" onClick={submitForm} type="submit" />

          </div>

        </div>
        <div className="col-lg-4">
          
        </div>
      </div>
    </div>
   </div>

   </div>

    

    </>
  )
}


export default Login