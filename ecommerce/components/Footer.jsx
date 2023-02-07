import React from 'react'
import { icons } from 'react-icons'
import { AiFillInstagram, AiFillSignal, AiFillTwitterCircle } from 'react-icons/ai'

const  Footer = () => {
  return (
    <div className='footer-container'>
       <h3 >2023 All Right Reserve By Khan Sahil</h3>
       <p className='icons'>
        <AiFillInstagram />
        <AiFillTwitterCircle />

       </p>
    </div>
  )
}

export default Footer
