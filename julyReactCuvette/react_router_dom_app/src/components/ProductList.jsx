import React from 'react'
import { Link } from 'react-router-dom'

const ProductList = () => {

  const products = [
    {id: 1, category: "electronics",  name: "Mobile"},
    {id: 2, category: "electronics", name: "TV"},
    {id: 3, category: "Auto", name: "Scooter"},
    {id: 4, category: "electronics", name: "AC"},
    {id: 5, category: "electronics", name: "Fan"},
  ]

  return (
    <div>
       <h1>Products List</h1>
      <ul>
      {
        products.map(product => (
          <li key={product.id}>
            <Link to={`/products/${product.category}/${product.id}`}>{product.name}</Link>
          </li>
        ))
      }
      </ul>
    </div>
  )
}

export default ProductList
