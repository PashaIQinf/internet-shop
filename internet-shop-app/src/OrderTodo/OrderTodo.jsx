import React from 'react'
import './OrderTodo.css'
export default function OrderTodo(props) {
  return (
    <tbody>
    <tr className='Orders-items'>
                    <td>{props.date}</td>
                    <td>{props.id}</td>
                    <td>{props.process}</td>
                    <td>{props.cost} руб.</td>
    </tr>
    </tbody>
  )
}
