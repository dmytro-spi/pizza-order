import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { loadDrinkProfile } from "../../../store/drinks/actions";
import DrinkProfile from "./DrinkProfile";

class DrinkProfileContainer extends React.Component {

componentDidMount(){
  let id = this.props.match.params.id;
  this.props.loadDrinkProfile(id);
  
}

  render() {
    debugger
    return (
      <DrinkProfile {...this.props}
      drinkProfile={this.props.drinkProfile}/>
    );
  }
}

let mapStateToProps = (state) => ({
  drinkProfile: state.drinksPage.drinkProfile
});

export default compose(
  connect(mapStateToProps, {loadDrinkProfile}),
  withRouter
  )(DrinkProfileContainer);
