import React from "react";
import { NavLink } from "react-router-dom";
import s from "../../ProductProfile.module.sass";

const DrinkProfile = (props) => {
  // if (props.drinkProfile.name) {
  return (
    <div className={s.product}>
      <div>
        <img src={props.drinkProfile.img} />
      </div>
      <div>
        <div>
          <h1>{props.drinkProfile.name}</h1>
        </div>
        <h4>{props.drinkProfile.volume} л</h4>
        <h3>Цена {props.drinkProfile.price} ₴</h3>
        <NavLink to={"#"} activeClassName={s.submit} className={s.but}>
          Заказать
        </NavLink>
      </div>
    </div>
  );
  // }
  // return <div></div>
};

export default DrinkProfile;
