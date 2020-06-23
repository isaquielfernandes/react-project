import React, {Component} from "react";

export default class Search extends Component {
    render() {
       return (
            <form className="container"> 
                <div className="row">
                    <div class="col-md-4 offset-md-4">
                        <div className="form-group p-1 col-10">
                            <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                        </div>
                        <div className="form-group ml-auto p-1 col-2">
                            <button className="btn btn-outline-success my-sm-0" type="submit"><i class="fas fa-search"></i></button>
                        </div>
                    </div>
                </div>
            </form>
       )
    }
}
