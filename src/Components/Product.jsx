import React from 'react';

export default function Product({
  id,
  name: title,
  price,
  description,
  full_background,
  order = [],
  setOrder,incQuantity
}) {
  
  return (
    <div className="wrapper__card card">
      <div className="card-image waves-effect waves-block waves-light">
        <img
          className="activator"
          src={full_background}
          width="300px"
          height="250px"
        />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {title}
        </span>
        <p className="card__description">{description}</p>
      </div>
      <div className="card__pay">
        <button
          className="card__btn"
          onClick={() => {
            incQuantity(price,id,title,full_background)
          }}
        >
          Buy
        </button>
        <span className="price"> {price} $</span>
      </div>
    </div>
  );
}
