
import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { loadAuth } from "../../store/auth/actions";
import Registration from "./Registration";

class RegistrationContainer extends React.Component {

  render() {
    return (
      <Registration {...this.props}
      state={this.props.state}/>
    );
  }
}

let mapStateToProps = (state) => ({
  state: state.authPage
  
});

export default compose(
  connect(mapStateToProps, {loadAuth})
  )(RegistrationContainer);
