import React from "react";
import { Field, reduxForm } from "redux-form";

import style from "./Login.module.sass";

let formD = null;
const Registration = (props) => {
  
  const onSubmit = (formData) => {
    formD = formData;
    props.loadAuth(formData);
    
  };

  // if (props.isRegistrate) {
  //   debugger
  //   props.loadLogin(formD);
  // }

  return (
    <div>
      <h1>Регистрация</h1>
      <LoginReduxForm onSubmit={onSubmit} message={props.message}/>
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
      {props.message && 
        <h5>{props.message}</h5>
        
      }

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
