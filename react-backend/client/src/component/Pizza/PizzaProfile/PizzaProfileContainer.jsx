import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { loadPizzaProfile } from "../../../store/pizza/actions";
import PizzaProfile from "./PizzaProfile";

class PizzaProfileContainer extends React.Component {

componentDidMount(){
  let id = this.props.match.params.id;
  this.props.loadPizzaProfile(id);
  
}

  render() {
    
    return (
      <PizzaProfile {...this.props}
      pizza={this.props.pizzaProfile}/>
    );
  }
}

let mapStateToProps = (state) => ({
  pizzaProfile: state.pizzaPage.pizzaProfile
});

export default compose(
  connect(mapStateToProps, {loadPizzaProfile}),
  withRouter
  )(PizzaProfileContainer);
