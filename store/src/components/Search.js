import React, { useState } from "react";

const Search = ({ getQuery }) => {

       const [text, setText] = useState('')

       const onChange = (q) => {
          setText(q)
          getQuery(q)
       }

       return (
            <form className="mt-2"> 
                <div className="form-row my-3 mx-auto">
                    <div className="col-12">
                       <label className="sr-only" for="inlineFormInputGroup">search</label>
                       <div className="input-group mb-2">
                          <input 
                             className="form-control" 
                             type="search" 
                             placeholder="Search" 
                             aria-label="Search"
                             value={text}
                             onChange={(e) => onChange(e.target.value)}
                             
                          />
                          <div className="input-group-prepend">
                              <div className="input-group-text">
                                    <i className="fas fa-search"></i>
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
