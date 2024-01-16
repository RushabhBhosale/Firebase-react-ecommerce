import React, { useRef, useState } from 'react'
import '../styles/Shop.css'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from 'reactstrap'
import CommonSection from '../components/UI/CommonSection'
import products from '../assets/data/products.js'
import ProductList from '../components/UI/ProductList.jsx'

const Shop = () => {

   const [productsData, setProductsData] = useState(products);


   const handleFilter = (e) => {
      const filterValue = e.target.value;

      if (filterValue === 'sofa') {
         const filteredProducts = products.filter((item) => item.category === 'sofa');
         setProductsData(filteredProducts);
      } else if (filterValue === 'chair') {
         const filteredProducts = products.filter((item) => item.category === 'chair');
         setProductsData(filteredProducts);
      } else if (filterValue === 'mobile') {
         const filteredProducts = products.filter((item) => item.category === 'mobile');
         setProductsData(filteredProducts);
      } else if (filterValue === 'wireless') {
         const filteredProducts = products.filter((item) => item.category === 'wireless');
         setProductsData(filteredProducts);
      } else if (filterValue === 'watch') {
         const filteredProducts = products.filter((item) => item.category === 'watch');
         setProductsData(filteredProducts);
      } else if (filterValue === 'all') {
         const filteredProducts = products.filter((item) => item);
         setProductsData(filteredProducts);
      }
   }

   const handleSearch = (e) => {
      const searchTerm = e.target.value;

      const searchedProducts = products.filter((item) => item.productName.toLowerCase().includes(searchTerm.toLowerCase()));

      const searchedProduct = products.filter((item) => item.category.toLowerCase().includes(searchTerm.toLowerCase()));

      if (searchedProduct.length !== 0) {
         setProductsData(searchedProduct)
      } else {
         setProductsData(searchedProducts)
      }
   }

   

   return (
      <Helmet title="Shop">
         <CommonSection title="Products" />

         <section>
            <Container>
               <Row>
                  <Col lg='3' md='4' className='mobile-filter'>
                     <div className="filter-widget">
                        <select onChange={handleFilter}>
                           <option value="all">Filter by Category</option>
                           <option value="sofa">Sofa</option>
                           <option value="chair">Chair</option>
                           <option value="mobile">Mobile</option>
                           <option value="watch">Watch</option>
                           <option value="wireless">Wireless</option>
                        </select>
                     </div>
                  </Col>
                  <Col lg='3' md='4' className='mobile-filter'>
                     <div className="filter-widget">
                        <select>
                           <option>Sort by</option>
                           <option value="ascending">Ascending</option>
                           <option value="descending">Descending</option>
                        </select>
                     </div>
                  </Col>
                  <Col lg='6' md='4'>
                     <div className="search-box">
                      <input onChange={handleSearch} type="text" placeholder='Search...' />
                        <span><i className="ri-search-line"></i></span>
                     </div>
                  </Col>
               </Row>
            </Container>
         </section>

         <section className='pt-0'>
            <Container>
               <Row>

                  {
                     productsData.length === 0 ? (
                        <h1 className='text-center'>No Products Found!</h1>
                     ) : (
                        <ProductList data={productsData} />
                     )
                  }
               </Row>
            </Container>
         </section>
      </Helmet>
   )
}

export default Shop