import React from 'react'
import './Product.css'
import Gleis from '../assets/Gleis.jfif'
import { Button } from 'antd'
import Shoppingcart from '../assets/shoppingcart.png'
import { useNavigate } from 'react-router-dom'
export default function Product() {
  const navigate = useNavigate();
  return (
    <div className='shop'>
        <div className='Product'>
            <img src ={Gleis} />
            <div className='Product-rating'>
                <div className='Product-border'>1 баллов</div>
                <div className='Product-end'>1 Куплено</div>
            </div>
            <a className='Product-name' onClick={()=> navigate('/item')} >Конфета «Глэйс» с шоколадным вкусом.</a>
            <div className='Product-cost'>
                <div>1000 руб. за штуку</div>
                <Button className='Product-buy'><img src={Shoppingcart}/></Button>
            </div>
        </div>
        
    </div>
  )
}
