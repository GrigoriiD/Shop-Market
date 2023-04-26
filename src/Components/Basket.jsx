import React from 'react';
import BasketCard from './BasketCard.jsx';
export default function Basket({ order, handleBasket, deleteList, incrementBasket, decrementBasket }) {
  const totalPrice = order.reduce((previousValue = 0, currentValue = 0) => {
    return previousValue + currentValue.price * currentValue.quantity;
  }, 0);
  return (
    <div className="basket container">
      <div className="basket-wrapper">
        <h3 className="basket__title">Basket</h3>
        <i
          className="medium material-icons basket__close"
          onClick={() => handleBasket()}
        >
          highlight_off
        </i>
      </div>
      
      {order.length === 0 ? <h3 className='basket__empty'>Cart is empty</h3>:
      <div className="basket__wrap-card">
        {order.map((el) => {
          return (
            <BasketCard
              key={el.id}
              {...el}
              deleteList={deleteList}
              incrementBasket={incrementBasket}
              decrementBasket={decrementBasket}
            />
          );
        })}
      </div>
}
      <div className="basket__bottom-wrap">
      <span className="basket__total-price">
        Total Price Cart : {totalPrice} $
      </span>
      <a class="waves-effect waves-light btn"><i class="material-icons left">local_grocery_store</i>Checkout</a>
      </div>
    </div>
  );
}
