import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import Pizza from "./Pizza";

import s from "./Pizza.module.sass";



class PizzaContainer extends React.Component {

  render() {
    return (
      <Pizza {...this.props}
      pizza={this.props.pizza}/>
    );
  }
}

let mapStateToProps = (state) => ({
  
  pizza: state.pizzaPage.pizza
});


export default compose(
  connect(mapStateToProps)
)(PizzaContainer);
