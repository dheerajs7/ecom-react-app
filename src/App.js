// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import  Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Layout from './Components/Layout/Layout';
import Contact from './Components/Pages/Contact';
import Product from './Components/Modules/Product';
import Cart from './Components/Pages/Cart';
import Wishlist from './Components/Pages/Wishlist';
import LearnHooks from './Components/Modules/LearnHooks';

function App() {
  return (

    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index  element={<Home/>}/>
        <Route path ='/about' element={<About/>}/>
        <Route path ='/contact' element={<Contact/>}/>
        <Route path ='/product' element={<Product/>}/>
        <Route path='/cart' element ={<Cart/>}/>
        <Route path='/wishlist' element ={<Wishlist/>}/>
        <Route path='/learnhooks' element ={<LearnHooks/>}/>
        </Route>
      </Routes>

    </BrowserRouter>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
