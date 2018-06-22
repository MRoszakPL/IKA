import React, { Component } from 'react';
import SearchBar from "./searchBar";
import ShopMenu from "./shopBar";
import ListOfProducts from "./listOfProducts"

//Send data with set name and content
function sendData(name, content) {
    localStorage.setItem(name, JSON.stringify( content ) );
}

//Download data with set name
function downloadData(name) {
    return JSON.parse( (localStorage.getItem(name)) ? localStorage.getItem(name) : 0 );
}

function setLanguage(value) {


    switch(value){
        case 'master':
            return  'Master';

        case 'morana':
            return  'Morana';

        case 'package':
            return  'Opakowania';

        case 'bags':
            return  'Reklamówki';

        case 'hygienicArticles':
            return  'Artykuły higeniczne';

        case 'gloves':
            return  'Rękawiczki';

        case 'professionalCleaning':
            return  'Profesjonalne sprzątanie';
    }



}


class MainCategories extends Component{

    constructor(props) {
        super(props);
        this.state ={
            products: [],
            isLoaded: false,
            numOfProducts: (downloadData('numberOfProducts')) ? downloadData('numberOfProducts') : 0,
            sum: (downloadData('sum')) ? downloadData('sum') : '0.00',

        }

    }


    clickHandler = (name, price, count) => {
        console.log(name);
        console.log(price);

        let numberOfProducts = downloadData('numberOfProducts');
        let nameOfProducts = downloadData('nameOfProducts');
        let sum = downloadData('sum');
        let prices = downloadData('prices');
        let numbers = downloadData('numbers');

        numberOfProducts +=Number(count);
        sum += Number(price)*Number(count);
        sum = Math.round(sum * 100) / 100;

        if(nameOfProducts === null){
            nameOfProducts = [];
            nameOfProducts.push(name);
        } else{
            nameOfProducts.push(name);
        }

        if(prices === null){
            prices = [];
            prices.push(Math.round(price * 100) / 100);
        } else{
            prices.push(Math.round(price * 100) / 100);
        }

        if(numbers === null){
            numbers = [];
            numbers.push(count);
        } else{
            numbers.push(count);
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
    }

    componentDidMount() {
        fetch(`http://localhost:3001/products?type=${this.props.match.params.mainTheme}`,{
            method: 'GET',
        }).then( resp => {
            if (resp.ok)
                return resp.json();
            else
                throw new Error('Błąd sieci!');
        }).then( resp => {

            if(resp !== '[]'){
                this.setState({
                    products: resp,
                    isLoaded: true
                })
            }
        }).catch( err => {
            console.log('Błąd!', err);
        });
    }

  x

    render() {
        console.log(this.state.numOfProducts)
        return  (
            <div className={'container Categories'}>
                <div className={'row'}>
                    <SearchBar numofproducts={this.state.numOfProducts} sum={this.state.sum} />
                    <ShopMenu/>
                    <h1>
                        {setLanguage(this.props.match.params.mainTheme)}
                    </h1>
                    { this.state.isLoaded && <ListOfProducts clickFnc={this.clickHandler} products={this.state.products} /> }
                </div>
            </div>
            )

    }

};

export default MainCategories;