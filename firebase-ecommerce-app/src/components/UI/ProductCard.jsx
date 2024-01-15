import React from 'react'
import { motion } from 'framer-motion'
import '../../styles/product-card.css'
import { Col } from 'reactstrap'
import { Link } from 'react-router-dom'

const ProductCard = ({ item }) => {
   return (
      <Col lg='3' md='4' className='product'>
         <div className="product-item">
            <div className="product-img">
               <motion.img whileHover={{ scale: '0.9' }} src={item.imgUrl} alt="product" />
            </div>
            <div className="p-2 product-info">
               <h3 className='product-name'><Link to={`shop/${item.id}`}>{item.productName}</Link></h3>
               <span>{item.category}</span>
            </div>
            <div className="product-card-bottom d-flex align-content-center justify-content-between p-2">
               <span className="price">${item.price}</span>
               <motion.span whileTap={{ scale: '1.1' }}><i className="ri-shopping-cart-2-line"></i></motion.span>
            </div>
         </div>
      </Col>
   )
}

export default ProductCard