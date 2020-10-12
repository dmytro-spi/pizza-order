
import React from "react";
import { Field, reduxForm } from "redux-form";
import style from "./Login.module.sass";

const Login = (props) => {

    const onSubmit = (formData) => {
     
      props.loadLogin(formData);
      
    }
    
      return (
        <div>
          <h1>Вход</h1>
          <LoginReduxForm onSubmit={onSubmit}
          message={props.message}/>
        </div>
      );
    };
    
    const LoginForm = (props) => {
     
      return (
        <form onSubmit={props.handleSubmit}>
          <div>
            <Field placeholder={"email"} name={"email"} component={"input"} />
          </div>
          <div>
            <Field placeholder={"пароль"} name={"password"} component={"input"} />
          </div>
          <div>
            {props.message && <h5>{props.message}</h5>}
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