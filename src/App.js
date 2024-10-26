import './App.css';
import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';
import Catalog from './pages/catalog.jsx';
import About from './pages/about.jsx';
import Home from './pages/home.jsx';
import Admin from './pages/admin.jsx';
import Cart from './pages/cart.jsx';


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>

        <Routes>
          <Route path ='/' element={<Home></Home>}></Route>
          <Route path ='/home' element={<Home></Home>}></Route>
          <Route path ='/catalog' element={<Catalog></Catalog>}></Route>
          <Route path ='/about' element={<About></About>}></Route>
          <Route path ='/admin' element={<Admin></Admin>}></Route>
          <Route path ='/cart' element={<Cart></Cart>}></Route>

        </Routes>

        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

