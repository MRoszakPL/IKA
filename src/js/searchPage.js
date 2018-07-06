import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import ShopMenu from './shopBar.js';
import SearchBar from './searchBar.js';
import ListOfProducts from "./listOfProducts";


//Send data with set name and content
function sendData(name, content) {
    localStorage.setItem(name, JSON.stringify( content ) );
}

//Download data with set name
function downloadData(name) {
    return JSON.parse( (localStorage.getItem(name)) ? localStorage.getItem(name) : 0 );
}


class searchPage extends Component{

    constructor(props) {
        super(props);
        this.state = {
            numOfProducts: (downloadData('numberOfProducts')>0) ? downloadData('numberOfProducts') : 'Pusto',
            sum: (downloadData('sum')) ? downloadData('sum') : '0.00',

        }
    }


    searchButtonHandler = (value) => {

        fetch(`http://localhost:3002/products`,{
            method: 'GET',
        }).then( resp => {
            if (resp.ok)
                return resp.json();
            else
                throw new Error('Błąd sieci!');
        }).then( resp => {
            if(resp !== '[]'){
                let result = [];
                for(var item of resp){
                    if(item.name.toUpperCase().includes(value.toUpperCase())) {
                        result.push(item);
                    }
                }
                this.setState({
                    products: result,
                    isLoaded: true,
                    searched: true,
                    searchValue: value
                })
            }

        }).catch( err => {
            console.log('Błąd!', err);
        });

    }

    render() {

        return (
            <div className={'shop'}>
                <SearchBar clickFnc={this.searchButtonHandler} numofproducts={this.state.numOfProducts} sum={this.state.sum} />
                <ShopMenu />
                <div className={'container'}>
                   <h1>Wynik wyszukania dla: {this.props.match.params.searchValue} </h1>
                </div>
            </div>
        );
    }

}

export default searchPage;

