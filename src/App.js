// import { Route, Router } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Footer from './navbar/Footer';
import Header from './navbar/Header';
import Shop from './components/Shop/Shop';
import CheckOut from './components/BillingDetails/CheckOut';



function App() {
  return (
    <>
      {/* <Router>
        <Route path="/about" component={Header} />
      </Router> */}
      <Header></Header>
      {/* <Home></Home> */}
      {/* <Shop></Shop> */}
      <CheckOut></CheckOut>
      <Footer></Footer>
    </>
  );
}

export default App;
