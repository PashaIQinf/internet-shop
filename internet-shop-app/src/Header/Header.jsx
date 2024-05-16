import { useState } from 'react'
import './Header.css'
import Search from 'antd/es/input/Search'
import { Button } from 'antd'
import Menu from '../assets/menu.png'
import Shopcart from '../assets/shoppingcart.png'
import Wonkaslogo from "../assets/wonkaslogo.png"
export default function Header() {
  const [count, setCount] = useState(0)

  return (
      
        

    


  <div className="header" id ="fixed">
    <a href="#" className="logo"><img className="menulogo" src={Wonkaslogo} alt=""/></a>
    <img className="menu" src = {Menu}/>
    <div className="header-right">
     <Button className='menu-button'>Авторизация</Button>
     <Button  className='menu-button'>Регистрация</Button>
     <img  className="shopcart" src={Shopcart}/>
    </div>
    <div className="search-container">
     <Search type="text" placeholder="Поиск" name="search"/>
    </div>
  </div>
  











      
  )
}

