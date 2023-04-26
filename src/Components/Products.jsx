import React from 'react';
import Product from './Product.jsx';

export default function Products({ goods = [], order, setOrder ,incQuantity}) {
  if (!goods.length) {
    return <h2>Not Found</h2>;
  }
  return (
    <div className="products">
      {goods.map((el) => {
        return (
          <Product
            key={el.id}
            {...el}
            order={order}
            setOrder={setOrder}
            incQuantity={incQuantity}
          />
        );
      })}
    </div>
  );
}
