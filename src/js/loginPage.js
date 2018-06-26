import React, { Component } from 'react';

import {
    NavLink
} from 'react-router-dom';


//Send data with set name and conten//t
function sendData(name, content) {
    localStorage.setItem(name, JSON.stringify( content ) );
}

//Download data with set name
function downloadData(name) {
    return JSON.parse( localStorage.getItem(name) );
}

class LoginPage extends Component{

    constructor(props) {
        super(props);
        this.state ={
            loginValue: '',
            passwordValue: '',
            error: false
        }
    }


    changeHandler = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        });
    }


    signIn = (e) => {
        e.preventDefault();

        fetch(`http://localhost:3002/users?login=${this.state.loginValue}&password=${this.state.passwordValue}`,{
            method: 'GET',
        }).then( resp => {
            if (resp.ok)
                return resp.text();
            else
                throw new Error('Błąd sieci!');
        }).then( resp => {

            if(resp !== '[]'){

                sendData('logged', 1);
                sendData('login', this.state.loginValue);
                sendData('password', this.state.passwordValue);
                this.props.history.push('/shop');

            } else {
                this.setState({
                    error: true
                })

            }

        }).catch( err => {
            console.log('Błąd!', err);
        });
    }

    render() {

        if(downloadData('logged')){
            this.props.history.push('/shop');
            return '';
        } else {
            return (
                <div className={'row loginForm'}>
                    <div className={'col-12'}>
                        <form>
                            <h3>Zaloguj się do konta</h3>
                            <input placeholder={'Login'} onChange={this.changeHandler} name={'loginValue'}     type="text" value={this.state.loginValue}/>
                            <input placeholder={'Hasło'} onChange={this.changeHandler} name={'passwordValue'}  type="password" value={this.state.passwordValue}/>
                            <NavLink id={'forgot'} to={'recoveryPassword'}>Odzyskaj hasło</NavLink>
                            {this.state.error ? <p style={{color: 'red', fontWeight: 'bold'}}>Błędny login lub hasło</p> : <p style={{visibility: 'hidden'}}>Błędny login lub hasło</p> }
                            <button onClick={this.signIn}>Zaloguj się</button>

                            <NavLink id={'signup'} to={'signup'}>Nie masz jeszcze konta? Zarejestruj się</NavLink>
                        </form>

                    </div>
                </div>
            );
        }
    }

};

export default LoginPage;