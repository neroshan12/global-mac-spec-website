import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./Containers/Home";
import Heading from "./Components/Heading";
import NavBar from "./Components/NavBar";
import Sell from "./Containers/Sell";
import Repairs from "./Containers/Repairs";
import AboutUs from "./Containers/AboutUs";
import ContactUs from "./Containers/ContactUs";
import Buy from "./Containers/Buy";
import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Heading />
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/buy" component={Buy} />
          <Route path="/sell" component={Sell} />
          <Route path="/repairs" component={Repairs} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/contact-us" component={ContactUs} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
