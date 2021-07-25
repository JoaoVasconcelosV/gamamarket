import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Card from './components/Card'

import './styles.scss'

import macbookImage from './assets/macbook.svg'
import geladeiraImage from './assets/geladeira.png'
import iphoneImage from './assets/iphone.png'
import maquinaImage from './assets/maquina.png'
import noteImage from './assets/note.png'
import ps5Image from './assets/ps5.png'
import tvImage from './assets/tv.png'
import xboxImage from './assets/xbox.png'

function App() {
  const [addedProduct, setAddedProduct] = useState(false);
  const [qtyProducts, setQtyProducts] = useState(0);  

  const products = [
    {
      id: 1,
      img: macbookImage,
      name: "Macbook",
      price: 7300
    }, 
    {
      id: 2,
      img: maquinaImage,
      name: "Maquina de lavar",
      price: 4000
    }, 
    {
      id: 3,
      img: iphoneImage,
      name: "Iphone",
      price: 4300
    }, 
    {
      id: 4,
      img: geladeiraImage,
      name: "Geladeira",
      price: 4000
    }, 
    {
      id: 5,
      img: noteImage,
      name: "Notebook Alienware",
      price: 22000
    }, 
    {
      id: 6,
      img: ps5Image,
      name: "PS5",
      price: 4500
    }, 
    {
      id: 7,
      img: tvImage,
      name: "TV",
      price: 2300
    },  
    {
      id: 8,
      img: xboxImage,
      name: "Xbox",
      price: 5000
    }
  ]   
    
  function addProduct(product) {    
    if(localStorage.getItem('products') === null)
      localStorage.setItem('products', JSON.stringify([product]));
    else {      
      localStorage.setItem('products', JSON.stringify([
        ...JSON.parse(localStorage.getItem('products')),
        product
      ]));
    };
    setAddedProduct(!addedProduct);        
  }  

  useEffect(() => {    
    let productsL
    if(JSON.parse(localStorage.getItem('products')))
      productsL = [...JSON.parse(localStorage.getItem('products'))];       
    setQtyProducts(productsL?.length);
  }, [addedProduct])

  return (
    <div>
      <Header qtyProducts={qtyProducts} />
      <div className="cards">
        {products.map((product) => 
          <Card key={product.id} img={product.img} title={product.name} price={product.price} onClick={() => addProduct(product)} />
        )}        
      </div>      
    </div>
  );
}

export default App;
