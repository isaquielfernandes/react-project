import React, {Component} from "react";

export default class Search extends Component {
    render() {
       return (
          <nav className="">
             <form className="form-inline">
                 <input className="col-8 form-control mx-auto" type="search" placeholder="Search" aria-label="Search"/>
                 <button className="col-4 btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
             </form>
         </nav>
       )
    }
}
