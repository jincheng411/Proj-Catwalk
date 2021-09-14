import React, {useState} from 'react';

function Cart({items}) {
  const [amount, setAmount] = useState(0);
  const originalTotal = items.reduce((a, b) => {
    return a + Number(b.style.original_price) * Number(b.quantity);
  }, 0)
  const saleTotal = items.reduce((a, b) => {
    // let price = b.style.sale_price || b.style.original_price;
    return a + Number(b.style.sale_price || b.style.original_price) * Number(b.quantity);
  }, 0)
  // const saleTotal = items.reduce((a, b) => {
  //   return a.style.sale_price || a.style.default_price + a.style.sale_price || a.style.default_price
  // }, 0)
  return (
    <div className="cart">
      Shopping cart
      {console.log(items)}
      {console.log(originalTotal)}
      {console.log(saleTotal)}

    </div>
  )
}

export default Cart;