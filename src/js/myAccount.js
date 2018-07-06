import React, { Component } from 'react';

//Download data with set name
function downloadData(name) {
    return JSON.parse( localStorage.getItem(name) );
}

class Basket extends Component{

    constructor(props) {
        super(props);
        this.state = {
            info: null,
            recived: 0
        }
    }


    componentDidMount() {

        let login = downloadData('login');
        let password = downloadData('password');
        if(this.state.recived !== 1){
            fetch(`http://localhost:3002/users?login=${login}&password=${password}`,{
                method: 'GET',
            }).then( resp => {
                if (resp.ok)
                    return resp.json();
                else
                    throw new Error('Błąd sieci!');
            }).then( resp => {

                this.setState({
                    info: resp,
                    recived: 1
                })

            }).catch( err => {
                console.log('Błąd!', err);
            });
        }
    }


    nav = () =>{
        this.props.history.push('/myOrders');
    }

    render() {

        if(this.state.info !== null){

        return (

                <div className={'container  myAccount'}>
                    <div className={'row'}>
                    <div className={'col-md'}>
                        <img src={'./images/user.png'} alt={'User'} />
                    </div>
                    <div className={'col-md'}>
                        <h2>Dane użytkownika</h2>
                        <ul>
                            <li>Imię i nazwisko: {this.state.info[0].name} {this.state.info[0].surename}</li>
                            <li>Login: {this.state.info[0].login}</li>
                            <li>E-mail: {this.state.info[0].email}</li>
                            <li>Typ użytkownika: {this.state.info[0].level ? 'Klient' : 'Administrator'}</li>
                        </ul>
                        <button onClick={this.nav}>Zamówienia</button>

                        <button>Edytuj dane</button>
                        <button>Zmień hasło</button>
                    </div>

                    </div>
                </div>

        );
        } else {
            return null;
        }

    }

};

export default Basket;