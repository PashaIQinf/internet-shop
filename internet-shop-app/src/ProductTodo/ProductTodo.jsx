import React from 'react'
import './ProductTodo.css'
import { Button } from 'antd'
import Shoppingcart from '../assets/shoppingcart.png'
import { useNavigate } from 'react-router-dom'
export default function ProductTodo(props) {
  const navigate = useNavigate();
  return (
        <div className='Product'>
            <img  className ="Product-img"src ={props.image} />
            <div className='Product-rating'>
                <div className='Product-border'>{props.rating} баллов</div>
                <div className='Product-end'>{props.buy} Куплено</div>
            </div>
            <a className='Product-name' onClick={()=> ( navigate('/'+ props.index))} >{props.name}</a>
            <div className='Product-cost'>
                <div>{props.cost} руб. за штуку</div>
                <Button className='Product-buy'><img src={Shoppingcart}/></Button>
            </div>
        </div>
        
  )
}
