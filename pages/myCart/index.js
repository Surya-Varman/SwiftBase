import React, { useState } from 'react'
import Cart from '../../components/Cart/Cart'
import Modal from '@/components/modal'
import {AiFillDelete} from 'react-icons/ai'
import axios from 'axios'
import useSWR from 'swr'


async function getProductDetails(productId){
  try{
    const res = await axios.post('/api/products/getProductDetails',{productId: productId});
    
    return res.data;
  }
  catch{
    return {};
  }
}
async function fetcher(){
  const res = await axios.post('/api/Cart/getCart',{userid: localStorage.getItem('userid')})
  return res.data;  
}

const index =  () => {
  const {data, error} = useSWR('Cart', fetcher)
  let totalCost = 0;
  if(error) return <h1>There is some error</h1>
  if(!data) return  <h1>Data Loading....</h1> 
  function handleCheckout(){
      for(let i=0;i<data.length;i++){
        totalCost += data[i].price*data[i].quantity;
      }
      console.log(totalCost);
  }
  return (
    <>
        {data.map(function(item){
          return <Cart name={item.name} price={item.price} totalPrice={item.price*item.quantity} quantity={item.quantity} productId={item.productId}/>
        })}
        <div className='text-center'>
          <button className='btn btn-danger' onClick={handleCheckout} data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Checkout</button>
        </div>
        <Modal data={data}/>
       
    </>
  )
}


export default index