import React, {Component} from "react";

export default class Search extends Component {
    render() {
       return (
          <nav className="col-12">
             <form className="form-inline row">
                 <input className="col-9 form-control" type="search" placeholder="Search" aria-label="Search"/>
                 <button className="col-3 ml-1 btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
             </form>
         </nav>
       )
    }
}
