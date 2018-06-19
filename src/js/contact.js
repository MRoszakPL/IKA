import React, { Component } from 'react';
const { compose } = require("recompose");
const { withScriptjs, withGoogleMap, GoogleMap,Marker} = require("react-google-maps");

const listOfContacts = [
    {
        name: 'Centrala Poznań',
        adress: '61-362 Poznań, ul. Forteczna 19',
        main: '61 653 10 80',
        fax: '61 653 09 65',
        kom: '601 901 000',
        email: 'zieniuk@ika.pl'},
    {
        name: 'Oddział Szczecin',
        adress: '72-002 Dołuje k. Szczecina, ul. Słoneczny Sad 29B',
        main: '91 462 37 44',
        fax: '91 462 37 33',
        kom: '601 901 044',
        email: 'tomaszmatkowski@ika.pl'},
    {
        name: 'Oddział Kraków',
        adress: '30-740 Kraków, ul. Półłanki 29 G',
        main: '12 296 23 40',
        fax: '12 264 37 59',
        kom: '601 901 020',
        email: 'skowron@ika.pl'},
    {
        name: 'Oddział Złotów',
        adress: '77-400 Złotów, ul. Sosnowa 8',
        main: '67 349 21 14',
        fax: '67 349 21 15',
        kom: '601 901 080',
        email: 'zieniuk@ika.pl'},
    {
        name: 'Oddział Żagań:',
        adress: '68-100 Żagań, ul. Bema 17',
        main: '68 477 68 20',
        fax: '68 477 45 15',
        kom: '601 901 050',
        email: 'zamorski@ika.pl'},
];


const MapWithAMarker = compose(withScriptjs, withGoogleMap)(props =>
    <GoogleMap
        defaultZoom={6}
        defaultCenter={{ lat: 51.9202186, lng: 18.502256 }}
    >
        <Marker
            position={{ lat: -34.397, lng: 150.644 }}
        />
    </GoogleMap>
);

class ListElement extends Component{

    render() {
        const {name, adress, main, fax, kom, email} = this.props.data;
        return (
            <li className={'col-4'}>
                <h4>{name}</h4>
                <p>{adress}</p>
                <p>{main}</p>
                <p>{fax}</p>
                <p>{kom}</p>
                <p>{email}</p>
            </li>
        );
    }

}


class List extends Component{

    render() {
        let list = this.props.listElements.map((element, index)=>{
            return <ListElement key={index} data={element}/>
        })
        return (
            <ul style={{ marginTop: '4rem'}}>
                {list}
            </ul>
        );
    }

}

class Form extends Component{

    render() {
        return (
            <div className={'container contact'}>
                <div className={'row'}>
                    <div className={'col-8'}>
                        <h2>Formularz kontaktowy</h2>
                        <form>
                            <input name={'name'} placeholder={'Imię i nazwisko'} type={'text'}/>
                            <input name={'mail'} placeholder={'Adres email'} type={'text'}/>
                            <textarea placeholder={'Twoja wiadomość'} name={'message'}></textarea>
                            <button>Wyślij</button>
                        </form>
                    </div>
                    <div className={'col-4 '}>
                        <h2>Kontakt</h2>
                        <h4>Główny numer</h4>
                        <p className={'number'}>61 653 10 80</p>
                        <p className={'number'}>info@ika.pl</p>
                        <p>Dział obslugi klienta czynny
                            od poniedziałku do piątku
                            w godzinach 8:00 do 16:00</p>
                    </div>
                </div>

                <div className={'row map'}>
                    <div className={'row'}>
                        <div className={'col-12'}>
                            <h2>Oddziały</h2>

                            <MapWithAMarker
                                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
                                loadingElement={<div style={{ height: `100%` }} />}
                                containerElement={<div style={{ height: `400px` }} />}
                                mapElement={<div style={{ height: `30rem` }} />}
                            />

                            <List listElements={listOfContacts}/>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

}

class Contact extends Component{

    render() {
        return (
                <Form/>
        );
    }

};

export default Contact;