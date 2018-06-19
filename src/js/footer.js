import React, { Component } from 'react';



class MyAccount extends Component{

    render() {
        return (
            <div className={'col-md'}>
                <h3>Moje konto</h3>

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
                <p className={'number'}>biuro@ika.pl</p>
                <p>Dział obslugi klienta czynny
                    od poniedziałku do piątku
                    w godzinach 8:00 do 16:00</p>
            </div>
        );
    }
}


class MainBrands extends Component{

    render() {
        return (
            <div className={'col-md'}>
                <h3>Marki własne</h3>
                <img className={'brand'} src={'./images/masterFooter.png'}/>
                <img className={'brand'} src={'./images/moranaFooter.png'}/>
            </div>
        );
    }

}

class Footer extends Component {

    render() {
        return (
            <div className={'container row'}>

               <MyAccount/>

                <div className={'col-md'}>
                    <h3>Obsługa</h3>
                </div>

                <div className={'col-md'}>
                    <h3>Inne</h3>
                </div>

                <MainBrands/>
                <Contact/>
            </div>
        );
    }

}

export default Footer;


