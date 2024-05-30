import React from 'react'
import './ProductTodo.css'
import { Button , ConfigProvider} from 'antd'
import Shoppingcart from '../assets/shoppingcart.png'
import { useNavigate } from 'react-router-dom'
import {setBasket ,selectBasket} from '../slices/BasketSlice'
import { collection,addDoc,getDocs, deleteDoc} from "firebase/firestore";
import {useDispatch, useSelector} from 'react-redux'
import {selectUid} from '../slices/userSlice';
import {firestore} from "../firebase";

export default function ProductTodo(props) {
  const dispatch = useDispatch();
  const uid = useSelector(selectUid);
  const navigate = useNavigate();
  return (
        <div className='Product'>
            <img  className ="Product-img"src ={props.image} />
            <div className='Product-rating'>
                <div className='Product-border'>{props.rating} баллов</div>
                <div className='Product-end'>{props.buy} Куплено</div>
            </div>
            <a className='Product-name' onClick={()=> ( navigate('/'+ props.index))} >{props.name}</a>
            <div className='Product-cost'>
                <div>{props.cost} руб. за {props.Kg} Кг</div>
                <ConfigProvider wave={{ disabled: true }}>
                <Button className='Product-buy' onClick={ async() =>( (addDoc(collection(firestore,"UserBasket",uid,"Basket"), {image: props.image, name:props.name, cost: props.cost, Kg:props.Kg, index:props.index,}),   dispatch(setBasket({basket:await getBasket(uid) }))) )}><img src={Shoppingcart}/></Button>
                </ConfigProvider>
            </div>
        </div>
        
  )
}
async function getBasket(uid) { 
    const snapshot = await getDocs(collection(firestore,"UserBasket",uid,"Basket"));
    return  snapshot.docs.map(doc => doc.data());
  }