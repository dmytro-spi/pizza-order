import React from "react";
import { NavLink } from "react-router-dom";
import s from "../Product.module.sass";

const Pizza = (props) => {
  return (
    <div className={s.oneProduct}>
      {props.pizza.map((p) => {
        return (
          <div className={s.product}>
            <div>
              <NavLink to={`/pizza/${p.id}`}>
                <img src={p.img} />
              </NavLink>
            </div>
            <div className={s.productItem}>
              <NavLink to={`/pizza/${p.id}`} className={s.name}>
                <h3>{p.pizzaName}</h3>
              </NavLink>
              <ul>
                {p.composition.map((c) => {
                  return (
                    <div>
                      <li>{c}</li>
                    </div>
                  );
                })}
              </ul>
              <h3>Цена {p.price} ₴</h3>
              <NavLink to={"#"} activeClassName={s.submit} className={s.but}>
                Заказать
              </NavLink>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Pizza;
