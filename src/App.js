// import { Route, Router } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Footer from './navbar/Footer';
import Header from './navbar/Header';



function App() {
  return (
    <>
      {/* <Router>
        <Route path="/about" component={Header} />
      </Router> */}
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </>
  );
}

export default App;
