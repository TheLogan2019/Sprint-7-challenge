import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./Components/HomePage";
import OrderForm from "./Components/OrderPage";

const App = () => {
  return (
    <div className="app">
      <h1>BloomTech Eats</h1>
      <nav>
        <Link to="/">
          <button id="home-button">Home</button>
        </Link>
        <Link to="/pizza">
          <button id="order-pizza">Order Pizza!</button>
        </Link>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/pizza" component={OrderForm} />
      </Switch>
    </div>
  );
};

export default App;
