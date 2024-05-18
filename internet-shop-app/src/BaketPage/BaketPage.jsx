import React from 'react'
import './BaketPage.css'
import Baket from '../Baket/Baket.jsx'
import PaymentBlock from '../PaymentBlock/PaymentBlock.jsx'
export default function BaketPage() {
  return (
    <section className='wrapper'>
    <Baket/>
    <PaymentBlock/>
    </section>
  )
}
