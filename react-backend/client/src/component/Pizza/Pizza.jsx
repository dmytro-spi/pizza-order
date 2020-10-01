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
              <img src={p.img} />
            </div>
            <div>
              <div>
                <h3>{p.pizzaName}</h3>
                <ul>
                  {p.composition.map((c) => {
                    return (
                      <div>
                        <li>{c}</li>
                      </div>
                    );
                  })}
                </ul>
                
                <h5>Цена {p.price} ₴</h5>
                <NavLink to={"#"} activeClassName={s.submit}>Заказать</NavLink>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Pizza;
