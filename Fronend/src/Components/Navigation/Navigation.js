import React from 'react'
import Nav from 'react-bootstrap/Nav';
import "./Navigation.css"
import logo from '../../img/logo.png'

export default function Navigation() {
  return (
    <div className='bg-theme  d-flex '> 
      <Nav className="px5p my-auto py-2 w-100" activeKey="/">
      <Nav.Item className=' d-flex'>
        <img src={logo} width="55px" height="50px" alt="" className='rounded-3 my-auto'/>
        <Nav.Link href="/home" className='text-light me-5 my-auto brand-name'>SecureHub</Nav.Link>
        </Nav.Item>
    
        <Nav.Item className=' d-flex'>
          <Nav.Link href="/aboutus" className='text-light my-auto'>AboutUs</Nav.Link>
        </Nav.Item>
        <Nav.Item className=' d-flex'>
          <Nav.Link href="/contact" className='text-light my-auto'>ContactUs</Nav.Link>
        </Nav.Item>

        <Nav.Item className='ms-auto d-flex'>
          <Nav.Link href="/login" className='text-light my-auto'>Log In</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/signup" className='text-light'><button className='btn btn-outline-light m-0'>Sign Up</button></Nav.Link>
        </Nav.Item>
      </Nav>
      </div>
  )
}
