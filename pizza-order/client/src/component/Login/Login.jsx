import React from "react";
import { Field, reduxForm, reset } from "redux-form";
import { email, maxLength, minLength, required } from "../../utils/validators";
import { Input } from "../common/FormControls/FormControls";
import style from "./Login.module.sass";

const maxLength50 = maxLength(50)

const minValue18 = minLength(8)



class Login extends React.Component{
componentDidMount(){
  setTimeout(this.removeMessage, 4000);
}
  removeMessage = () => {
  this.props.setMessage(null)
  };

    onSubmit = (formData, dispatch) => {
      debugger
      this.props.loadLogin(formData);
      dispatch(reset("login"));
      setTimeout(this.removeMessage, 4000)
    };
    
  render(){

    return (
      <div>{!this.props.isRegistrate ? <div> 
        <h1>Вход</h1> 
        <LoginReduxForm onSubmit={this.onSubmit} message={this.props.message} />
         </div>  : <h1>{this.props.message} <div>Приятных покупок</div></h1> }
        
      </div>
    );
  }
}

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"Email"} name={"email"} component={Input}
        validate={[email, maxLength50, required]} />
      </div>
      <div>
        <Field placeholder={"Введите пароль"} name={"password"} component={Input} 
        validate={[maxLength50, required, minValue18]}
        type="password"/>
      </div>
      <div>{props.message && <h5>{props.message}</h5>}</div>
      <div>
        <Field type={"checkbox"} name={"rememberMe"} component={"input"} />{" "}
        запомнить меня
      </div>
      <div>
        <button className={style.button}>Войти</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login"
})(LoginForm);
export default Login;
