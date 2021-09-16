import React, {useState} from 'react';

function Cart({items}) {
  const [amount, setAmount] = useState(0);
  const originalTotal = items.reduce((a, b) => {
    return a + Number(b.style.original_price) * Number(b.quantity);
  }, 0);
  const saleTotal = items.reduce((a, b) => {
    return a + Number(b.style.sale_price || b.style.original_price) * Number(b.quantity);
  }, 0);
  return (
    <div className="cart">
      Shopping cart
      {items.map(item => {
        return <p key={item.style.style_id+item.size}>{item.productName} Size: {item.size} Style: {item.style.name} price: {item.style.sale_price || item.style.original_price} * {item.quantity}</p>
      })}
    </div>
  )
}

export default Cart;