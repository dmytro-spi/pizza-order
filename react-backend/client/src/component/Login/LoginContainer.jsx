
import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { loadLogin } from "../../store/auth/actions";
import Login from "./Login";

class LoginContainer extends React.Component {

  render() {
    
    return (
      <Login {...this.props}
      message={this.props.message}
      loadLogin={this.props.loadLogin}/>
      
    );
  }
}

let mapStateToProps = (state) => ({
  message: state.authPage.message,
  
});

export default compose(
  connect(mapStateToProps, {loadLogin})
  )(LoginContainer);
