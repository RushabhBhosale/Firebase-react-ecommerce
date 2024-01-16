import React, { useEffect, useState } from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Col, Container, Row } from 'reactstrap';
import heroImg from '../assets/images/hero-img.png';
import '../styles/Home.css';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import Services from '../services/Services';
import ProductList from '../components/UI/ProductList';
import products from '../assets/data/products';
import counterImg from '../assets/images/counter-timer-img.png';
import Clock from '../components/UI/Clock';

const Home = () => {
  const location = useLocation();
  const isShopPage = location.pathname === '/shop';

  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);
  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredTrendingProducts = products.filter(item => item.category === 'chair');
    const filteredBestSalesProducts = products.filter(item => item.category === 'sofa');
    const filteredMobileProducts = products.filter(item => item.category === 'mobile');
    const filteredWirelessProducts = products.filter(item => item.category === 'wireless');
    const filteredPopularProducts = products.filter(item => item.category === 'watch');

    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
    setMobileProducts(filteredMobileProducts);
    setWirelessProducts(filteredWirelessProducts);
    setPopularProducts(filteredPopularProducts);
  }, []);

  return (
    <Helmet title={'Home'}>
      <section className='hero-section'>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className="hero-content">
                <p className="hero-subtitle">Trending Products in {year}</p>
                <h2>Make Your Interior More Minimalistic & Modern</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates deserunt maxime nisi praesentium sunt saepe quae cum. Obcaecati, amet cum!</p>
              </div>
              <motion.button whileTap={{ scale: '1.1' }} className="buy-btn"><Link to='/shop'>SHOP NOW</Link></motion.button>
            </Col>

            <Col lg='6' md='6'>
              <div className="hero-img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section >

      <Services />

      <section className="trending-products">
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className='section-title'>Trending Products</h2>
            </Col>
            <ProductList data={trendingProducts} isShopPage={isShopPage} />
          </Row>
        </Container>
      </section>

      <section className="best-sales">
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className='section-title'>Best Sales</h2>
            </Col>
            <ProductList data={bestSalesProducts} isShopPage={isShopPage} />
          </Row>
        </Container>
      </section>

      <section className="timer-count">
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className="clock-top-content">
                <h4 className='text-white mb-2 fs-6'>Limited Offers</h4>
                <h3 className='text-white mb-3 fs-5'>Quality Armchair</h3>
              </div>
              <Clock />
              <motion.button whileTap={{ scale: '1.1' }} className="buy-btn store-btn"><Link to='/shop'>Visit Store</Link></motion.button>
            </Col>

            <Col lg='6' md='12' className='text-end counter-img'>
              <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="new-arrivals">
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className='section-title'>New Arrivals</h2>
            </Col>
            <ProductList data={wirelessProducts} isShopPage={isShopPage} />
            <ProductList data={mobileProducts} isShopPage={isShopPage} />
          </Row>
        </Container>
      </section>

      <section className="popular-category">
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className='section-title'>Popular in Category</h2>
            </Col>
            <ProductList data={popularProducts} isShopPage={isShopPage} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
