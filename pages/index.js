import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
const inter = Inter({ subsets: ['latin'] })


import {Prodct, HeroBanner, Footer, Navbar, FooterBanner,Cart,Layout,Card} from '../components'

export default function Home() {
  return (
    <>
      <HeroBanner/>
      <div className='products-heading'>
        <h2>Best Selling  Products</h2>
        <p>Speaker Variants</p>
      </div>
      <div className='products-container'>
        {['Product1','Product2','Product3'].map(function(item){
          return item;
        })}
      </div>
      <div className='d-flex flex-row cards'>
       <div> <Card description ="Good watch the best there is" price="99$" reviews="5" name= "Apple Watch Series 8"/></div>
       <div> <Card description ="Good watch the best there is" price="99$" reviews="5" name= "Apple Watch Series 8"/></div>
       <div> <Card description ="Good watch the best there is" price="99$" reviews="5" name= "Apple Watch Series 8"/></div>
       <div> <Card description ="Good watch the best there is" price="99$" reviews="5" name= "Apple Watch Series 8"/></div>
      </div>
      <div className='d-flex flex-row cards'>
       <div> <Card description ="Good watch the best there is" price="99$" reviews="5" name= "Apple Watch Series 8"/></div>
       <div> <Card description ="Good watch the best there is" price="99$" reviews="5" name= "Apple Watch Series 8"/></div>
       <div> <Card description ="Good watch the best there is" price="99$" reviews="5" name= "Apple Watch Series 8"/></div>
       <div> <Card description ="Good watch the best there is" price="99$" reviews="5" name= "Apple Watch Series 8"/></div>
      </div>
      <Footer/>
    </>
  )
}
