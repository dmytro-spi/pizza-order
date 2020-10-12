import React from "react";
import { NavLink } from "react-router-dom";
import s from "../../ProductProfile.module.sass";

const PizzaProfile = (props) => {
  
  
  return (
    <div className={s.product}>
      <div>
        <img src={props.pizzaProfile.img} />
      </div>
      <div>
        <div>
          <h1>{props.pizzaProfile.pizzaName}</h1>
        </div>

        <ul>
          
          {props.pizzaProfile.composition ? props.pizzaProfile.composition.map((element) => {
            return <li>{element}</li>;
          }) : null}
        </ul>
        <h3>Цена {props.pizzaProfile.price} ₴</h3>
                <NavLink to={"#"} activeClassName={s.submit} className={s.but}>
                  Заказать
                </NavLink>
      </div>
    </div>
  );
};

export default PizzaProfile;
