import React from 'react';
import './Header.css';


function Header() {

    return (
            <div className="p-5 text-center bg-image image">
                <div className="mask header">
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <div className="text-white forecast-border">
                        <h1 className="mb-3">Find a Forecast</h1>
            <div className="input-group">
                <div className="form-outline main-search" data-mdb-input-init>
                    <input id="search-input form1" type="search" className="form-control border border-1" />
                    <label className="form-label" htmlFor="form1">Search for a place</label>
                </div>
                <button id="search-button" type="button" className="btn btn-primary">
                    <i className="fas fa-search"></i>
                </button>
            </div>                    
                    </div>
                    
                    </div>
                </div>
            </div>
        
    )
}

export default Header;