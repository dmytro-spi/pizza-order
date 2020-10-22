import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import Cart from "./Cart";

class CartContainer extends React.Component {

componentDidMount(){
  
}

  render() {
    return (
      <Cart {...this.props}
      cart={this.props.cart}/>
    );
  }
}

let mapStateToProps = (state) => ({
  cart: state.cartPage.cart
  
});

export default compose(
  connect(mapStateToProps,)
  )(CartContainer);
