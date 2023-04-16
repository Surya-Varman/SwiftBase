import '@/styles/globals.css'
import  Layout  from '../components/Layout'
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';
import {UserProvider} from '@auth0/nextjs-auth0/client'

export default function App({ Component, pageProps }) {
    useEffect(()=>{
      import("bootstrap/dist/js/bootstrap");
  },[])
  return <div>
  <UserProvider>
    <Layout>
        <Component {...pageProps} />
      </Layout>
  </UserProvider>

  </div>
      
}
