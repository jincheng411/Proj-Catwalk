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
      Shopping cart
      {items.map(item => {
        return <p key={item.style.style_id + item.size}>{item.productName} Size: {item.size} Style: {item.style.name} price: {item.style.sale_price || item.style.original_price} * {item.quantity}</p>
      })}
    </div>
  )
}

export default Cart;