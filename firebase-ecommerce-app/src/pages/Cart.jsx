import React from 'react';
import '../styles/Cart.css';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import { Col, Container, Row } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../redux/slices/CartSlice';
import { Link } from 'react-router-dom'

const Cart = () => {

  const cartItems = useSelector(state => state.cart.cartItems)
  const totalAmount = useSelector(state => state.cart.totalAmount)

  return (
    <Helmet title='Cart'>
      <CommonSection title='Shopping Cart' />
      <section>
        <Container>
          <Row>
            <Col lg='9'>

              {cartItems.length === 0 ? <h2 className='text-center fs-4'>No items in the Cart</h2> : <table className='table bordered'>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item, index) => (
                    <Tr item={item} key={index} />
                  ))}
                </tbody>
              </table>}

            </Col>
            <Col lg='3'>
              <div className='d-flex subtitle mt-4 gap-5'>
                <h6 className='d-flex align-items-center justify-content-center fs-5'>SubTotal:</h6>
                <span className='fs-4 fw-bold'>${totalAmount}</span>
              </div>
              <div>
                <button className="buy-btn w-100"><Link to='/checkout'>Checkout</Link></button>
                <button className="buy-btn w-100 mt-3"><Link to='/shop'>Continue Shopping</Link></button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = ({ item }) => {

  const dispatch = useDispatch();

  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id))
  }

  return <tr>
    <td><img src={item.imgUrl} /></td>
    <td className='py-5'>{item.productName}</td>
    <td className='py-5'>${item.price}</td>
    <td className='py-5'>{item.quantity}pc</td>
    <td className='py-5'><span onClick={deleteProduct}><i className="ri-delete-bin-6-line"></i></span></td>
  </tr>
}

export default Cart;
