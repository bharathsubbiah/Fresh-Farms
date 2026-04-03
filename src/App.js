import logo from './logo.svg';
import './App.css';
import Navbar from "./component/Navbar"
import Shippingbar from "./component/Shippingbar"
import Homepage from "./pages/Home"
import About from "./pages/About"
import Shop from "./pages/Shop"
import Contact from "./pages/Contact"
import Cart from "./pages/Cart"
import Login from './pages/Login';
import Register from './pages/Register';
import Bottom from "./component/Bottom"
import Footer from "./component/Footer"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Homepage />} />
          <Route path='/about' element={<About />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />

          <Route path='/cart' element={<Cart />} />


        </Routes>

      </BrowserRouter>
      {/* <Navbar/> */}
      {/* <Shippingbar/> */}
      {/* <Homepage/> */}
      {/* <About/> */}
      {/* <Shop/> */}
      {/* <Contact/>       */}
      {/* <Bottom/> */}
      {/* <Footer/> */}
    </div>
  );
}

export default App;
