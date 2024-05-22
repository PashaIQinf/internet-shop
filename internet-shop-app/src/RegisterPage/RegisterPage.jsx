import React from 'react'
import './RegisterPage.css'
import Input from 'antd/es/input/Input'
import { Button } from 'antd'
export default function RegisterPage() {
  return (
    <section className='wrapper-register'>
        <div className="RegisterPage">
           <div className='Register-logo'>Регистрация</div>
           <div className='Register'>
           <div>Логин</div>
           <Input/>
           </div>
           <div className='Register'>
           <div>Телефон</div>
           <Input/>
           </div>
           <div className='Register'>
           <div>Пароль</div>
           <Input/>
           </div>
           <div className='Register'>
           <div>Повторить Пароль</div>
           <Input/>
           </div>
           <Button>Регистрация</Button>
        </div>
    </section>
  )
}
