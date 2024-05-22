import React from 'react'
import './LoginPage.css'
import Input from 'antd/es/input/Input'
import { Button } from 'antd'
export default function LoginPage() {
  return (
    <section className='wrapper-login'>
        <div className="LoginPage">
           <div className='Login-logo'>Авторизация</div>
           <div className='Login'>
           <div>Логин</div>
           <Input/>
           </div>
           <div className='Login'>
           <div>Телефон</div>
           <Input/>
           </div>
           <div className='Login'>
           <div>Пароль</div>
           <Input/>
           </div>
           <Button>Вход</Button>
        </div>
    </section>
  )
}
