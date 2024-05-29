import React from 'react'
import './BaketTodo.css'
export default function BaketTodo(props) {

  return (
    <div className='Baket-product'>
            <img src ={props.image}/>
            <div className='Baket-name'>
                <div>{props.name}</div>
                <div>{props.cost} руб. за {props.Kg} килограмм</div>
            </div>
        </div>
  )
}
