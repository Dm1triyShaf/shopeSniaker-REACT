import React, {useState}  from 'react';
import { FiShoppingCart } from "react-icons/fi";
import Orders from './Orders';


export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false)

  return (
    <header>
        <div>
            <span className='logo'>House Staff</span>
              <ul className='nav'>
                <li>Про нас</li>  
                <li>Контакты</li>  
                <li>Кабинет</li>  
              </ul>
              <FiShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className = {`shop-cart-button ${cartOpen && 'active'}`} />

              {cartOpen && (
                  <div className='shop-cart'>
                    {props.orders.map(el => (
                      <Orders key={el.id} item= {el} />
                    ))}
                  </div>
              )}
        </div>
      <div className='presentation'></div>
    </header>
  )
}
