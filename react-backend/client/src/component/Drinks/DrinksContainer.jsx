import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { loadDrinks } from "../../store/drinks/actions";
import Drink from "./Drink";

class DrinksContainer extends React.Component {
  componentDidMount() {
    this.props.loadDrinks();
  }

  render() {
    return <Drink {...this.props} drinks={this.props.drinks} />;
  }
}

let mapStateToProps = (state) => ({
  drinks: state.drinksPage.drinks,
});

export default compose(connect(mapStateToProps, { loadDrinks }))(
  DrinksContainer
);
