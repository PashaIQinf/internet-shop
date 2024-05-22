import React from 'react'
import './PaymentBlock.css'
import { Button } from 'antd'
export default function PaymentBlock() {
  return (
    <div className='Payment'>
      <div className='Payment-cost'> 
        <div>1000 руб.</div>
        <div> 10 штук.</div>
      </div>
      <Button className='Payment-Button' href="/internet-shop/order">Оформить заказ</Button>
    </div>
  )
}
