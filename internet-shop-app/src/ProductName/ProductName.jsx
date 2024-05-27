import React from 'react'
import './ProductName.css'
export default function ProductName(props) {
  return (
    <div className='ProductName'>
       <img src={props.image}/>
       <div className='ProductProp'>
        <h1>{props.name}</h1>
        <h2>{props.rating} баллов</h2>
        <div className='ProductText'>{props.description}</div>
        <h2>Энергетическая ценность на 100 г</h2>
        <div className='Product-calories'>
                <div>
                    <div>Белки</div>
                    <div>{props.proteins} г</div>
                </div>
                <div>
                    <div>Жиры</div>
                    <div>{props.fats} г</div>
                </div>
                <div>
                    <div>Углеводы</div>
                    <div>{props.carbohydrates} г</div>
                </div>
                <div>
                    <div>Калории</div>
                    <div>{props.calories} ккал</div>
                </div>
       </div>
      </div>
    </div>
  )
}
