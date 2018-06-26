import React, { Component } from 'react';
const { compose } = require("recompose");
const { withScriptjs, withGoogleMap, GoogleMap,Marker, InfoWindow} = require("react-google-maps");

const listOfContacts = [
    {
        name: 'Centrala Poznań',
        city: '61-362 Poznań',
        street: 'ul. Forteczna 19',
        main: '61 653 10 80',
        fax: '61 653 09 65',
        kom: '601 901 000',
        email: 'zieniuk@ika.pl'},
    {
        name: 'Oddział Szczecin',
        city: '72-002 Dołuje k. Szczecina',
        street: 'ul. Słoneczny Sad 29B',
        main: '91 462 37 44',
        fax: '91 462 37 33',
        kom: '601 901 044',
        email: 'tomaszmatkowski@ika.pl'},
    {
        name: 'Oddział Kraków',
        city: '30-740 Kraków',
        street: 'ul. Półłanki 29 G',
        main: '12 296 23 40',
        fax: '12 264 37 59',
        kom: '601 901 020',
        email: 'skowron@ika.pl'},
    {
        name: 'Oddział Złotów',
        city: '77-400 Złotów',
        street: 'ul. Sosnowa 8',
        main: '67 349 21 14',
        fax: '67 349 21 15',
        kom: '601 901 080',
        email: 'zieniuk@ika.pl'},
    {
        name: 'Oddział Żagań',
        city: '68-100 Żagań',
        street: 'ul. Bema 17',
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
        <Marker //Poznań
            position={{ lat: 52.3685212, lng: 16.9359031 }}
            title = {'Centrala Poznań'}
        />
        <Marker //Szczecin
            position={{ lat: 53.4396986, lng: 14.4057631 }}
            title = {'Oddział Szczecin'}
        />
        <Marker //Kraków
            position={{ lat: 50.0302794, lng: 20.036916 }}
            title = {'Oddział Kraków'}
        />
        <Marker //Złotów
            position={{ lat: 53.3502152, lng: 17.049427 }}
            title = {'Oddział Złotów'}
        />
        <Marker //Żagań
            position={{ lat: 51.6140615, lng: 15.2957965 }}
            title = {'Oddział Żagań'}
        />


    </GoogleMap>
);

class ListElement extends Component{

    render() {
        const {name, city, street, main, fax, kom, email} = this.props.data;
        return (
            <li className={'col-3'}>
                <h4>{name}</h4>
                <p>Adres: {city}</p>
                <p>{street}</p>
                <p>tel: {main}</p>
                <p>tel/fax :{fax}</p>
                <p>kom: {kom}</p>
                <p>e-mail: {email}</p>
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
            <ul>
                {list}
            </ul>
        );
    }

}

class Form extends Component{


    constructor(props) {
        super(props);
        this.state = {
            nameValue: '',
            mailValue: '',
            messageValue: '',
            nameError: '',
            mailError: '',
            messageError: '',
            messageSend: ''
        };
    }


    changeHandler = (e) => {

        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    clickHandler = (e) => {
            e.preventDefault();
            let everythingIsOk = true;

            if(this.state.nameValue.length === 0){
                everythingIsOk = false;
                this.setState({
                    nameError: 'error',
                    messageSend: ''
                })
            }
            else {
                this.setState({
                    nameError: ''
                })
            }
            if(this.state.mailValue.length === 0 || this.state.mailValue.indexOf('@')<0){
                everythingIsOk = false;
                this.setState({
                    mailError: 'error',
                    messageSend: ''
                })

            } else {
                this.setState({
                    mailError: ''
                })
            }

            if(this.state.messageValue.length === 0){
                everythingIsOk = false;
                this.setState({
                    messageError: 'error',
                    messageSend: ''
                })
            } else {
                this.setState({
                    messageError: ''
                })
            }

            if(everythingIsOk){

                this.setState ({
                    nameValue: '',
                    mailValue: '',
                    messageValue: '',
                    nameError: '',
                    mailError: '',
                    messageError: '',
                    messageSend: 'Przesłano wiadomość'
                })
            }

    }


    render() {
        return (
            <div className={'container contact'}>
                <div className={'row'}>
                    <div className={'col-md-8'}>
                        <h2>Formularz kontaktowy</h2>
                        <form>
                            <input className={this.state.nameError}  placeholder={'Imię i nazwisko'} onChange={this.changeHandler} name={'nameValue'} value={this.state.nameValue} type={'text'}/>
                            <input className={this.state.mailError}  placeholder={'Adres email'} onChange={this.changeHandler} name={'mailValue'} value={this.state.mailValue} type={'text'}/>
                            <textarea className={this.state.messageError}  placeholder={'Twoja wiadomość'} onChange={this.changeHandler} name={'messageValue'} value={this.state.messageValue} ></textarea>
                            <button onClick={this.clickHandler}>Wyślij</button>
                            <p>   {this.state.messageSend}</p>
                        </form>
                    </div>
                    <div className={'col-md-4 '}>
                        <h2>Kontakt</h2>
                        <h4>Główny kontakt</h4>
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
                                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC3eGV_MjjhtW1EvnFhlJe9qQISE4RUAeE&v=3.exp&libraries=geometry,drawing,places"
                                loadingElement={<div style={{ height: `100%` }} />}
                                containerElement={<div style={{ height: `30rem` }} />}
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