import React from 'react'
import './AccountPage.css'
import { Button } from 'antd'
import Input from 'antd/es/input/Input'
import { genBoxStyle } from 'antd/es/image/style'
import {selectEmail} from '../slices/userSlice'
import {selectPassword} from '../slices/userPass'
import { useSelector} from 'react-redux'
export default function AccountPage() {
  const emailUser = useSelector(selectEmail);
  const passwordUser = useSelector(selectPassword);
  return (
    <section className='wrapper-account'>
    <div className='AccountPage'>
        <div  className='AccountTab'>
            <nav  className='TabInset'>
                <a href="#Personal-account"   className='Inset' tabIndex={10}><span>Личный Кабинет</span></a>
                <a href="#My-orders"    className='Inset' tabIndex={10}><span>Мои Заказы</span></a>
                <Button >Выход</Button>
            </nav>
            <div className='TabPage'>
                <div id="Personal-account" className='Page' >
                    <div className="UserData-logo">Данные пользователя</div>
                    <div className='UserData'>
                      <div>Логин</div>
                      <Input value = {emailUser}/>
                      <a>Изменить</a>
                    </div>
                    <div className='UserData'>
                      <div>Пароль</div>
                      <Input value={passwordUser}/>
                      <a>Изменить</a>
                    </div>
                </div>
                <div id="My-orders" className='Page'>
                <table className='OrdersTable'>
                   <tr className='Orders-props'>
                    <td>Дата и время</td>
                    <td>Номер заказа</td>
                    <td>Статус</td>
                    <td>Сумма</td>
                   </tr>
                   <tr className='Orders-items'>
                    <td>23.05.2024 20:08:00</td>
                    <td>105000</td>
                    <td><genBoxStyle>Готов</genBoxStyle></td>
                    <td>9999999 руб.</td>
                   </tr>
                   <tr className='Orders-items'>
                    <td>23.05.2024 20:08:00</td>
                    <td>105000</td>
                    <td><genBoxStyle>Готов</genBoxStyle></td>
                    <td>9999999 руб.</td>
                   </tr>
                   <tr className='Orders-items'>
                    <td>23.05.2024 20:08:00</td>
                    <td>105000</td>
                    <td><genBoxStyle>Готов</genBoxStyle></td>
                    <td>9999999 руб.</td>
                   </tr>
                   <tr className='Orders-items'>
                    <td>23.05.2024 20:08:00</td>
                    <td>105000</td>
                    <td><genBoxStyle>Готов</genBoxStyle></td>
                    <td>9999999 руб.</td>
                   </tr>
                   <tr className='Orders-items'>
                    <td>23.05.2024 20:08:00</td>
                    <td>105000</td>
                    <td><genBoxStyle>Готов</genBoxStyle></td>
                    <td>9999999 руб.</td>
                   </tr>
                   <tr className='Orders-items'>
                    <td>23.05.2024 20:08:00</td>
                    <td>105000</td>
                    <td><genBoxStyle>Готов</genBoxStyle></td>
                    <td>9999999 руб.</td>
                   </tr>
                   <tr className='Orders-items'>
                    <td>23.05.2024 20:08:00</td>
                    <td>105000</td>
                    <td><genBoxStyle>Готов</genBoxStyle></td>
                    <td>9999999 руб.</td>
                   </tr>
                   <tr className='Orders-items'>
                    <td>23.05.2024 20:08:00</td>
                    <td>105000</td>
                    <td><genBoxStyle>Готов</genBoxStyle></td>
                    <td>9999999 руб.</td>
                   </tr>
                   <tr className='Orders-items'>
                    <td>23.05.2024 20:08:00</td>
                    <td>105000</td>
                    <td><genBoxStyle>Готов</genBoxStyle></td>
                    <td>9999999 руб.</td>
                   </tr>
                   <tr className='Orders-items'>
                    <td>23.05.2024 20:08:00</td>
                    <td>105000</td>
                    <td><genBoxStyle>Готов</genBoxStyle></td>
                    <td>9999999 руб.</td>
                   </tr>
                   <tr className='Orders-items'>
                    <td>23.05.2024 20:08:00</td>
                    <td>105000</td>
                    <td><genBoxStyle>Готов</genBoxStyle></td>
                    <td>9999999 руб.</td>
                   </tr>
                   <tr className='Orders-items'>
                    <td>23.05.2024 20:08:00</td>
                    <td>105000</td>
                    <td><genBoxStyle>Готов</genBoxStyle></td>
                    <td>9999999 руб.</td>
                   </tr>
                   <tr className='Orders-items'>
                    <td>23.05.2024 20:08:00</td>
                    <td>105000</td>
                    <td><genBoxStyle>Готов</genBoxStyle></td>
                    <td>9999999 руб.</td>
                   </tr>
                   <tr className='Orders-items'>
                    <td>23.05.2024 20:08:00</td>
                    <td>105000</td>
                    <td><genBoxStyle>Готов</genBoxStyle></td>
                    <td>9999999 руб.</td>
                   </tr>
                </table>
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}
