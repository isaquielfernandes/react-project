import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";
import styled from "styled-components";
import logo from "../logo.svg";

export default class Navbar extends Component {
    render() {
        return (
            <Nav className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to="/">
                    <img src={logo} alt="store" className="navbar-brand"/>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">Products</Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                        <span >
                            <i className="fa fa-shopping-cart"/>
                        </span>
                    </ButtonContainer>
                </Link>
                 <Link to="/signin" className="ml-1">
                    <ButtonContainer>
                        <span >
                            <i class="fa fa-user-circle-o mr-1" aria-hidden="true"></i>
                        </span>
                    </ButtonContainer>
                </Link>
            </Nav>
        )
    }
}

const Nav = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size:1.3rem;
    text-transform:capitalize;
  }
  @media (max-width: 576px) {
    .navbar-nav {
      flex-direction: row !important;
`;
