import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { localStorageName } from "../store/auth/reducer";

export const withAuthredirect = (Component) => {
    
  const auth = localStorage.getItem(localStorageName);

  class RedirectComponent extends React.Component {
    render() {
      if (this.props.isRegistrate) return <Redirect to={"/pizza"} />;
      return <Component {...this.props} />;
    }
  }

  let mapStateToProps = (state) => {
    return {
      isRegistrate: state.authPage.isRegistrate,
    };
  };

  let ConectRedirectComponent = connect(mapStateToProps)(RedirectComponent);

  return ConectRedirectComponent;
};
