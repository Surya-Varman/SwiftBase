import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import { MaterialNavBar } from '.'
import Footer from './Footer'
const Layout = ({children}) => {
  return (
    <div>
      <Head>
        <title>Swift Buy</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </Head>
      <header>
        <MaterialNavBar/>
      </header>
      <main className='main-cointainer'>
          {children}
      </main>
    </div>
  )
}

export default Layout