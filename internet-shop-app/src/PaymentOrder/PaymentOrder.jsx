import React, { useId } from 'react'
import './PaymentOrder.css'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useSelector , useDispatch} from 'react-redux';
import OrderList from '../OrderList/OrderList.jsx'
import { doc, setDoc,getDocs, collection, query, deleteDoc } from "firebase/firestore"; 
import {firestore} from '../firebase'
import {selectUid} from '../slices/userSlice';
import {selectBasket, setBasket} from '../slices/BasketSlice';
import { v4 as uuid} from 'uuid'
import {setOrder} from '../slices/OrderSlice'
import { useState } from 'react';
export default function PaymentOrder(props) {
    const navigate = useNavigate();
    const Basket = useSelector(selectBasket);
    const uid = useSelector(selectUid);
    const id = uuid();
    const dispatch = useDispatch();
    const [errorinput,setErrorinput] = useState("");
    const docRef = query(collection(firestore,"UserBasket",uid,"Basket"));
    const date = String(new Date());
  return (
    <div className='PaymentOrder'>
        <div className='OrderConfirm-logo'>Подтверждение заказа</div>
        <div className="OrderConfirm-cost">Итог: {Basket.reduce((i , {cost}) => i+cost,0)} руб.<br/>{Basket.reduce((i , {Kg}) => i+Kg,0)} килограмм.</div>
        <div className='OrderConfirm'>
            <Button onClick={async() => {((props.adress != ""  && props.validity  != "" && props.CVV  != "" && props.number != ""  && props.name != ""  && props.surname != ""  && props.patronymic != ""  && props.phone != "" ) ?(await setDoc(doc(firestore,"UserBasket",uid,"Order",id), { id:id, order: Basket, date: date, process: "Оплачен", cost: Basket.reduce((i , {cost}) => i+cost,0), adress: props.adress , validity: props.validity, CVV: props.CVV, number: props.number, name: props.name, surname: props.surname, patronymic: props.patronymic,  phone: props.phone }), dispatch(setOrder({orders:await getOrder(uid) })), navigate("/"), window.ym(97435221,'reachGoal','order-click')) : (setErrorinput("Вы ввели не все данные!!"))); const toDelete = await getDocs(docRef);
               toDelete.forEach((item) => {
               const ID = item.id;
               deleteDoc(doc(firestore, "UserBasket",uid,"Basket", ID));
               
            });
              const getAll = await getDocs(collection(firestore,"UserBasket",uid,"Basket"));
              const snapshot = getAll.docs.map(doc => doc.data());
              dispatch(setBasket({basket:snapshot}));}}>Оплатить заказ</Button>
            <div>{errorinput}</div>
        </div>
        <div className="OrderList">
            <div>Состав заказа</div>
            <a onClick={() => navigate("/basket")}>Вернуться</a>
            
        </div>
        {Basket.map( (item , i,) =>((item.image != null) ? (<OrderList key={i} cost={item.cost }  name={item.name }  Kg = {item.Kg }  />) :(console.log())))}
    </div>
  )
}
async function getOrder(uid) { 
    const snapshot = await getDocs(collection(firestore,"UserBasket",uid,"Order"));
    return  snapshot.docs.map(doc => doc.data());
  }