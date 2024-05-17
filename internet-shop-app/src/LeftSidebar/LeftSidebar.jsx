import React from 'react'
import './LeftSidebar.css'
import { Button } from 'antd'
export default function LeftSidebar() {
  return (
    <div className='leftsidebar'>
       <div>Категория товара</div>
       <Button>Конфеты</Button>
       <Button>Конфеты ручной работы</Button>
       <Button>Шоколад</Button>
       <Button>Зефир</Button>
       <Button>Мармелад</Button>
       <Button>Халва</Button>
       <Button>Вафли</Button>
       <Button>Пряники</Button>
       <Button>Печенье</Button>
       <Button>Торты</Button>
       <Button>Бисквиты</Button>
    </div>
  )
}
