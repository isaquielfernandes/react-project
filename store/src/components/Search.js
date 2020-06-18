import React, {Component} from "react";

export default class Search extends Component {
    render() {
       return (
             <form className="container"> 
                 <div className="form-group col-8">
                     <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                 </div>
                 <div className="form-group col-4">
                    <button className="btn btn-block btn-outline-success my-sm-0" type="submit">Search</button>
                 </div>
             </form>
       )
    }
}
