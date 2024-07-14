// import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";

import { Routes, Route } from 'react-router-dom'


import './App.css';
import Home from './components/home/Home';
import Footer from './navbar/Footer';
import Header from './navbar/Header';
import Shop from './components/Shop/Shop';
import CheckOut from './components/BillingDetails/CheckOut';
import Cart from './components/Cart/Cart'
import Contact from './components/Contact/Contact';
import Product from './components/Product/Product';



// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//       <Route path="/" element={<Home />}>
//         <Route path="/" element={<Home />} />
//         <Route path='/about' element={<CheckOut />} />
//         <Route path='/shop' element={<Shop />} />
//         <Route path='/contact' element={<Contact />} />
//         <Route path='/cart' element={<Cart />} />
//       </Route>
//     </>
//   )
// )

function App() {
  return (
    <>
      {/* <RouterProvider router={router} /> */}


      <Header></Header>
      {/* <Home></Home> */}
      {/* <Shop></Shop> */}
      {/* <CheckOut></CheckOut> */}
      {/* <Cart></Cart> */}
      {/* <Contact></Contact> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/checkout" element={<CheckOut />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/product" element={<Product />}></Route>

        {/* <Route path="/contact" element={<h1>This is Contact page</h1>}></Route> */}
        {/* <Route path="/about" element={<About></About>}></Route> */}

        <Route path="*" element={<div><h1>This is Error Page</h1></div>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
