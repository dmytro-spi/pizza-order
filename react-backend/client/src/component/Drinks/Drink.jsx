import React from "react";
import { NavLink } from "react-router-dom";

import style from "../Product.module.sass";


const Drink = (props) => {

  return (
    <div className={style.oneProduct}>
      {props.drinks.map((d) => {
        return (
          <div className={style.product}>
            <div>
              <img src={d.img} />
            </div>
            <div>
              <div>
                <h3>{d.drinkName}</h3>
                
                <h5>Цена {d.price} ₴</h5>
                <NavLink to={"#"} activeClassName={style.submit} className={style.but}>Заказать</NavLink>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};


export default Drink;
