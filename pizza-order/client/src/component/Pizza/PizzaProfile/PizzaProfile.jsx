import React from "react";
import { NavLink } from "react-router-dom";
import s from "../../ProductProfile.module.sass";

const PizzaProfile = (props) => {

  const size25 = props.pizzaProfile.variableProduct.find(item => item.size == 25);
  const size30 = props.pizzaProfile.variableProduct.find(item => item.size == 30);
  const size35 = props.pizzaProfile.variableProduct.find(item => item.size == 35);
  debugger
  return (
    <div className={s.product}>
      <div>
        <img src={props.pizzaProfile.img} />
      </div>
      <div>
        <div>
          <h1>{props.pizzaProfile.name}</h1>
        </div>

        <ul>
          
          {props.pizzaProfile.composition.map((element) => {
            return <li>{element}</li>;
          }) }
        </ul>
        <h3>Цена {size25 ? size25.price : null} ₴</h3>
                <NavLink to={"#"} activeClassName={s.submit} className={s.but}>
                  Заказать
                </NavLink>
      </div>
    </div>
  );
};

export default PizzaProfile;
