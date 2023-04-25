import React from 'react'
import Link from 'next/link'
import Card from './Card'
import axios from 'axios'
import { useEffect } from 'react'
import useSWR from 'swr'
const fetcher = async() =>{
  const response = await fetch('/api/home');
  const data = await response.json();
  return data;
}
import {NotificationContainer,NotificationManager} from 'react-notifications';
const HomeProducts = () => {
  const {data,error} = useSWR('homepage',fetcher);
  if(error) return <div>failed to load</div>
  if(!data) return <div>loading...</div>
  return (
    <div> 
          <div>
          <div className='ms-4'><Link href="/"><h4>Groceries</h4></Link></div>
          <div className='d-flex flex-row cards'>
            {data["Groceries"].map((product) => {
                return <div> <Card productId = {product.productId} description ={product.description} price={product.price} reviews={product.reviews} name= {product.name}/></div>
            })}
          </div>
      </div>
      <div>
        
        <div className='m-4'><Link href="/"><h4>Tech</h4></Link></div>
        <div className='d-flex flex-row cards'>
            <Card description ="Good watch the best there is" price="99$" reviews="5" name= "Apple Watch Series 8"/>
            {
              data["Tech"].map((product) => {
                return  <Card productId = {product.productId} description ={product.description} price={product.price} reviews={product.reviews} name= {product.name}/>
              })
            }
        </div>
      </div>
      <div>
        <div className='ms-4'><Link href="/"><h4>Fashion</h4></Link></div>
        <div className='d-flex flex-row cards'>
            {
              data["Fashion"].map((product) => {
                return <div> <Card productId = {product.productId} description ={product.description} price={product.price} reviews={product.reviews} name= {product.name}/></div>
              })
            }
        </div>
      </div>
    
          <NotificationContainer/>
    </div>
  )
}
export default HomeProducts