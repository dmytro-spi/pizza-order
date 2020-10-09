import React from "react";
import { Field, reduxForm } from "redux-form";

import style from "./Login.module.sass";

const Registration = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
    props.loadAuth(formData);
  };

  return (
    <div>
      <h1>Регистрация</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const RegistrationForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"email"} name={"email"} component={"input"} />
      </div>
      <div>
        <Field
          placeholder={"Введите пароль"}
          name={"password"}
          component={"input"}
        />
      </div>

      <div>
        <Field type={"checkbox"} name={"rememberMe"} component={"input"} />{" "}
        запомнить меня
      </div>
      <div>
        <button className={style.button}>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(RegistrationForm);
export default Registration;
