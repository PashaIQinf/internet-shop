import React from 'react'
import ProductMain from '../ProductMain/ProductMain'
import ProductProps from '../ProductProps/ProductProps'
import './ProductPage.css'
export default function ProductPage(props) {
  return (
    <section className='wrapper-item'>
        <ProductMain image = {props.image} description = {props.description} name = {props.name} rating = {props.rating} proteins = {props.proteins} fats = {props.fats} carbohydrates = {props.carbohydrates} calories = {props.calories} cost = {props.cost} view = {props.view} buy = {props.buy} Kg = {props.Kg} index={props.index}/>
        <ProductProps manufacturer = {props.manufacturer}  country = {props.country} expiration = {props.expiration}  weight = {props.weight} item = {props.item} package = {props.package} taste = {props.taste} composition = {props.composition}/>
    </section>
  )
}
