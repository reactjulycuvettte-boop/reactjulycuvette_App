import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  const { category, productId } = useParams()

  return (
    <>
    <h1>Product Details</h1>
    <h2>Category: {category}</h2>
    <h2>Product ID: {productId}</h2>
    </>
  )
}

export default ProductDetail
