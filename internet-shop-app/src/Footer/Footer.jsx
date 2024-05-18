import React from 'react'
import './Footer.css'
export default function Footer() {
  return (
    <div className='Footer'>
     <div className='info-footer'>
      <div className='Address_Shop'>
        <h1>АДРЕСА МАГАЗИНОВ</h1>
        <div>ТЦ «Лен», площадь Льненая, 18, 3й этаж, бутик 271</div>
        <div>ТЦ «Озеро», ул. Пушкина 49В, 2й этаж</div>
      </div>
      <div className='Contact'>
        <h1>КОНТАКТЫ</h1>
        <div>email: opa2005@yandex.ru</div>
        <div>Телефон: +7 963 940-99-19</div>
      </div>
     </div>
     <div className="company">© Wonka's dream, 2024</div>
    </div>
  )
}
