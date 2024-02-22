import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/app/cartSlice';
import Carsoul from './Carsoul';

function Home() {
  const [data, setData] = useState([])
  const dispatch = useDispatch();

  const send = (e) => {
    dispatch(addToCart(e))
  }

  useEffect(() => {
    getData()
  })
  async function getData() {
    let result = await fetch('http://localhost:4000/api')
    let json = await result.json();
    setData(json)
  }
  return (
    <>
      <div className='bgchome'>
        <center> <h1>Unique Clothing Hub</h1></center>
        <br></br>
        <Carsoul />
        <br></br>

        <div className='form'>
          {
            data.map((value) => {
              return (
                <div className='card' key={value.id}>
                  <img className='card_img' src={value.image} alt="title" />
                  <div>
                    <h3 className='color-text'>{value.category}</h3>
                  </div>
                  <div className='card_price'>
                    <span>Price :₹{value.price}</span>
                  </div>
                  <button className='btn' onClick={() => send(value)}>Add To Cart</button>
                </div>

              )
            })
          }
        </div>
        <br></br>
        <div className="socialicons">
          <a href="https://www.facebook.com/profile.php?id=100057308173595" target="_blank"><i className="fa-brands fa-facebook"></i></a>
          <a href="https://www.instagram.com/ajay.saini012/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
          <a href="https://www.linkedin.com/in/ajay-saini-0a52a822a/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
        </div>
        <br></br>
      </div>
      <div className="footerbotom">
        <p>Copyright &copy;2023; Designed by <span className="designername">Ajay



        </span></p>
      </div>
    </>
  )
}

export default Home