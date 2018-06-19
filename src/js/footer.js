import React, { Component } from 'react';

import {
    NavLink
} from 'react-router-dom';

class MyAccount extends Component{

    render() {
        return (
            <div className={'col-md'}>
                <h3>Moje konto</h3>
                <ul>
                    <li><NavLink to={'login'}>Zaloguj</NavLink></li>
                    <li><NavLink to={'signUp'}>Zarejestruj się</NavLink></li>
                    <li><NavLink to={'passwordRecovery'}>Przypomnienie hasła</NavLink></li>
                    <li><NavLink to={'tos'}>Regulamin</NavLink></li>
                    <li><NavLink to={'foms'}>Formularze</NavLink></li>
                </ul>
            </div>
        );
    }

}


class Others extends Component{

    render() {
        return (
            <div className={'col-md'}>
                <h3>O firmie</h3>
                <ul>
                    <li><NavLink to={'about'}>Firma</NavLink></li>
                    <li><NavLink to={'ecology'}>Ekologia</NavLink></li>
                    <li><NavLink to={'quality'}>Jakość</NavLink></li>
                    <li><NavLink to={'carrier'}>Kariera</NavLink></li>
                    <li><NavLink to={'handelPartners'}>Partnerzy handlowi</NavLink></li>
                </ul>
            </div>
        );
    }

}


class MainBrands extends Component{

    render() {
        return (
            <div className={'col-md'}>
                <h3>Marki własne</h3>
                <img className={'brand'} src={'./images/masterFooter.png'} alt={'Marka master'}/>
                <img className={'brand'} src={'./images/moranaFooter.png'} alt={'Marka Morana'}/>
            </div>
        );
    }

}

class Contact extends Component{

    render() {
        return (
            <div className={'col-md'}>
                <h3>Kontakt</h3>
                <p className={'number'}>61 653 10 80</p>
                <p className={'number'}>info@ika.pl</p>
                <p>Dział obslugi klienta czynny
                    od poniedziałku do piątku
                    w godzinach 8:00 do 16:00</p>
            </div>
        );
    }
}

class Footer extends Component {

    render() {
        return (
            <footer>
                <div className={'container row'}>
                    <MyAccount/>
                    <Others/>
                    <MainBrands/>
                    <Contact/>
                </div>
            </footer>
        );
    }

}

export default Footer;


