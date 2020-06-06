import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark text-white title shadow-lg">
            <a className="navbar-brand" href="#"><img src="../img/logo-white.png" className="img-fluid" alt="" width="150" /></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link  className="nav-link"  to="Boxes">Gifts Boxes</Link>
                        
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">How it Works</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Gift Cards</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Payments</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><i class="fab fa-instagram fa-2x"></i></a>
                    </li>
                </ul>

            </div>
        </nav>
    )
}
export default Navbar;