import React from "react";
import { NavLink } from "react-router-dom";

import style from "../Product.module.sass";


const Drink = (props) => {
debugger
  return (
    <div className={style.oneProduct}>
      {props.drinks.map((d) => {
        return (
          <div className={style.product}>
            <div>
              <NavLink to={`/drinks/${d._id}`}><img src={d.img} /></NavLink>
              
            </div>
            <div>
              <div className={style.productItem}>
                <NavLink to={`/drinks/${d._id}`} className={style.name}><h3>{d.name}</h3></NavLink>
                <h5> {d.volume} л </h5>
                <h5>Цена {d.price} ₴</h5>
                <NavLink to={"#"} activeClassName={style.submit} className={style.but}>В корзину</NavLink>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};


export default Drink;
