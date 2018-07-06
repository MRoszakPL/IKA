import React, { Component } from 'react';
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
            isLoaded: false,
            products: []
        }
    }

    componentDidMount() {
        this.search(this.props.match.params.searchValue);
    }

    search = (value) => {
        console.log(value)
        this.setState({
            products: [],
            isLoaded: false
        })

        fetch(`http://localhost:3002/products`,{
            method: 'GET',
        }).then( resp => {
            if (resp.ok)
                return resp.json();
            else
                throw new Error('Błąd sieci!');
        }).then( resp => {
            console.log(resp)
            if(resp !== '[]'){
                let result = [];
                for(var item of resp){
                    if(item.name.toUpperCase().includes(value.toUpperCase())) {
                        result.push(item);
                    }
                }
                this.setState({
                    products: result,
                    isLoaded: true
                })
            } else {
                this.setState({
                    products: [],
                    isLoaded: true
                })

            }

        }).catch( err => {
            console.log('Błąd!', err);
        });

    }

    searchButtonHandler = (value) => {
        this.props.history.push(`/search/${value}`);
        this.search(value)
    };

    clickHandler = (name, price, count) => {

        let numberOfProducts = downloadData('numberOfProducts');
        let nameOfProducts = downloadData('nameOfProducts');
        let sum = downloadData('sum');
        let prices = downloadData('prices');
        let numbers = downloadData('numbers');

        numberOfProducts +=Number(count);
        sum += Number(price)*Number(count);
        sum = Math.round(sum * 100) / 100;

        if(nameOfProducts === null || nameOfProducts === 0){
            nameOfProducts = [];
            nameOfProducts.push(name);
            numbers = [];
            numbers.push(count);
            prices = [];
            prices.push(Math.round(price * 100) / 100);

        } else{
            let index = nameOfProducts.indexOf(name);
            if(index>=0){
                numbers[index] += count;
            } else {
                nameOfProducts.push(name);
                numbers.push(count);
                prices.push(Math.round(price * 100) / 100);
            }

        }

        sendData('numberOfProducts', numberOfProducts);
        sendData('nameOfProducts', nameOfProducts);
        sendData('prices', prices);
        sendData('sum', sum);
        sendData('numbers', numbers);

        this.setState({
            numOfProducts: numberOfProducts,
            sum: sum
        })
    };

    render() {

        return (
            <div className={'shop'}>
                <SearchBar clickFnc={this.searchButtonHandler} numofproducts={this.state.numOfProducts} sum={this.state.sum} />
                <ShopMenu />
                <div className={'container'}>
                   <h1>Wynik wyszukania dla: {this.props.match.params.searchValue} </h1>
                    { this.state.isLoaded && <ListOfProducts clickFnc={this.clickHandler} products={this.state.products} /> }
                </div>
            </div>
        );
    }

}

export default searchPage;

