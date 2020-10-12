import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


export const withAuthredirect = (Component) => {

class RedirectComponent extends React.Component {
  render(){
    if(!this.props.isAuth) return <Redirect to={"/login"}/>

    return <Component {...this.props}/>
  }
}

let mapStateToProps = (state) =>{
  return{

    isAuth: state.auth.isAuth
  }
}

let ConectRedirectComponent = connect(mapStateToProps)(RedirectComponent);

 return ConectRedirectComponent;
}