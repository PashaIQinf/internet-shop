import { useEffect, useState } from 'react'
import './Header.css'
import Search from 'antd/es/input/Search'
import { Button } from 'antd'
import Menu from '../assets/menu.png'
import Shopcart from '../assets/shoppingcart.png'
import Wonkaslogo from "../assets/wonkaslogo.png"
export default function Header() {
  const [nameclass, setNameclass] = useState('header');
  const isSticky = (e) => {
    const scrollTop = window.scrollY;
    scrollTop >= 100 ? setNameclass('fixed') : setNameclass('');
    console.log(scrollTop);
  };
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
        window.removeEventListener('scroll', isSticky);
    };
});

  return (
      
        

    


  <div className='header' id ={nameclass}>
    <a href="/" className="logo"><img className="menulogo" src={Wonkaslogo} alt=""/></a>
    <img className="menu" src = {Menu}/>
    <div className="header-right">
     <Button className='menu-button'>Авторизация</Button>
     <Button  className='menu-button'>Регистрация</Button>
     <a className="shopcart" href = '/internet-shop/basket'><img  src={Shopcart}  /></a>
    </div>
    <div className="search-container">
     <Search type="text" placeholder="Поиск" name="search"/>
    </div>
  </div>
  











      
  )
}

