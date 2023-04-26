import React from 'react';

export default function BasketCard({
  title,
  quantity,
  price,
  image,
  deleteList,
  id,
  incrementBasket,
  decrementBasket,
}) {
  return (
    <div className="basket-card">
      <img
        className="basket-card__img"
        src={image}
      />
      <div className="basket-card__wrap-price">
        <span className="basket-card__title">{title}</span>
        <span className="basket-card__price">Price {price}$</span>
      </div>
      <div className="basket-card__wrap-input">
        <input
          type="text"
          name="quantity"
          value={quantity}
          className="basket-card__quantity"
        />
        <div className="basket-card__wrap-crement">
          <button
            className="basket-card__increment"
            onClick={() => incrementBasket(id)}
          >
            +
          </button>
          <button className="basket-card__decrement"
          onClick={() => decrementBasket(id)}>-</button>
        </div>
      </div>
      <i
        className="medium material-icons basket-card__clear"
        onClick={() => deleteList(id)}
      >
        clear
      </i>
    </div>
  );
}
