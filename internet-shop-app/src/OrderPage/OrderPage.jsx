import React from 'react'
import './OrderPage.css'
import Order from '../Order/Order.jsx'
import PaymentOrder from '../PaymentOrder/PaymentOrder.jsx'
export default function OrderPage() {
  return (
    <section className='wrapper-order'>
         <Order/>
        <PaymentOrder/>
    </section>
  )
}
