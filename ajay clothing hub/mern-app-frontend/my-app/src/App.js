import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route , Routes,link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Cart from './cartss/Cart';
import Private from './components/Private';
import Success from './components/Success';



function App() {
  return (
    <>
      <Navbar/>
<Routes>
  <Route element={<Private />} >
  <Route path="/" element={<Home></Home>}/>
  <Route path="/Cart" element={<Cart></Cart>}/>
  <Route path="/Logout" element={<h1>Logout</h1>} />
  <Route path="/success" element={<Success />} />
  </Route>
  <Route path="/Login" element={<Login></Login>}/>
  <Route path="/Signup" element={<Signup></Signup>}/>

</Routes>

      
    
    </>
   
  );
}

export default App;
