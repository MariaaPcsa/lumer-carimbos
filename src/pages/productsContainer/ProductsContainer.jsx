 import React from 'react'
 import './ProductsContainer.css'
import { catalog } from '../../utils/catalog.js'
import ProductCard from '../productcard/ProductCard.jsx'

const ProductsContainer = () => {
  return (
    <div >
    <section className="products-container">
      {catalog.map((product) => (
        <ProductCard key={`product_${product.id}_key`} {...product} />
      ))}
    </section>
    </div>
  )
}

export default ProductsContainer
