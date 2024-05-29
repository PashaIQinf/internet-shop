import React from 'react'
import './Baket.css'
import { Button } from 'antd'
import {useSelector, useDispatch} from 'react-redux'
import {selectBasket,setBasket} from '../slices/BasketSlice'
import BaketTodo from '../BaketTodo/BaketTodo'
import { collection,getDocs,deleteDoc,doc,query} from "firebase/firestore";
import {firestore} from "../firebase";
import {selectUid} from '../slices/userSlice';
import { useNavigate  } from 'react-router-dom'
export default function Baket() {
  const Itemlist = useSelector(selectBasket);
  const dispath = useDispatch();
  let navigate = useNavigate();
  const uid = useSelector(selectUid);
  const docRef = query(collection(firestore,"UserBasket",uid,"Basket"));
  return (
    <div className='Baket'>
        <div className='Baket-tab'>
            <Button onClick={async() =>{
               const toDelete = await getDocs(docRef);
               toDelete.forEach((item) => {
               const ID = item.id;
               deleteDoc(doc(firestore, "UserBasket",uid,"Basket", ID));
               
            });
              const getAll = await getDocs(collection(firestore,"UserBasket",uid,"Basket"));
              const snapshot = getAll.docs.map(doc => doc.data());
              dispath(setBasket({basket:snapshot}));
            }}>Очистить корзину</Button>
        </div>

        {Itemlist.map( (item , i,) =>(item.image != null) ? (<BaketTodo key={i} image={item.image } cost={item.cost }  name={item.name } count = {item.count } Kg = {item.Kg }  index={i}/>) : (console.log()) )}
        
        
    </div>
    
  ) };