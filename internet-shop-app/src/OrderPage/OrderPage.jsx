import React, { useState } from 'react'
import './OrderPage.css'
import PaymentOrder from '../PaymentOrder/PaymentOrder.jsx';
import Input from 'antd/es/input/Input';
export default function OrderPage() {
  const [adress,setAdress]= useState('');
  const [validity,setValidity]= useState('');
  const [CVV, setCVV] = useState('');
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [patronymic, setPatronymic] = useState('');
  const [phone, setPhone] = useState('');
  return (
    <section className='wrapper-order'>
        <div className='Order'>
        <div className='Delivery-logo'>Доставка</div>
        <div className='Delivery'>
           <div>Адрес</div>
           <Input type='text' value={adress} onChange={(e) => setAdress(e.target.value)}/>
        </div>
        <div className='Payment-logo'>Оплата</div>
        <div className='PaymentInput'>
           <div>Номер карты</div>
           <Input type='text' value={number} onChange={(e) => setNumber(e.target.value)}/>
        </div>
        <div className='PaymentCode'>
         <div className='Secret-code'>
           <div>Срок действия</div>
           <Input type='text' value={validity} onChange={(e) => setValidity(e.target.value)}/>
         </div>
         <div className='Secret-code-end'>
           <div>CVV-код</div>
           <Input  type='password' value={CVV} onChange={(e) => setCVV(e.target.value)}/>
         </div>
        </div>
        <div className='Contacts-logo'>Контакные данные</div>
        <div className='Contacts'>
           <div>Имя</div>
           <Input  type='text' value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className='Contacts'>
           <div>Фамилия</div>
           <Input type='text' value={surname} onChange={(e) => setSurname(e.target.value)}/>
        </div>
        <div className='Contacts'>
           <div>Отчество</div>
           <Input type='text' value={patronymic} onChange={(e) => setPatronymic(e.target.value)}/>
        </div>
        <div className='Contacts'>
           <div>Телефон</div>
           <Input type='text' value={phone} onChange={(e) => setPhone(e.target.value)}/>
        </div>
        </div>
        <PaymentOrder adress ={adress} validity ={validity} CVV ={CVV} number ={number} name={name} surname ={surname} patronymic ={patronymic} phone ={phone}/>
    </section>
  )
}
