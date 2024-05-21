import React from 'react'
import './ProductName.css'
import Gleis from '../assets/Gleis.jfif'
export default function ProductName() {
  return (
    <div className='ProductName'>
       <img src={Gleis}/>
       <div className='ProductProp'>
        <h1>Конфета «Глэйс» с шоколадным вкусом.</h1>
        <h2>1 баллов</h2>
        <div className='ProductText'>Конфета глазированная с шоколадным вкусом Конфета с помадной начинкой из натурального какао и сгущенного молока, произведенного по ГОСТУ. Ароматизаторы отсутствуют.</div>
        <h2>Энергетическая ценность на 100 г</h2>
        <div className='Product-calories'>
                <div>
                    <div>Белки</div>
                    <div>2 г</div>
                </div>
                <div>
                    <div>Жиры</div>
                    <div>12 г</div>
                </div>
                <div>
                    <div>Углеводы</div>
                    <div>73 г</div>
                </div>
                <div>
                    <div>Калории</div>
                    <div>410 ккал</div>
                </div>
       </div>
      </div>
    </div>
  )
}
