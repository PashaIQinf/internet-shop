import React from 'react';
import './ProductCost.css';
import { Button,ConfigProvider } from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {setBasket } from '../slices/BasketSlice'
import { collection,addDoc,getDocs} from "firebase/firestore";
import {selectUid} from '../slices/userSlice';
import {firestore} from "../firebase";
export default function ProductCost(props) {
  const dispatch = useDispatch();
  const uid = useSelector(selectUid);
  return (
    <div className='ProductCost'>
        <h2>{props.cost} руб. за {props.Kg}</h2>
        <ConfigProvider wave={{ disabled: true }}>
        <Button onClick={async() =>( (addDoc(collection(firestore,"UserBasket",uid,"Basket"), {image: props.image, name:props.name, cost: props.cost, Kg:props.Kg, index:props.index,}),   dispatch(setBasket({basket:await getBasket(uid) }))) )}>Добавить в корзину</Button>
        </ConfigProvider>
        <div>{props.view} Просмотрено</div>
        <div>{props.buy} Куплено</div>
        </div>
  )
}
async function getBasket(uid) { 
  const snapshot = await getDocs(collection(firestore,"UserBasket",uid,"Basket"));
  return  snapshot.docs.map(doc => doc.data());
}
