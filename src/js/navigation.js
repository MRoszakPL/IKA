import React, { Component } from 'react';
import {
    NavLink
} from 'react-router-dom';


class NavBar extends Component{

    render() {
        return (
            <nav className="navbar navbar-expand navbar-light sticky-top">
                <div className='container'>
                    <NavLink className="nav-link" to="/"><div className={'homeButton'}></div></NavLink>
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/shop">Sklep</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/blog">Blog</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Kontakt</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login">Zaloguj sie</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }

};

export default NavBar;