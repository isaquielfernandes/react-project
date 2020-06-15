import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
//import 'primereact/resources/themes/nova-light/theme.css';
//import 'primereact/resources/primereact.min.css';
//import 'primeicons/primeicons.css';
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
import Details from "./components/Detalis";
import Default from "./components/Default";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import SignIn from "./components/SignIn";


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={ProductList}/>
          <Route exact path="/details" component={Details}/>
          <Route exact path="/signin" component={SignIn}/>
          <Route exact path="/cart" component={Cart}/>
          <Route component={Default}/>
        </Switch>
        <Modal/>
      </React.Fragment>
    );
  }
}

export default App;
