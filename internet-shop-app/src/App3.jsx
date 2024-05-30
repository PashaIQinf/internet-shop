import React, { useEffect } from 'react'
import Header from './Header/Header.jsx'
import Footer from './Footer/Footer.jsx'
import ProductPage from './ProductPage/ProductPage.jsx'
import {useParams} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {selectProducts} from './slices/ProductSlice'
export default function App3() {
  const { itemid } = useParams();
  const ProductsList = useSelector(selectProducts);
  return (
    <>
     <Header/>
     {ProductsList.map( (item, i) => (i==itemid) ? (<ProductPage key= {itemid} index= {itemid} image= {item.image} description = {item.description} name={item.name} rating= {item.rating} proteins = {item.proteins} fats = {item.fats} carbohydrates = {item.carbohydrates} calories = {item.calories} cost = {item.cost} view = {item.view} buy = {item.buy} manufacturer = {item.manufacturer}  country = {item.country} expiration = {item.expiration}  weight = {item.weight} item = {item.item} package = {item.package} taste = {item.taste} composition = {item.composition} Kg = {item.Kg}/> ) : (console.log()))}
     <Footer/>
    </>
  )
}