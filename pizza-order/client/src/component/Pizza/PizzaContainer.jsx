import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { loadPizza, change } from "../../store/pizza/actions";
import Pizza from "./Pizza";

class PizzaContainer extends React.Component {

componentDidMount(){
  this.props.loadPizza();
  
}

  render() {
    
    return (
      <Pizza {...this.props}
      pizza={this.props.pizza}
      onChange={this.props.onChange}
      change={this.props.change}/>
    );
  }
}

let mapStateToProps = (state) => ({
  pizza: state.pizzaPage.pizza,
  onChange: state.pizzaPage.onChange
});

export default compose(
  connect(mapStateToProps, {loadPizza, change})
  )(PizzaContainer);
