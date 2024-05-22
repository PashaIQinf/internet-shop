import React from 'react'
import './Order.css'
import Input from 'antd/es/input/Input'
export default function Order() {
  return (
    <div className='Order'>
        <div className='Delivery-logo'>Доставка</div>
        <div className='Delivery'>
           <div>Адрес</div>
           <Input/>
        </div>
        <div className='Payment-logo'>Оплата</div>
        <div className='PaymentInput'>
           <div>Номер карты</div>
           <Input/>
        </div>
        <div className='PaymentCode'>
         <div className='Secret-code'>
           <div>Срок действия</div>
           <Input/>
         </div>
         <div className='Secret-code-end'>
           <div>CVV-код</div>
           <Input/>
         </div>
        </div>
        <div className='Contacts-logo'>Контакные данные</div>
        <div className='Contacts'>
           <div>Имя</div>
           <Input/>
        </div>
        <div className='Contacts'>
           <div>Фамилия</div>
           <Input/>
        </div>
        <div className='Contacts'>
           <div>Отчество</div>
           <Input/>
        </div>
        <div className='Contacts'>
           <div>Телефон</div>
           <Input/>
        </div>
    </div>
  )
}
