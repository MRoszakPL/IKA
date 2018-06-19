import React, { Component } from 'react';

import {
    NavLink
} from 'react-router-dom';




class LogIn extends Component{

    constructor(props) {
        super(props);
        this.state ={
            loginValue: '',
            passwordValue: ''
        }
    }


    changeHandler = (e) => {

    }
    signIn = () => {

    }

    render() {
        return (
            <div className={'row loginForm'}>
                <div className={'col-12'}>
                     <form>
                         <h3>Zaloguj się do konta</h3>
                         <input placeholder={'Login'} name={'loginValue'} type="text"/>
                         <input placeholder={'Hasło'} name={'passwordValue'}  type="password"/>
                         <button onClick={this.signIn}>Zaloguj się</button>
                         <NavLink id={'signup'} to={'signup'}>Nie masz jeszcze konta? Zarejestruj się</NavLink>
                     </form>

                </div>
            </div>
        );
    }

};

export default LogIn;