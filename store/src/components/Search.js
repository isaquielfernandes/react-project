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
                    </div>
                </div>
            </form>
       )
    }
}
