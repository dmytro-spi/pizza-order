import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Cart.module.sass";

const Cart = (props) => {
  return (
    <div className={s.oneOrder}>
      <div></div>

      <div>
        <h1>Оформление заказа</h1>
      {props.cart.map((order) => {
        return (<div className={s.order}>
          <img src={order.img}/>
          <div className={s.name}>
            <div >{order.name } </div>
           <div>{order.volume }</div>    
          
          </div>
          <div className={s.name}>{ ` ${order.price} грн`}</div>
        </div>
        )
      })}
      <NavLink to={"#"} activeClassName={s.submit} className={s.but}>
      Оформить заказ
      </NavLink>
      </div>
      
      <div></div>
    </div>
  );
};

export default Cart;
