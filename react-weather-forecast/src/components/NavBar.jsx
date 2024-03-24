import React from 'react';
import './NavBar.css';


function NavBar(props) {

    return (
            <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
                <div className="container-fluid">
                    <button
                        data-mdb-collapse-init
                        className="navbar-toggler"
                        type="button"
                        data-mdb-target="#navbarTogglerDemo03"
                        aria-controls="navbarTogglerDemo03"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                    <a className="navbar-brand" href="/">MyWeather APP</a>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/link">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">Disabled</a>
                            </li>
                        </ul>

                        <form className="d-flex input-group">
                        <input
                            onChange={props.handleChange}
                            type="search"
                            className="form-control rounded text-color"
                            placeholder="Search for a location"
                            aria-label="Search"
                            aria-describedby="search-addon"
                            />
                            <span onClick={props.handleSubmit} className="input-group-text border-0" id="search-addon">
                                <i className="fas fa-search"></i>
                            </span>
                        </form>
                    </div>
                </div>
            </nav>
    );
}

export default NavBar;