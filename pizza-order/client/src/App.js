import React from "react";
import "./App.sass";
import { Route } from "react-router-dom";
import AboutUs from "./component/AboutUs/AboutUs";
import PizzaContainer from "./component/Pizza/PizzaContainer";
import DrinksContainer from "./component/Drinks/DrinksContainer";
import PizzaProfileContainer from "./component/Pizza/PizzaProfile/PizzaProfileContainer";
import RegistrationContainer from "./component/Login/RegistrationContainer";
import LoginContainer from "./component/Login/LoginContainer";
import HeaderContainer from "./component/Header/HeaderContainer";


class App extends React.Component {
  // state = { users: [] };
  
  componentDidMount() {
    
  }

  render() {
      
    return (
      <div className="App">
        <HeaderContainer />
        
        <div>
          {/* {this.state.users.map((user) => (
            <div key={user.id}>{user.username}</div>
          ))} */}

          <Route exact path="/pizza/:id" render={() => <PizzaProfileContainer/>} />
          <Route exact path="/pizza" render={() => <PizzaContainer/>} />
          <Route path="/drinks" render={() => <DrinksContainer />} />
          <Route path="/aboutus" render={() => <AboutUs />} />
          <Route path="/login" render={() => <LoginContainer />} />
          <Route path="/registration" render={() => <RegistrationContainer />} />
        </div>
      </div>
    );
  }
}


export default App;
