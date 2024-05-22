import React from 'react'
import './PaymentOrder.css'
import { Button } from 'antd'
export default function PaymentOrder() {
  return (
    <div className='PaymentOrder'>
        <div className='OrderConfirm-logo'>Подтверждение заказа</div>
        <div className="OrderConfirm-cost">Итог: 100000000 руб.</div>
        <div className='OrderConfirm'>
            <Button>Оплатить заказ</Button>
        </div>
        <div className="OrderList">
            <div>Состав заказа</div>
            <a href="/internet-shop/basket">Редактировать</a>
        </div>
        <div className="OrderList-items">
            <div className="OrderList-items-col">Конфета «Глэйс» с шоколадным вкусом.</div>
            <div className="OrderList-items-col">999 штук</div>
            <div className="OrderList-items-end">99999 руб.</div>
        </div>
        <div className="OrderList-items">
            <div className="OrderList-items-col">Конфета «Глэйс» с шоколадным вкусом.</div>
            <div className="OrderList-items-col">999 штук</div>
            <div className="OrderList-items-end">99999 руб.</div>
        </div>
        <div className="OrderList-items">
            <div className="OrderList-items-col">Конфета «Глэйс» с шоколадным вкусом.</div>
            <div className="OrderList-items-col">999 штук</div>
            <div className="OrderList-items-end">99999 руб.</div>
        </div>
        <div className="OrderList-items">
            <div className="OrderList-items-col">Конфета «Глэйс» с шоколадным вкусом.</div>
            <div className="OrderList-items-col">999 штук</div>
            <div className="OrderList-items-end">99999 руб.</div>
        </div>
        <div className="OrderList-items">
            <div className="OrderList-items-col">Конфета «Глэйс» с шоколадным вкусом.</div>
            <div className="OrderList-items-col">999 штук</div>
            <div className="OrderList-items-end">99999 руб.</div>
        </div>
    </div>
  )
}
