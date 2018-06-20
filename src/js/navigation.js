import React, { Component } from 'react';
import {
    NavLink, Redirect
} from 'react-router-dom';


class NavBar extends Component{

    constructor(props) {
        super(props);
        this.state={
            navigate: false
        }
    }

    //Send data with set name and conten//t
    sendData(name, content) {
        localStorage.setItem(name, JSON.stringify( content ) );

    }

    //Download data with set name
    downloadData(name) {
        return JSON.parse( localStorage.getItem(name) );
    }

    unsign = (e) =>{
        e.preventDefault();

        this.sendData('logged', 0);
        this.sendData('login', 0);
        this.sendData('password', 0);
        this.setState({
            navigate: true
        })
    }

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
                        {this.downloadData('login') ? <li className="nav-item">
                            <NavLink className="nav-link" to="/myaccount">Moje konto</NavLink>
                        </li> : ''}
                        <li className="nav-item">
                            {this.downloadData('logged') ? <NavLink className="nav-link" to="/unsing" onClick={this.unsign}>Wyloguj konto</NavLink>  : <NavLink className="nav-link" to="/login">Zaloguj się</NavLink>}
                        </li>
                        {this.state.navigate && <Redirect to="/" push={true} /> }
                    </ul>
                </div>
            </nav>
        );
    }

};

export default NavBar;