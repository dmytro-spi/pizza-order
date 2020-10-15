
import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthredirect } from "../../hoc/withAuthRedirect";
import { loadLogin, setMessage } from "../../store/auth/actions";
import Login from "./Login";

class LoginContainer extends React.Component {

  render() {
    
    return (
      <Login {...this.props}
      message={this.props.message}
      loadLogin={this.props.loadLogin}
      setMessage={this.props.setMessage}
      />
    );
  }
}

let mapStateToProps = (state) => ({
  message: state.authPage.message,
  isRegistrate: state.authPage.isRegistrate
  
});

export default compose(
  connect(mapStateToProps, {loadLogin, setMessage}),
  withAuthredirect
  )(LoginContainer);
