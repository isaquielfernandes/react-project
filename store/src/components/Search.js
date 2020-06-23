import React, { Component } from "react";

export default class Search extends Component {
    render() {
       return (
            <form className="container"> 
                <div className="form-row">
                    <div class="col-md-6">
                        <div class="col-md-6 mb-3">
                            <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                        </div>
                        <div class="col-md-6 mb-3">
                            <button className="btn btn-outline-success my-sm-0" type="submit"><i class="fas fa-search"></i></button> 
                        </div>
                    </div>
                </div>
            </form>
       )
    }
}
