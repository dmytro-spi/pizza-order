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
      debugger
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
      />
    );
  }
}

let mapStateToProps = (state) => ({
  login: state.authPage.login,
  isRegistrate:state.authPage.isRegistrate,
});

export default compose(connect(mapStateToProps, { loadMe, removeToken }))(HeaderContainer);
