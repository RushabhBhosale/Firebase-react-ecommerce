import React from 'react'
import './Footer.css'
import logo from '../../assets/images/eco-logo.png'
import { Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col lg='4'>
            <div className="logo">
              <div>
                <h1 className='text-white'>Multi-Mart</h1>
              </div>
            </div>
            <p className="footer-text mt-4 mb-3 p-3 ps-0">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. sit, amet consectetur adipisicing elit. Dolorem unde autem atque asperiores modi quas laborum vero.
            </p>
          </Col>
          <Col lg='3'>
            <div className="footer-quick-links">
              <h4 className="quick-links-title">Top Category</h4>
              <ListGroup>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Mobile Phones</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Modern Sofa</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Arm Chair</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Smart Watches</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='2'>
            <div className="footer-quick-links">
              <h4 className="quick-links-title">Usefull Links</h4>
              <ListGroup>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/shop'>Shop</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/cart'>Cart</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/login'>Login</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='3'>
            <div className="footer-quick-links">
              <h4 className="quick-links-title">Contact</h4>
              <ListGroup className='footer-contact'>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><i className="ri-map-pin-line"></i></span>
                  <p>106, Shamshan Bhumi Road, NaviMumbai </p>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 d-flex gap-2'>
                  <span><i className="ri-phone-line"></i></span>
                  <p>+91 9137996317</p>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 d-flex gap-2'>
                  <span><i className="ri-mail-line"></i></span>
                  <p>bhosale@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='12'>
              <p className='footer-copyright'>Copyrigts 2024. Developed by Rushabh Hariba Bhosale. All rights reserved.</p>
            </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer