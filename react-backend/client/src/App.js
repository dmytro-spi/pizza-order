import React from "react";
// import logo from './logo.svg';
import "./App.sass";
import { Route } from "react-router-dom";
import Header from "./component/Header/Header";
import AboutUs from "./component/AboutUs/AboutUs";
import PizzaContainer from "./component/Pizza/PizzaContainer";
import DrinksContainer from "./component/Drinks/DrinksContainer";
import Login from "./component/Login/Login";
import PizzaProfileContainer from "./component/Pizza/PizzaProfile/PizzaProfileContainer";
import RegistrationContainer from "./component/Login/RegistrationContainer";




class App extends React.Component {
  state = { users: [] };

  componentDidMount() {

    
    fetch("/users")
      .then((res) => res.json())
      .then((users) => {
        this.setState({ users })});
  }

  render() {
    return (
      <div className="App">
        <Header />
        
        <div>
          {/* {this.state.users.map((user) => (
            <div key={user.id}>{user.username}</div>
          ))} */}

          <Route exact path="/pizza/:id" render={() => <PizzaProfileContainer/>} />
          <Route exact path="/pizza" render={() => <PizzaContainer/>} />
          <Route path="/drinks" render={() => <DrinksContainer />} />
          <Route path="/aboutus" render={() => <AboutUs />} />
          <Route path="/login" render={() => <Login />} />
          <Route path="/registration" render={() => <RegistrationContainer />} />
        </div>
      </div>
    );
  }
}

export default App;
