import React, { Component } from "react";

export default class Search extends Component {
    render() {
       return (
            <form className="mt-2"> 
                <div className="form-row my-3 mx-auto">
                    <div className="col-xs-8 col-md-4">
                        <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                    </div>
                    <div className="col-xs-3 col-md-3">
                        <button className="btn btn-outline-success" type="submit">
                            <i className="fas fa-search"></i>
                        </button> 
                    </div>
                </div>
                <hr/>
            </form>
       )
    }
}
