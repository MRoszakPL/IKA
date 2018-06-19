import React, { Component } from 'react';



class Footer extends Component {

    render() {
        return (
            <div className={'container row'}>

                <div className={'col-sm'}>
                    <h3>Moje Konto</h3>
                </div>

                <div className={'col-sm'}>
                    <h3>Obsługa</h3>
                </div>

                <div className={'col-sm'}>
                    <h3>Marki własne</h3>
                </div>

                <div className={'col-sm'}>
                    <h3>Kontakt</h3>
                </div>
            </div>
        );
    }

}

export default Footer;


