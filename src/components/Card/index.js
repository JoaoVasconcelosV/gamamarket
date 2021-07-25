import React from 'react'
import './styles.scss'

const Card = function({img, title, price, onClick}) {
  return(
    <div className="card">
      <img className="card-image" src={img} alt={title} />
      <span>{title}</span>
      <span>R${price}</span>
      <button className="card-button" onClick={onClick}>Comprar</button>
    </div>
  )
}

export default Card;