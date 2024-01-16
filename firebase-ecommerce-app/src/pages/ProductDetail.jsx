import React, { useEffect, useRef, useState } from 'react'
import '../styles/Product-details.css'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import { Col, Container, Row } from 'reactstrap'
import { useParams } from 'react-router-dom'
import products from '../assets/data/products'
import { motion } from 'framer-motion'
import ProductList from '../components/UI/ProductList'
import { useDispatch } from 'react-redux'
import { cartActions } from '../redux/slices/CartSlice'
import toast from 'react-hot-toast'

const ProductDetail = () => {

  const { id } = useParams();
  const product = products.find(item => item.id === id);
  const { imgUrl, productName, price, avgRating, reviews, description, shortDesc, category } = product;
  const [tab, setTab] = useState('desc');
  const [rating, setRating] = useState(null);
  const relatedProducts = products.filter(item => item.category === category);
  const reviewUser = useRef('');
  const reviewMsg = useRef('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const reviewUserName = reviewUser.current.value
    const reviewUserMessage = reviewMsg.current.value

    const reviewObj = {
      userName: reviewUserName,
      text: reviewUserMessage,
      rating,
    }

    toast.success("Review Submitted")
  }

  const addToCart = () => {
    dispatch(
        cartActions.addItem({
        id,
        image: imgUrl,
        productName,
        price,
      })
    );

    toast.success("Product added successfully")
  };

  useEffect(() => {
    window.scrollTo(0,0)
  }, [product])

  return (
    <Helmet title={productName}>
      <CommonSection title={productName} />

      <section className='pt-0'>
        <Container>
          <Row>
            <Col lg='6'>
              <img className='product-image' src={imgUrl} alt="" />
            </Col>

            <Col lg='6'>
              <div className="product-details">
                <h2>{productName}</h2>
                <div className='product-category'>{category.toUpperCase()}</div>
                <div className="product-rating d-flex align-items-center gap-5 mb-3">
                  <div>
                    <span><i className="ri-star-fill"></i></span>
                    <span><i className="ri-star-fill"></i></span>
                    <span><i className="ri-star-fill"></i></span>
                    <span><i className="ri-star-fill"></i></span>
                    <span><i className="ri-star-fill"></i></span>
                  </div>
                  <p>(<span>{avgRating}</span>rating)</p>
                </div>
                <div>
                  <span className='product-price'>${price}</span>
                </div>
                <p className='mt-3'>{shortDesc}</p>
                <motion.button whileTap={{ scale: '1.05' }} onClick={addToCart} className="buy-btn">Add to cart</motion.button>
              </div>
            </Col>

            <section>
              <Container>
                <Row>
                  <Col lg='12'>
                    <div className="tab-wrapper d-flex align-items-center gap-5">
                      <h6 className={`${tab === 'desc' ? 'active-tab' : ''}`} onClick={() => setTab('desc')}>Description</h6>
                      <h6 className={`${tab === 'rev' ? 'active-tab' : ''}`} onClick={() => setTab('rev')}>Reviews({reviews.length})</h6>
                    </div>

                    {tab === 'desc' ? (
                      <div className="tab-content mt-4">
                        <p>{description}</p>
                      </div>
                    ) : (
                      <div className="product-review mt-4">
                        <div className="review-wrapper">
                          <ul className='p-0'>
                            {reviews?.map((item, index) => (
                              <li key={index} className='mb-4'>
                                <h6>John Doe</h6>
                                <span>{item.rating} (rating)</span>
                                <p>{item.text}</p>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="review-form">
                          <form onSubmit={handleSubmit}>
                            <h4>Leave your review</h4>
                            <div className="form-group d-flex align-items-center gap-2">
                              <motion.span whileTap={{scale: '1.2'}} onClick={() => setRating(1)}><i className="ri-star-fill"></i></motion.span>
                              <motion.span whileTap={{scale: '1.2'}} onClick={() => setRating(2)}><i className="ri-star-fill"></i></motion.span>
                              <motion.span whileTap={{scale: '1.2'}} onClick={() => setRating(3)}><i className="ri-star-fill"></i></motion.span>
                              <motion.span whileTap={{scale: '1.2'}} onClick={() => setRating(4)}><i className="ri-star-fill"></i></motion.span>
                              <motion.span whileTap={{scale: '1.2'}} onClick={() => setRating(5)}><i className="ri-star-fill"></i></motion.span>
                            </div>
                            <div className="form-group">
                              <input type="text" ref={reviewUser} placeholder='Enter your name' required/>
                            </div>
                            <div className="form-group">
                              <textarea rows={6} ref={reviewMsg} type="text" placeholder='Review message...' required />
                            </div>
                            <button type='submit' className="buy-btn">Submit</button>
                          </form>
                        </div>
                      </div>
                    )}

                  </Col>

                  <Col lg='12'>
                    <h2 className='related-title'>You might also like</h2>
                  </Col>
                  <ProductList data={relatedProducts} />

                </Row>
              </Container>
            </section>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default ProductDetail