import React from "react";

export default function Cart ({quantity = 0, className = "cart", handleBasket}) {
    return(
        <div className={className} onClick={() => handleBasket()}>
             <i className="material-icons">add_shopping_cart</i>
            {quantity ? <span className="cart__quantity_green">{quantity}</span> : <span className="cart__quantity_red">{quantity}</span>}
        </div>
    )
}