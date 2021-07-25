import React from 'react'
import logo from '../../assets/logo.svg'
import './styles.scss'

import cartImage from '../../assets/cart.png'

const Header = function({qtyProducts}) {
  return (
    <header className="header">
      <div className="header-logo">
        <img src={logo} alt="ImagemLogo" />
        <h1>GamaMarket</h1>
      </div>
      <div className="header-cart">
        <img className="cart" src={cartImage} alt="cart" />
        <span>{qtyProducts}</span>
      </div>
    </header>
  )
}

export default Header;