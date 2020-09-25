import React from "react";
import { NavLink } from "react-bootstrap";
import s from "./Header.module.sass";
import logo from "../../assets/logo/logo.png";

const Header = (props) => {
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
      <div> Корзина </div>
      <div>
        <NavLink to={""}>вход</NavLink>

        <NavLink to={""}>Регистрация</NavLink>
      </div>
      <div className={s.NavMenu}>
        <button ><NavLink to={""}>Пицца</NavLink></button>
        <button><NavLink to={""}>Напитки</NavLink></button>
        <button><NavLink to={""}>О нас</NavLink></button>
        
      </div>
    </div>
  );
};

export default Header;
