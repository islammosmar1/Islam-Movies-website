import React, { useState } from 'react'
import "./header.css"
import { Link } from 'react-router-dom';
  export const Header = () => {
    const[Mobile,setMobile]=useState(false)
  return (
   <>
   
   <header>
    <div className='container flexSB'>
        <nav className='flexSB'>
            <div className='logo'>
         <img src='./images/logo.png'></img>
            </div>
            <ul className={Mobile ? "navMenu-list": 'flexSB' } onClick={()=>setMobile(false)} >
                <Link to='/'>Home</Link>
                <Link to='/Series'>Series</Link>
                <Link to='/Movies'>Movies</Link>
                <Link to='/Pages'>Pages</Link>
                <Link to='/Contact'>Contact</Link>


            </ul>

            <button className='toggle' onClick={()=>setMobile(!Mobile)}>
             {Mobile ?  <i className='fa fa-times'></i>: <i className='fa fa-bars'></i>}
            </button>
        </nav>
        <div className="account flexSB">
        <i className='fa fa-search'></i>
        <i className='fa fa-bell'></i>
        <i className='fa fa-user'></i>
        <button>Subscribe Now</button>


        </div>
    </div>
   </header>
   </>
  )
}

export default Header
