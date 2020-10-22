import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { loadMe, removeToken } from "../../store/auth/actions";
import { localStorageName } from "../../store/auth/reducer";
import Header from "./Header";

class HeaderContainer extends React.Component {
  componentDidMount() {
    if (!this.props.isRegistrate) {
      const localToken = localStorage.getItem(localStorageName);
     
      if (localToken) {
        this.props.loadMe(localToken);
      }
      
    }
  }

  render() {
    return (
      <Header
        {...this.props}
        login={this.props.login}
        loadMe={this.props.loadMe}
        removeToken={this.props.removeToken}
        cart={this.props.cart}
      />
    );
  }
}

let mapStateToProps = (state) => ({
  login: state.authPage.login,
  isRegistrate:state.authPage.isRegistrate,
  cart:state.authPage.cart,
});

export default compose(connect(mapStateToProps, { loadMe, removeToken }))(HeaderContainer);
