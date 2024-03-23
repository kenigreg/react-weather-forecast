import React from 'react';
import './Header.css';


function Header() {

    return (
            <div className="p-5 text-center bg-image image">
                <div className="mask header">
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <div className="text-white">
                            <h1 className="mb-3">Heading</h1>
                            <h4 className="mb-3">Subheading</h4>
                            <a data-mdb-ripple-init className="btn btn-outline-light btn-lg" href="#!" role="button">Call to action</a>
                        </div>
                    </div>
                </div>
            </div>
        
    )
}

export default Header;