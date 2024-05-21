import React from 'react'
import ProductName from '../ProductName/ProductName'
import ProductCost from '../ProductCost/ProductCost'
import './ProductMain.css'
export default function ProductMain() {
  return (
    <div className='ProductMain'>
        <ProductName/>
        <ProductCost/>
    </div>
  )
}
