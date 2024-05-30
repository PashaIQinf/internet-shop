import React from 'react'
import './OrderList.css'
export default function OrderList(props) {
  return (
    <div className="OrderList-items">
            <div className="OrderList-items-col">{props.name}</div>
            <div className="OrderList-items-col">{props.Kg} килограмм.</div>
            <div className="OrderList-items-end">{props.cost} руб.</div>
    </div>
  )
}
