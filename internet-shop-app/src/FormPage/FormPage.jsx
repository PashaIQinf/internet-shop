import React, { useState } from 'react'
import './FormPage.css'
import { Button } from 'antd';
import Input from 'antd/es/input/Input';
export default function FormPage({title , handleClick,ErrLogin,ErrPassword}) {
  const [email,setEmail]= useState('');
  const [pass,setPass]= useState('');
  return (
    <section className='wrapper-form'>
        <div className="FormPage" >
           <div className='Form-logo'>{title}</div>
           <div className='Form'>
           <div>Логин</div>
           <Input type='text' value={email} onChange={(e) => setEmail(e.target.value)}/>
           <div className='Error-Form'>{ErrLogin}</div>
           </div>
           <div className='Form'>
           <div>Пароль</div>
           <Input type='text' value={pass} onChange={(e) => setPass(e.target.value)}/>
           <div className='Error-Form'>{ErrPassword}</div>
           </div>
           <Button onClick={()=>handleClick(email,pass)}>{title}</Button>
        </div>
    </section>
  )
}