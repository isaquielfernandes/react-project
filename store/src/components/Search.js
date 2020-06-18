import React, {Component} from "react";

export default class Search extends Component {
    render() {
       return (
             <form> 
                 <div className="col-9 form-group">
                 <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                 </div>
                 <div className="col-3 form-group">
                    <button className="btn btn-block btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                 </div>
             </form>
       )
    }
}
