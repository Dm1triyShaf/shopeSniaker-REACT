import React, {useState}  from 'react';
import { FiShoppingCart } from "react-icons/fi";


export default function Header() {
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

                  </div>
              )}
        </div>
      <div className='presentation'></div>
    </header>
  )
}
