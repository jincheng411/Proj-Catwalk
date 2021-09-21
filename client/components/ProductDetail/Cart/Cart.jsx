import React, { useState } from 'react';
import './Cart.css'

function Cart({ items, visible }) {
  const [amount, setAmount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const originalTotal = items.reduce((a, b) => {
    return a + Number(b.style.original_price) * Number(b.quantity);
  }, 0);
  const saleTotal = items.reduce((a, b) => {
    return a + Number(b.style.sale_price || b.style.original_price) * Number(b.quantity);
  }, 0);
  return (
    <div
      className={visible || isVisible ? "cart shown" : "cart"}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <div>
        Subtotal: <span>${saleTotal}</span>
      </div>
      <div>
        Proceed to checkout
      </div>
      <div></div>
      <div className="cart-product-list">
        {items.map(item => {
          return <div key={item.style.style_id + item.size}>
            <img src={item.style.photos[0].thumbnail_url} />
            <p>{item.size} {item.style.name} $ {item.style.sale_price || item.style.original_price} * {item.quantity}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default Cart;