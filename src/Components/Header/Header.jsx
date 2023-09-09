import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import x from './Header.module.css'

export default class Header extends Component {
  render() {
    return (
      <>
    <div className={x.appheader}>

    <nav className="navbar navbar-expand-lg navbar-light text-white p-4">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <Link className="navbar-brand text-white" to='Body' style={{marginLeft:'10%',fontSize:'30px' , fontWeight:'bold'}}>START FRAMEWORK
</Link>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 " style={{marginLeft:'40%'}}>
        <li className="nav-item">
          <Link className="nav-link text-white" style={{fontSize:'15px',marginRight:'20px',fontWeight:'bold' }} to='About'>ABOUT</ Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" style={{fontSize:'15px', marginRight:'20px',fontWeight:'bold'}} to='Protfolio'>PROTFOLIO</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" style={{fontSize:'15px', marginRight:'20px',fontWeight:'bold'}} to='Contact'>CONTACT</Link>
        </li>
        
    
      </ul>
      
    </div>
  </div>
</nav>
    </div>
      </>
    )
  }
}
