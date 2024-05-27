import { useEffect, useState } from 'react'
import './Header.css'
import Search from 'antd/es/input/Search'
import { Button } from 'antd'
import Menu from '../assets/menu.png'
import Shopcart from '../assets/shoppingcart.png'
import Wonkaslogo from "../assets/wonkaslogo.png"
import {useAuth} from '../hooks/use-auth'
import {removeUser} from '../slices/userSlice'
import { useNavigate } from 'react-router-dom'
import {useDispatch} from 'react-redux'
export default function Header() {
  const [nameclass, setNameclass] = useState('header');
  const {isAuth} = useAuth();
  const dispath = useDispatch();
  const navigate = useNavigate();
  const isSticky = (e) => {
    const scrollTop = window.scrollY;
    scrollTop >= 100 ? setNameclass('fixed') : setNameclass('');
  };

  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
        window.removeEventListener('scroll', isSticky);
    };
});

  return isAuth ? (
    <div className='header' id ={nameclass}>
    <a  className="logo" onClick={()=>navigate('/')}><img className="menulogo" src={Wonkaslogo} alt=""/></a>
    <img className="menu" src = {Menu}/>
    <div className="header-right">
     <Button className='menu-button' onClick={()=>navigate('/account')} ><a>Личный Кабинет</a></Button>
     <Button className='menu-button' onClick={()=>dispath(removeUser())}><a>Выйти</a></Button>
     <a className="shopcart" onClick={()=>navigate('/basket')}><img  src={Shopcart}  /></a>
    </div>
    <div className="search-container">
     <Search type="text" placeholder="Поиск" name="search"/>
    </div>
  </div>
  ) : (
  <div className='header' id ={nameclass}>
    <a href="/internet-shop" className="logo"><img className="menulogo" src={Wonkaslogo} alt=""/></a>
    <img className="menu" src = {Menu}/>
    <div className="header-right">
     <Button className='menu-button' ><a href = "/internet-shop/login">Авторизация</a></Button>
     <Button  className='menu-button' ><a href = "/internet-shop/register">Регистрация</a></Button>
     <a className="shopcart" href = '/internet-shop/basket'><img  src={Shopcart}  /></a>
    </div>
    <div className="search-container">
     <Search type="text" placeholder="Поиск" name="search"/>
    </div>
  </div>  
  )
}

