import React from 'react'
import ProductMain from '../ProductMain/ProductMain'
import ProductProps from '../ProductProps/ProductProps'
import './ProductPage.css'
export default function ProductPage() {
  return (
    <section className='wrapper-item'>
        <ProductMain/>
        <ProductProps/>
    </section>
  )
}
