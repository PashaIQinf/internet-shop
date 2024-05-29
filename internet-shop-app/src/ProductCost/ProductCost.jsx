import React from 'react'
import './ProductCost.css'
import { Button } from 'antd'
export default function ProductCost(props) {
  return (
    <div className='ProductCost'>
        <h2>{props.cost} руб. за {props.Kg}</h2>
        <Button>Добавить в корзину</Button>
        <div>{props.view} Просмотрено</div>
        <div>{props.buy} Куплено</div>
        </div>
  )
}
