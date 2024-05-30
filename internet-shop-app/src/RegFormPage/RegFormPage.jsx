import React, { useState } from 'react'
import './RegFormPage.css'
import { Button } from 'antd';
import Input from 'antd/es/input/Input';
export default function RegFormPage({title , handleClick,errPass,ErrLogin, ErrPassword}) {
  const [email,setEmail]= useState('');
  const [pass,setPass]= useState('');
  const [repass, setRepass] = useState('');
  return (
    <section className='wrapper-regform'>
        <div className="RegFormPage" >
           <div className='RegForm-logo'>{title}</div>
           <div className='RegForm'>
           <div>Логин</div>
           <Input type='text' value={email} onChange={(e) => setEmail(e.target.value)}/>
           <div className='Error-RegForm'>{ErrLogin}</div>
           </div>
           <div className='RegForm'>
           <div>Пароль</div>
           <Input type='password' value={pass} onChange={(e) => setPass(e.target.value)}/>
           <div className='Error-RegForm'>{ErrPassword}</div>
           </div>
           <div className='RegForm'>
           <div>Повторить Пароль</div>
           <Input type='password' value={repass} onChange={(e) => setRepass(e.target.value)}/>
           <div className='Error-RegForm'>{errPass}</div>
           </div>
           <Button onClick={()=>handleClick(email,pass,repass)}>{title}</Button>
        </div>
    </section>
  )
}