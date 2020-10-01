import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { loadPizza } from "../../store/pizza/actions";
import Pizza from "./Pizza";

class PizzaContainer extends React.Component {

componentDidMount(){
  this.props.loadPizza();
}

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
  connect(mapStateToProps, {loadPizza})
  )(PizzaContainer);
