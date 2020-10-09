
import React from "react";
import { Field, reduxForm } from "redux-form";
import style from "./Login.module.sass";

const Login = (props) => {

    const onSubmit = (formData) => {
      console.log(formData)
    }
    
      return (
        <div>
          <h1>Вход</h1>
          <LoginReduxForm onSubmit={onSubmit}/>
        </div>
      );
    };
    
    const LoginForm = (props) => {
     
      return (
        <form onSubmit={props.handleSubmit}>
          <div>
            <Field placeholder={"email"} name={"login"} component={"input"} />
          </div>
          <div>
            <Field placeholder={"пароль"} name={"password"} component={"input"} />
          </div>
          <div>
            <Field type={"checkbox"} name={"rememberMe"} component={"input"} /> запомнить меня
          </div>
          <div>
            <button className={style.button}>Login</button>
          </div>
        </form>
      );
    };
    
    const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);
    export default Login;