import React, { useEffect, useRef } from 'react'
import './Header.css'
import logo from '../../assets/images/eco-logo.png'
import user_icon from '../../assets/images/user-icon.png'
import { Container, Row } from 'reactstrap'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'


const Header = () => {

   const headerRef = useRef(null);
   const menuRef = useRef(null);

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

   return (
      <header className='header' ref={headerRef}>
         <Container>
            <Row>
               <div className="nav-wrapper">
                  <div className="logo">
                     <img src={logo} alt="logo" />
                     <div>
                        <h1>Multi-Mart</h1>
                     </div>
                  </div>

                  <div className="navigation" ref={menuRef} onClick={menuToggle}>
                     <ul className='menu'>
                        <li className='nav-item'>
                           <NavLink to='/'>Home</NavLink>
                        </li>
                        <li className='nav-item'>
                           <NavLink to='/shop'>Shop</NavLink>
                        </li>
                        <li className='nav-item'>
                           <NavLink to='/cart'>Cart</NavLink>
                        </li>
                     </ul>
                  </div>

                  <div className="nav-icons">
                     <span className="fav-icon"><i className="ri-heart-line"></i>
                        <span className='badge'>1</span>
                     </span>
                     <span className='cart-icon'><i className="ri-shopping-bag-line"></i>
                        <span className='badge'>1</span>
                     </span>

                     <motion.img whileTap={{ scale: '1.2' }} src={user_icon} alt="user   " />
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