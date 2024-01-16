import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import { Col, Container, Form, FormGroup, Row } from 'reactstrap'
import '../styles/Checkout.css'
import { useSelector } from 'react-redux'

const Checkout = () => {

  const totalQty = useSelector(state => state.cart.totalQuantity);
  const totalAmount = useSelector(state => state.cart.totalAmount);

  return (
    <Helmet title='Checkout'>
      <CommonSection title='Checkout' />

      <section>
        <Container>
          <Row>
            <Col lg='8'>
              <h6 className='mb-4 fw-bold'>Billing Information</h6>
              <Form className='billing-form'>
                <FormGroup className='form-group'>
                  <input type="text" placeholder='Enter your name' />
                </FormGroup>
                <FormGroup className='form-group'>
                  <input type="email" placeholder='Enter your email' />
                </FormGroup>
                <FormGroup className='form-group'>
                  <input type="number" placeholder='Phone number' />
                </FormGroup>
                <FormGroup className='form-group'>
                  <input type="text" placeholder='Street Address' />
                </FormGroup>
                <FormGroup className='form-group'>
                  <input type="text" placeholder='City' />
                </FormGroup>
                <FormGroup className='form-group'>
                  <input type="text" placeholder='Postal Code' />
                </FormGroup>
                <FormGroup className='form-group'>
                  <input type="text" value='India' readOnly />
                </FormGroup>
              </Form>
            </Col>
            <Col lg='4'>
              <div className="checkout-cart">
                <h6>Total Qty: <span>{totalQty} items</span></h6>
                <h6>Subtotal Qty: <span>${totalAmount}</span></h6>
                <h6>Shipping: <span>$49</span></h6>
                <h6>Free shipping <span>- $49</span></h6>
                <h4>Total cost: <span>${totalAmount}</span></h4>
              <button className="buy-btn auth-btn w-100">Place Order</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Checkout