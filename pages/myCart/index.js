import React from 'react'
import Cart from '../../components/Cart/Cart'
import {AiFillDelete} from 'react-icons/ai'
const index = () => {
  return (
    <>
        <Cart />
        <Cart/>
        <Cart />
        <div className='text-center'>
          <button className='btn btn-danger'>Checkout</button>
        </div>
       
    </>
  )
}

export default index