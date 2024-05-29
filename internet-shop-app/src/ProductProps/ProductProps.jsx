import React from 'react'
import './ProductProps.css'
import Input from 'antd/es/input/Input'
import { Button } from 'antd'
export default function ProductProps(props) {
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
                  <tbody>
                   <tr className='Characteristics-props'>
                    <td>Производитель</td>
                    <td>{props.manufacturer}</td>
                   </tr>
                   </tbody>
                   <tbody>
                   <tr className='Characteristics-props'>
                    <td>Страна производства</td>
                    <td>{props.country}</td>
                   </tr>
                   </tbody>
                   <tbody>
                   <tr className='Characteristics-props'>
                     <td>Срок хранения</td>
                     <td>{props.expiration} мес.</td>
                   </tr>
                   </tbody>
                   <tbody>
                   <tr className='Characteristics-props'>
                     <td>Артикул</td>
                     <td>{props.item}</td>
                   </tr>
                   </tbody>
                   <tbody>
                   <tr className='Characteristics-props'>
                     <td>Упаковка</td>
                     <td>{props.package}</td>
                   </tr>
                   </tbody>
                   <tbody>
                   <tr className='Characteristics-props'>
                     <td>Вкус</td>
                     <td>{props.taste}</td>
                   </tr>
                   </tbody>
                   <tbody>
                   <tr className='Characteristics-props-end'>
                     <td>Состав продукта</td>
                     <td>{props.composition}</td>
                   </tr>
                   </tbody>
                </table>
                </div>
            </div>
        </div>

        <div className='PropsText'>
            
        </div>
    </div>
  )
}
