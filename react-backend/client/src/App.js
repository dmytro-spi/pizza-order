import React from "react";
// import logo from './logo.svg';
import "./App.sass";
import { Route } from "react-router-dom";
import Header from "./component/Header/Header";
import AboutUs from "./component/AboutUs/AboutUs";
import PizzaContainer from "./component/Pizza/PizzaContainer";
import DrinksContainer from "./component/Drinks/DrinksContainer";
import Login from "./component/Login/Login";



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

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

          <Route path="/pizza" render={() => <PizzaContainer/>} />
          <Route path="/drinks" render={() => <DrinksContainer />} />
          <Route path="/aboutus" render={() => <AboutUs />} />
          <Route path="/login" render={() => <Login />} />
        </div>
      </div>
    );
  }
}

export default App;
