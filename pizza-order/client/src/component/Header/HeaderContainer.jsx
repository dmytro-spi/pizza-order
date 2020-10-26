import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { loadMe, loadLogout } from "../../store/auth/actions";
import Header from "./Header";

class HeaderContainer extends React.Component {
  componentDidMount() {
    if (!this.props.isRegistrate) {
      this.props.loadMe();
    }
  }

  render() {
    return (
      <Header
        {...this.props}
        login={this.props.login}
        loadMe={this.props.loadMe}
        loadLogout={this.props.loadLogout}
        cart={this.props.cart}
      />
    );
  }
}

let mapStateToProps = (state) => ({
  login: state.authPage.login,
  isRegistrate: state.authPage.isRegistrate,
  cart: state.authPage.cart,
});

export default compose(connect(mapStateToProps, { loadMe, loadLogout }))(
  HeaderContainer
);
