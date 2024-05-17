import React from 'react'
import './PageTab.css'
export default function PageTab() {
  return (
   <div className='pagetab'>
     <div className='tab' >
      <div className='tab-button' >Шоколад</div>
      <div className='tab-button'>Конфеты</div>
      <div className='tab-button'>Конфеты Ручной лепки</div>
      <div className='tab-button-end'>Другие сладости</div>
     </div>
   </div>
  )
}
