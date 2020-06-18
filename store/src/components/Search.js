import React, {Component} from "react";

export default class Search extends Component {
    render() {
       return (
          <nav className="col-10">
             <form className="form-inline">
                 <input className="col-10 form-control mx-auto" type="search" placeholder="Search" aria-label="Search"/>
                 <button className="col-2 mx-auto btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
             </form>
         </nav>
       )
    }
}
