
import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { loadAuth, loadLogin } from "../../store/auth/actions";
import Registration from "./Registration";

class RegistrationContainer extends React.Component {

  render() {
    
    return (
      <Registration {...this.props}
      state={this.props.state}
      message={this.props.message}
      // isRegistrate={this.props.isRegistrate}
      // loadLogin={this.props.loadLogin}
      />
      
    );
  }
}

let mapStateToProps = (state) => ({
  message: state.authPage.message,
  isRegistrate: state.authPage.isRegistrate
  
});

export default compose(
  connect(mapStateToProps, {loadAuth, 
    // loadLogin
  })
  )(RegistrationContainer);
