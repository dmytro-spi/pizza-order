import React from "react";

import s from "./Pizza.module.sass";

const Pizza = (props) => {
  debugger;
  return (
    <div className={s.pizzaProduct}>
      {props.pizza.map((p) => {
        return (
          <div>
            <span>
              <img src={p.img} />
            </span>
            <span>
              <span>
                <h3>{p.pizzaName}</h3>
              </span>
              <span>
                <h5>Цена {p.price}</h5>
              </span>
              
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Pizza;
