import React, { useEffect, useRef, useState } from 'react'
import './Header.css'
import logo from '../../assets/images/eco-logo.png'
import user_icon from '../../assets/images/user-icon.png'
import { Container, Row } from 'reactstrap'
import { motion } from 'framer-motion'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Header = () => {

   const [userName, setUserName] = useState('');
   const navigate = useNavigate();
   const headerRef = useRef(null);
   const menuRef = useRef(null);
   const totalQuantity = useSelector(state => state.cart.totalQuantity);

   const navigateToCart = () => {
      navigate('/cart');
   }

   const stickyFunction = () => {
      window.addEventListener('scroll', () => {
         if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            headerRef.current.classList.add('sticky-header')
         } else {
            headerRef.current.classList.remove('sticky-header')
         }
      })
   }

   const menuToggle = () => menuRef.current.classList.toggle('active-menu');

   useEffect(() => {
      stickyFunction()

      return () => window.removeEventListener('scroll', stickyFunction);
   })

   const location = useLocation();
   const fullname = location.state?.fullname;
   const password = location.state?.password;
   const text = fullname || password || 'Rushabh';

   return (
      <header className='header' ref={headerRef}>
         <Container>
            <Row>
               <div className="nav-wrapper">
                  <Link to='/home'>
                     <div className="logo">
                        <img src={logo} alt="logo" />
                        <div>
                           <h1>{text}</h1>
                        </div>
                     </div>
                  </Link>

                  <div className="navigation" ref={menuRef} onClick={menuToggle}>
                     <ul className='menu ps-0'>
                        <span><i className="ri-close-line cross fs-3 w-100 text-end"></i></span>
                        <li className='nav-item w-75 '>
                           <NavLink to='/home'>Home</NavLink>
                        </li>
                        <li className='nav-item w-75 '>
                           <NavLink to='/shop'>Shop</NavLink>
                        </li>
                        <li className='nav-item w-75 '>
                           <NavLink to='/cart'>Cart</NavLink>
                        </li>
                     </ul>
                  </div>

                  <div className="nav-icons">
                     <span className="fav-icon"><i className="ri-heart-line"></i>
                        <span className='badge'>1</span>
                     </span>
                     <span className='cart-icon' onClick={navigateToCart}><i className="ri-shopping-bag-line"></i>
                        <span className='badge'>{totalQuantity}</span>
                     </span>

                     <span>{userName}</span>
                     <Link to='/'><motion.img whileTap={{ scale: '1.2' }} src={user_icon} /></Link>
                     <div className="mobile-menu">
                        <span onClick={menuToggle}><i className="ri-menu-line"></i></span>
                     </div>
                  </div>

               </div>
            </Row>
         </Container>
      </header>
   )
}

export default Header