import React from 'react'
import './Product.css'
import ProductTodo from '../ProductTodo/ProductTodo'
import {useSelector} from 'react-redux'
import {selectProducts} from '../slices/ProductSlice'
export default function Product() {
  const ProductsList = useSelector(selectProducts);
  return (
    <div className='shop' >
        {ProductsList.map( (item , i,) =><ProductTodo key={i} index={i}image={item.image} cost={item.cost} buy={item.buy} rating={item.rating} name={item.name}/> )}
    </div>
        
  )
}
