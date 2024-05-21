import React from 'react'
import './ProductProps.css'
import Input from 'antd/es/input/Input'
import { Button } from 'antd'
export default function ProductProps() {
  return (
    <div className='ProductProps'>
        <div className='PropsTab'>
            <nav className='TabItems'>
                <a href="#Comment"   className='Items'><span>Комментарии</span></a>
                <a href="#Characteristics"    className='Items'><span>Характеристики</span></a>
            </nav>
            <div className='TabBody'>
                <div id="Comment" className='TabBlock'>
                    <div className='Comment-rating'>
                        <div className='Rating'><Button >-</Button></div>
                         <div className='Rating' > 10 баллов </div>
                         <div className='Rating'><Button>+</Button></div>
                    </div>
                    <div className='Input-Comment'><Input type="text" title='Введите текст'/> <Button>Отправить</Button></div>
                    <div className='CommentBlock'>
                       <div className='Comment-profile'>
                        <div className='Comment-profile-user'>
                        opa200510fddfdfdfdfdfdfdf@yandex.ru <br/>
                        10 баллов
                        </div>
                        <div className='Comment-data'>10.02.2024</div>
                       </div>
                       <div className='Comment-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sunt quis quidem cupiditate perspiciatis ipsam rerum. Beatae ex ipsum labore alias, excepturi inventore expedita architecto id aperiam, quibusdam sequi cumque.</div>
                    </div>
                    <div className='CommentBlock'>
                       <div className='Comment-profile'>
                        <div className='Comment-profile-user'>
                        opa200510fddfdfdfdfdfdfdf@yandex.ru <br/>
                        10 баллов
                        </div>
                        <div className='Comment-data'>10.02.2024</div>
                       </div>
                       <div className='Comment-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sunt quis quidem cupiditate perspiciatis ipsam rerum. Beatae ex ipsum labore alias, excepturi inventore expedita architecto id aperiam, quibusdam sequi cumque.</div>
                    </div>
                    <div className='CommentBlock'>
                       <div className='Comment-profile'>
                        <div className='Comment-profile-user'>
                        opa200510fddfdfdfdfdfdfdf@yandex.ru <br/>
                        10 баллов
                        </div>
                        <div className='Comment-data'>10.02.2024</div>
                       </div>
                       <div className='Comment-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sunt quis quidem cupiditate perspiciatis ipsam rerum. Beatae ex ipsum labore alias, excepturi inventore expedita architecto id aperiam, quibusdam sequi cumque.</div>
                    </div>
                    <div className='CommentBlock'>
                       <div className='Comment-profile'>
                        <div className='Comment-profile-user'>
                        opa200510fddfdfdfdfdfdfdf@yandex.ru <br/>
                        10 баллов
                        </div>
                        <div className='Comment-data'>10.02.2024</div>
                       </div>
                       <div className='Comment-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sunt quis quidem cupiditate perspiciatis ipsam rerum. Beatae ex ipsum labore alias, excepturi inventore expedita architecto id aperiam, quibusdam sequi cumque.</div>
                    </div>
                    <div className='CommentBlock'>
                       <div className='Comment-profile'>
                        <div className='Comment-profile-user'>
                        opa200510fddfdfdfdfdfdfdf@yandex.ru <br/>
                        10 баллов
                        </div>
                        <div className='Comment-data'>10.02.2024</div>
                       </div>
                       <div className='Comment-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sunt quis quidem cupiditate perspiciatis ipsam rerum. Beatae ex ipsum labore alias, excepturi inventore expedita architecto id aperiam, quibusdam sequi cumque.</div>
                    </div>
                </div>
                <div id= "Characteristics" className='TabBlock'>
                 <table className='CharaTable'>
                   <tr className='Characteristics-props'>
                    <td>Производитель</td>
                    <td>ООО "КДВ Воронеж"</td>
                   </tr>
                   <tr className='Characteristics-props'>
                    <td>Страна производства</td>
                    <td>Россия</td>
                   </tr>
                   <tr className='Characteristics-props'>
                     <td>Срок хранения</td>
                     <td>6 мес.</td>
                   </tr>
                   <tr className='Characteristics-props'>
                     <td>Вес</td>
                     <td>180 г</td>
                   </tr>
                   <tr className='Characteristics-props'>
                     <td>Артикул</td>
                     <td>ВК268</td>
                   </tr>
                   <tr className='Characteristics-props'>
                     <td>Упаковка</td>
                     <td>фасованный</td>
                   </tr>
                   <tr className='Characteristics-props'>
                     <td>Вкус</td>
                     <td>шоколад</td>
                   </tr>
                   <tr className='Characteristics-props-end'>
                     <td>Состав продукта</td>
                     <td>сахар, молоко цельное сгущенное с сахаром (молоко цельное, молоко обезжиренное, сахар (сахароза), лактоза); патока, заменитель масла какао (масло растительное, эмульгаторы: Е492, лецитин соевый); какао-порошок, заменитель молочного жира (масла растительные, антиокислитель: Е306); сыворотка молочная сухая, соль, эмульгатор: лецитин соевый; ароматизатор. Возможно наличие следов глютена, диоксида серы.</td>
                   </tr>
                </table>
                </div>
            </div>
        </div>

        <div className='PropsText'>
            
        </div>
    </div>
  )
}
