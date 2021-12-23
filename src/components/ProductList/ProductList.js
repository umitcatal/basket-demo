import React, {useEffect, useState} from 'react';
import './ProductList.css';

export default function ProductList() {

const [products, setProducts] = useState([]);

useEffect(() => {
  async function fetchMyAPI() {
    let response = await fetch('http://localhost:3001/product')
    response = await response.json()
    setProducts(response)
  }

  fetchMyAPI()
}, []);

  return (
    <div className="product-list">
      {products.map((product) => (
        <div className="product-item" key={product.id}>
          <div className="product-img">
            <img src={product.image}></img>
          </div>
          <div className="product-desc">
            <span>{product.productName}</span>
            <span>{product.price}</span>
          </div>
          <div className="product-add-basket-button">
            <a className="js-addToCart rounded-full">Add To Cart</a>
          </div>
        </div>
      )
      )}
    </div>
  )
}
