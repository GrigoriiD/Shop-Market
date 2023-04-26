import React, { useEffect, useState } from 'react';
import Preloader from './Preloader.jsx';
import Products from '../Products.jsx';
import Cart from '../Cart.jsx';
import Basket from '../Basket.jsx';
import Alert from '../Alert.jsx';
const REACT_APP_API_KEY = '89bf62a9-35ae556a-f77cf639-bad4a2e3';
const API_URL = 'https://fortniteapi.io/v1/shop?lang=en';
export default function Main() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [basketShow, setBasketShow] = useState(false);
  const [alertName, setAlertName] = useState('')
  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: REACT_APP_API_KEY,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setGoods(data.featured);
        setLoading(!loading);
      });
  }, []);
  const incQuantity = (price, id, title, full_background) => {
    const itemIndex = order.findIndex((el) => el.id === id);
    const newItem = {
      quantity: 1,
      title: title,
      id: id,
      price: price,
      image: full_background,
    };
    setAlertName(title);
    if (itemIndex < 0) {
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((el, index) => {
        if (index === itemIndex) {
          return { ...el, quantity: el.quantity + 1 };
        } else {
          return el;
        }
      });
      setOrder(newOrder);
    }
  };
  const handleBasket = function () {
    setBasketShow(!basketShow);
  };
  const deleteBasketlist = (id) => {
    setOrder(order.filter((el)=> {
      return el.id !== id
    }))
  };
  const incrementBasket = (id) => {
    const newOrder = order.map((el) =>{
      if (el.id === id) {
        return {...el, quantity:el.quantity + 1}
      }else{
        return el
      }
    })
    setOrder(newOrder)
  }
  const decrementBasket = (id) => {
    const newOrder = order.map((el) =>{
      if (el.id === id && el.quantity !== 1) {
        return {...el, quantity:el.quantity - 1}
      }else{
        return el
      }
    })
    setOrder(newOrder)
  }
  const clouseAlert = () => {
    setAlertName('')
  }
  return (
    <main className="app ">
      <div className="container main__content">
        <Cart
          quantity={order.length}
          className={'cart_header'}
          handleBasket={handleBasket}
        />
        {basketShow ? (
          <Basket
            order={order}
            handleBasket={handleBasket}
            deleteList={deleteBasketlist}
            incrementBasket={incrementBasket}
            decrementBasket={decrementBasket}
          />
        ) : null}
        {loading ? (
          <Preloader />
        ) : (
          <>
            <Products
              goods={goods}
              order={order}
              setOrder={setOrder}
              incQuantity={incQuantity}
            />
            <Cart
              quantity={order.length}
              className={'cart'}
              handleBasket={handleBasket}
            />
          </>
        )}
      </div>
        {alertName ? <Alert name={alertName} clouseAlert={clouseAlert}/> : null}
    </main>
  );
}
