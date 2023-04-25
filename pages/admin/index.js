import React from 'react'
import useSWR from 'swr';
import axios from 'axios'
import OrderCard from '@/components/OrderCard'
const index = () => {
  async function fetcher(){
    const res = await axios.get('/api/orders/getOrders');
    return res.data;
  }
  const {data,error} = useSWR('Order',fetcher);
  if(error) return <h1>There is a error</h1>
  if(!data) return <h1> Loading</h1>
  return (
    <>
        {data.map(function(item){
          return <>
            <OrderCard userid={item.userid} productId={item.productId} quantity={item.quantity} status={item.status} accountNumber={item.accountNumber} warehouse={item.warehouse} email='cs20b056@iittp.ac.in'/>
          </>
        })}
    </>
  )
}

export default index