import React from "react";

import s from "./Header.module.sass";
import logo from "../../assets/logo/logo.png";
import cart from "../../assets/cart/cart.png";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  const logout = () => {
    props.loadLogout(props.login);
  };
  return (
    <div className={s.AppHeader}>
      <div>
        <img className={s.AppLogo} src={logo} />
      </div>
      <div className={s.phone}>
        <div>099 166 61 21</div>
        <div>067 166 61 21</div>
        <div>063 166 61 21</div>
      </div>
      <div>
        <img className={s.AppCart} src={cart} />{" "}
        {props.cart.length === 0 ? (
          "Корзина пуста"
        ) : (
          <NavLink to={"/cart"}>{`В корзине: ${props.cart.length}`}</NavLink>
        )}{" "}
      </div>
      {props.login ? (
        <div>
          {`Привет ${props.login} `}
          <button onClick={logout}>выход</button>
        </div>
      ) : (
        <div>
          <NavLink to={"/login"}>Вход </NavLink>

          <NavLink to={"/registration"}>Регистрация</NavLink>
        </div>
      )}
      <div className={s.NavMenu}>
        <NavLink to={"/pizza"} activeClassName={s.activeLink}>
          <button type="button">Пицца</button>
        </NavLink>
        <NavLink to={"/drinks"} activeClassName={s.activeLink}>
          <button type="button">Напитки</button>
        </NavLink>
        <NavLink to={"/aboutUs"} activeClassName={s.activeLink}>
          <button type="button">О нас</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
