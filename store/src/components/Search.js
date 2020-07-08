import React, { Component } from "react";

const Search = () => {
       return (
            <form className="mt-2"> 
                <div className="form-row my-3 mx-auto">
                    <div className="col-12">
                       <label className="sr-only" for="inlineFormInputGroup">search</label>
                       <div className="input-group mb-2">
                          <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                          <div className="input-group-prepend">
                              <div className="input-group-text">
                                 <button type="submit">
                                    <i className="fas fa-search"></i>
                                 </button>
                              </div>
                          </div>
                        </div>
                   </div>
                </div>
                <hr/>
            </form>
       )
}

export default Search;
