import React from 'react'
import LeftSidebar from '../LeftSidebar/LeftSidebar.jsx'
import FilterTab from '../FilterTab/FilterTab.jsx'
import ListTab from '../ListTab/ListTab.jsx'
import Product from '../Product/Product.jsx'
import "./StorePage.css"
export default function StorePage() {
  return (
    <section className='wrapper'>
    <LeftSidebar/>
    <FilterTab/>
    <Product/>
    <ListTab/>
    </section>
  )
}
