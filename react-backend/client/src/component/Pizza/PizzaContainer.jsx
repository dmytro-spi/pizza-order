import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { getPizza } from "../redux/pizza-reducer";
import Pizza from "./Pizza";

class PizzaContainer extends React.Component {

componentDidMount(){
  this.props.getPizza();
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
  connect(mapStateToProps, {getPizza})
  )(PizzaContainer);
