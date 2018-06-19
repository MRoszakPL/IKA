import React, { Component } from 'react';

import {
    NavLink
} from 'react-router-dom';




class LogIn extends Component{

    render() {
        return (
            <div className={'row loginForm'}>
                <div className={'col-12'}>
                     <form>
                         <label>Login<input type="text"/></label>
                         <label>Hasło<input type="password"/></label>
                         <button>Zaloguj się</button>
                         <NavLink id={'signup'} to={'signup'}>Zarejestruj się</NavLink>
                     </form>

                </div>
            </div>
        );
    }

};

export default LogIn;