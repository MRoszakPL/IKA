import React, { Component } from 'react';

const { compose } = require("recompose");

const {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} = require("react-google-maps");

const MapWithAMarker = compose(
    withScriptjs,
    withGoogleMap
)(props =>
    <GoogleMap
        defaultZoom={6}
        defaultCenter={{ lat: 51.9202186, lng: 18.502256 }}
    >
        <Marker
            position={{ lat: -34.397, lng: 150.644 }}
        />
    </GoogleMap>
);



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
                        <p className={'number'}>biuro@ika.pl</p>
                        <p>Dział obslugi klienta czynny
                            od poniedziałku do piątku
                            w godzinach 8:00 do 16:00</p>
                    </div>
                </div>

                <div className={'row map'}>
                    <div className={'col-12'}>
                        <h2>Oddziały</h2>
                        <MapWithAMarker
                            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
                            loadingElement={<div style={{ height: `100%` }} />}
                            containerElement={<div style={{ height: `400px` }} />}
                            mapElement={<div style={{ height: `30rem` }} />}
                        />
                        <h2>Lista oddziałów</h2>
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