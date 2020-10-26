import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

export const withAuthredirect = (Component) => {
    

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
