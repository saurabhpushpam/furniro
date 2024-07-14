import React from 'react'
import './header.css';
import House_Logo from '../images/House_Logo.png'
import { FaUser } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom'


// // import Container from 'react-bootstrap/Container';
// // import Nav from 'react-bootstrap/Nav';
// // import Navbar from 'react-bootstrap/Navbar';


// // import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <>
      <div className='head-top'>
        <div className='head-container'>

          <div className='head-logo'>

            <img src={House_Logo} alt="House Logo" className='head-img' />
            <p className='head-title'>Furniro</p>
            {/* <Link to="/home" className='head-title'>Furniro</Link> */}

          </div>

          <div className='head-link'>


            <Link className='head-link-title' to={"/"}>Home</Link>
            <Link className='head-link-title' to={"/shop"}>Shop</Link>
            <Link className='head-link-title' to={"/cart"}>About</Link>
            <Link className='head-link-title' to={"/contact"}>Contact</Link>

            {/* <p className='head-link-title'>Home</p> */}
            {/* <p className='head-link-title'>Shop</p> */}
            {/* <p className='head-link-title'>About</p> */}
            {/* <p className='head-link-title'>Contact</p> */}

          </div>

          <div className='head-symbol'>

            <FaUser className='head-icon' />
            <FiSearch className='head-icon' />
            <FaRegHeart className='head-icon' />
            {/* <AiOutlineShoppingCart className='head-icon' /> */}

            <Link className='head-link-icon' to={"/cart"}><AiOutlineShoppingCart className='head-icon' /></Link>

          </div>

        </div>

      </div>
      {/* 
      <Navbar expand="lg" className="bg-body-tertiary, head-top">
        <Container>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <div className='head-title'>
                <img src={House_Logo} alt="House Logo" />
                <Nav.Link href="#home" >Furniro</Nav.Link>
              </div>

              <Nav.Link href="#link" className='head-value'>Home</Nav.Link>
              <Nav.Link href="#link" className='head-value'>Shop</Nav.Link>
              <Nav.Link href="#link" className='head-value'>About</Nav.Link>

            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
 */}

    </>
  )
}

export default Header


