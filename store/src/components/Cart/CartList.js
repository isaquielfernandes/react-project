import React, { Component } from "react";
import CartItem from "./CartItem";

export default class CartaList extends Component {
   
    render() {
       const { value } = this.props;
       const { cart } = this.props.value;

       return (
           <div className="container-fluid">
             {cart.map(item => ( <CartItem key={item.id} item={item} value={value} /> ))}
           </div>
       );
    }
}
