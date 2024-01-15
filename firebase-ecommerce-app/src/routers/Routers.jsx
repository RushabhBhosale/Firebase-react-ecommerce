import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import ProductDetail from '../pages/ProductDetail'
import Shop from '../pages/Shop'

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/checkout' element={<Checkout />} />
      <Route path='/shop/:id' element={<ProductDetail />} />
      <Route path='/shop' element={<Shop />} />
    </Routes>
  )
}

export default Routers