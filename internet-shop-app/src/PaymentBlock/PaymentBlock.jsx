import React from 'react'
import './PaymentBlock.css'
import { Button } from 'antd'
import { useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom'
import {selectBasket} from '../slices/BasketSlice'
export default function PaymentBlock() {
  const navigate = useNavigate();
  const Basket = useSelector(selectBasket);
  return (
    <div className='Payment'>
      <div className='Payment-cost'> 
        <div>{(Basket != null) ? (Basket.reduce((i , {cost}) => i+cost,0)) : (0)} руб.</div>
        <div> {(Basket != null) ? (Basket.reduce((i , {Kg}) => i+Kg,0)) : (0)} килограмма.</div>
      </div>
      <Button className='Payment-Button' onClick={() => (navigate("/order"))}>Оформить заказ</Button>
    </div>
  )
}
