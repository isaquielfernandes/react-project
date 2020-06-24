import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import Search from "./Search";
import { storeProducts } from "../data";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import Footer from "./Footer";

export default class ProductList extends Component {
    state = {
        products: storeProducts
    };

    render() {
        return(
            <React.Fragment>
                <ProductWrapper className="py-5">
                    <div className="container">
                        <Title name="our" title="products" />
                        <Search/>
                        <div className="row">
                            <ProductConsumer>
                                {value => {
                                return value.products.map(product => {
                                    return <Product key={product.id} product={product} />;
                                });
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </ProductWrapper>
                <Footer/>
            </React.Fragment>
        );
    }
}

const ProductWrapper = styled.section``; 
