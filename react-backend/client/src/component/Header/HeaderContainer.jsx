import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { loadMe } from "../../store/auth/actions";
import { localStorageName } from "../../store/auth/reducer";
import Header from "./Header";

class HeaderContainer extends React.Component {
  componentDidMount() {
    if (!this.props.login) {
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
      />
    );
  }
}

let mapStateToProps = (state) => ({
  login: state.authPage.login,
});

export default compose(connect(mapStateToProps, { loadMe }))(HeaderContainer);
