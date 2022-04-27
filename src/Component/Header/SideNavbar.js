import React from 'react';
import { Link } from 'react-router-dom';

const SideNavbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark p-4">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className='text-decoration-none text-light mx-4' to='/'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='text-decoration-none text-light mx-4' to='/Table1'>Revenue</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='text-decoration-none text-light mx-4' to='/input1'>SrcbyRange</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='text-decoration-none text-light mx-4' to='/mincap'>Min capacity</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='text-decoration-none text-light mx-4' to='/unused'>Unused</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='text-decoration-none text-light mx-4' to='/ClassRoom'>ClassRoom</Link>
                            </li>



                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default SideNavbar;