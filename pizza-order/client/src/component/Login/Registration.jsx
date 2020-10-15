import React from "react";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import {
  email,
  matchPassword,
  maxLength,
  minLength,
  required,
} from "../../utils/validators";
import { Input } from "../common/FormControls/FormControls";

import style from "./Login.module.sass";

let formD = null;

const Registration = (props) => {
  
  const removeMessage = () => {
    props.setMessage(null);
  };
  
  const onSubmit = (formData) => {
    formD = formData;
    props.loadAuth(formData);
    setTimeout(removeMessage, 4000);
  };

  if (props.isRegistrate) {
    
    props.loadLogin(formD);
  }

  return (
    <div>{props.isRegistrate ? <Redirect to={'/pizza'}/> : <div>
      <h1>Регистрация</h1>
      <LoginReduxForm onSubmit={onSubmit} message={props.message} />
      </div>}
      
    </div>
  );
};

const maxLength50 = maxLength(50);
const minLength8 = minLength(8);
const RegistrationForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={"email"}
          name={"email"}
          component={Input}
          validate={[required, email, maxLength50]}
        />
      </div>
      <div>
        <Field
          placeholder={"Введите пароль"}
          name={"password"}
          component={Input}
          type="password"
          validate={[required, minLength8]}
        />
      </div>
      <div>
        <Field
          placeholder={"Повторите пароль"}
          name={"tryPassword"}
          component={Input}
          type="password"
          validate={matchPassword}
        />
      </div>
      {props.message && <h5>{props.message}</h5>}

      <div>
        <Field type={"checkbox"} name={"rememberMe"} component={"input"} />{" "}
        запомнить меня
      </div>
      <div>
        <button className={style.button}>Зарегистрироваться</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(RegistrationForm);
export default Registration;
