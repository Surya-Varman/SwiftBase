import React from "react";
import Link from "next/link";
import {AiOutlineShoppingCart} from 'react-icons/ai'
import 'react-dropdown/style.css';
import Dropdown from 'react-bootstrap/Dropdown';
import {AiOutlineUser} from 'react-icons/ai'
import { useUser } from '@auth0/nextjs-auth0/client';
export default function Navbar() {
    const options = ['one','two','three'];
    const defaultOption = "select";
    const {user,isLoading} = useUser();
    return <div className="navbar-container">
        <p className="logo">
            <Link href="/">Swift Buy</Link>
        </p>
        <div>
        <button type="button" className="cart-icon">
            <AiOutlineUser/>
        </button>
        <button type="button" className="cart-icon" onClick="">
            <AiOutlineShoppingCart/>
            <span className="cart-item-qty">4</span>
        </button>
        </div>
    </div>
}