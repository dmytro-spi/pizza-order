import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { localStorageName } from "../store/auth/reducer";
import { loadLogin } from "../store/auth/actions";

export const withAuthredirect = (Component) => {
    
  const auth = localStorage.getItem(localStorageName);

  class RedirectComponent extends React.Component {
    render() {
      if (!auth) return <Redirect to={"/login"} />;
        // loadLogin(auth.login, auth.pass);
      return <Component {...this.props} />;
    }
  }

  let mapStateToProps = (state) => {
    return {
      isAuth: state.auth.isAuth,
    };
  };

  let ConectRedirectComponent = connect(mapStateToProps)(RedirectComponent);

  return ConectRedirectComponent;
};
