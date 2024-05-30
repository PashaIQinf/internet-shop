import React from 'react'
import './AccountPage.css'
import { Button } from 'antd'
import Input from 'antd/es/input/Input'
import {selectEmail} from '../slices/userSlice'
import {selectPassword} from '../slices/userPass'
import { useSelector,useDispatch} from 'react-redux'
import {selectOrder , setOrder} from '../slices/OrderSlice.js'
import OrderTodo from '../OrderTodo/OrderTodo.jsx'
import {removeUser} from '../slices/userSlice'
import { useNavigate } from 'react-router-dom'
import {selectUid} from '../slices/userSlice';
import { getDocs, collection } from "firebase/firestore"; 
import {firestore} from '../firebase'
export default function AccountPage() {
  const emailUser = useSelector(selectEmail);
  const passwordUser = useSelector(selectPassword);
  const Orders = useSelector(selectOrder);
  const uid = useSelector(selectUid);
  const dispath = useDispatch();
  const navigate = useNavigate();
  return (
    <section className='wrapper-account'>
    <div className='AccountPage'>
        <div  className='AccountTab'>
            <nav  className='TabInset'>
                <a href="#Personal-account"   className='Inset' tabIndex={10}><span>Личный Кабинет</span></a>
                <a href="#My-orders" onClick={async() => {dispath(setOrder({orders: await getOrder(uid)}))}}   className='Inset' tabIndex={10}><span>Мои Заказы</span></a>
                <Button  onClick={()=>(dispath(removeUser()), navigate("/"))}>Выход</Button>
            </nav>
            <div className='TabPage'>
                <div id="Personal-account" className='Page' >
                    <div className="UserData-logo">Данные пользователя</div>
                    <div className='UserData'>
                      <div>Логин</div>
                      <Input value = {emailUser}/>
                    </div>
                    <div className='UserData'>
                      <div>Пароль</div>
                      <Input value={passwordUser}/>
                    </div>
                </div>
                <div id="My-orders" className='Page'>
                <table className='OrdersTable'>
                  <tbody>
                   <tr className='Orders-props'>
                    <td>Дата и время</td>
                    <td>Номер заказа</td>
                    <td>Статус</td>
                    <td>Сумма</td>
                   </tr>
                   </tbody>
                   
                   {(Orders != null) ? (Orders.map( (item , i,) =><OrderTodo key={i}  date={item.date} cost={item.cost} process={item.process} id={item.id}/> )) : (null)}
                </table>
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}
async function getOrder(uid) { 
  const snapshot = await getDocs(collection(firestore,"UserBasket",uid,"Order"));
  return  snapshot.docs.map(doc => doc.data());
}
