import React from 'react'
import ProductName from '../ProductName/ProductName'
import ProductCost from '../ProductCost/ProductCost'
import './ProductMain.css'
export default function ProductMain(props) {
  return (
    <div className='ProductMain'>
        <ProductName image = {props.image} description = {props.description} name={props.name} rating = {props.rating} proteins = {props.proteins} fats = {props.fats} carbohydrates = {props.carbohydrates} calories = {props.calories}/>
        <ProductCost cost = {props.cost} view = {props.view} buy = {props.buy} Kg = {props.Kg}/>
    </div>
  )
}
