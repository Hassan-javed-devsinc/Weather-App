import React from 'react'
import "./Nav.css"
import logo from "./logo.png"

export default function Nav() {
    return (
        <div className='nav'>
        <img className='logo' src={logo}alt="logo" />
      </div>
    );
}
