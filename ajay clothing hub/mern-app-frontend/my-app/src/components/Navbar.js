import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {

  const auth = localStorage.getItem('user')
  const navigate = useNavigate();
  const Logout = () => {
    localStorage.clear();
    navigate('/signup')
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg nav--bg-color">
        <div className="container-fluid">

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            {auth ? <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="Cart">Cart</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' onClick={Logout} to="/login">Logout</Link>
              </li>
            </ul>
              :
              < ul className='navbar-nav ms-auto'>
                <li className="nav-item">
                  <Link className="nav-link" to="Login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="Signup">Signup</Link>
                </li>
              </ul>
            }
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar