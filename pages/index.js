import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
const inter = Inter({ subsets: ['latin'] })
import Link from 'next/link'
import axios from 'axios'
import {Product, HeroBanner, Footer, Navbar, FooterBanner,Cart,Layout,Card} from '../components'
import HomeProducts from '../components/HomeProducts'
import 'react-notifications/lib/notifications.css';
export default function Home() {
  return (
    <>
      <HeroBanner/>
      <div className='products-heading'>
        <h2>Best Selling  Products</h2>
        <p>Speaker Variants</p>
      </div>
      <HomeProducts/>
      <Footer/>
    </>
  )
}
export async function getServerSideProps() {
  let homeProductArray = {}
  // const response = await fetch('/api/home');
  // const data = await response.json();
  // console.log(data);

  return {props: homeProductArray}
}
