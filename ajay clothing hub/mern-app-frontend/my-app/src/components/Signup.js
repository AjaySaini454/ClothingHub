import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Signup() {
  const [username, setName] = useState([])
  const [email, setEmail] = useState([])
  const [password, setPassword] = useState([])
  const navaigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem('user')
    if (auth) {
      navaigate('/')
    }
  })
  const handleForm = async (e) => {
    console.log(username, email, password)
    let result = await fetch('http://localhost:4000/user', {
      method: "post",
      body: JSON.stringify({ username, email, password }),
      headers: {
        'Content-Type': 'application/json'
      },
    });
    const data = await result.json()
    console.log(data)

    {
      localStorage.setItem('user', JSON.stringify(data))
      navaigate('/');
    }
  }
  return (
    <div>

      <div className="signupform">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">

            </div>
            <div className="col-lg-4">
              <br /><br />
              <div className="supbox">
                <h3>Register</h3>
                <br />
                <input className="inputbox" value={username} onChange={(e) => setName(e.target.value)} type="text" placeholder="your name" />
                <input className="inputbox" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email id" />
                <input className="inputbox" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                <input className="submitbtn" onClick={handleForm} type="submit" />




              </div>

            </div>
            <div className="col-lg-4">

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup