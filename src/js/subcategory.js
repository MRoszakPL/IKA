import React, { Component } from 'react';
import SearchBar from "./searchBar";
import ShopMenu from "./shopBar";
import ListOfProducts from "./listOfProducts"


//Send data with set name and conten//t
function sendData(name, content) {
    localStorage.setItem(name, JSON.stringify( content ) );
}

//Download data with set name
function downloadData(name) {
    return JSON.parse(localStorage.getItem(name));
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

class SubCategory extends Component{

    constructor(props) {
        super(props);
        this.state ={
            products: [],
            isLoaded: false,
            numOfProducts: (downloadData('numberOfProducts')) ? downloadData('numberOfProducts') : 0,
            sum: (downloadData('sum')) ? downloadData('sum') : '0.00',
            name : this.props.match.params.product,
            main: setLanguage(this.props.match.params.mainTheme)
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
        console.log(this.props.match.params.product);
        console.log(this.props.match.params.mainTheme);

        fetch(`http://localhost:3001/products?type=${this.props.match.params.mainTheme}&category=${this.props.match.params.product}`,{
            method: 'GET',
        }).then( resp => {
            if (resp.ok)
                return resp.json();
            else
                throw new Error('Błąd sieci!');
        }).then( resp => {
            console.log(resp);
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

    changeSiteHandler = (mainCategory, subcategory, name, main) =>{

        console.log(mainCategory);
        console.log(subcategory);
        fetch(`http://localhost:3001/products?type=${mainCategory}&category=${subcategory}`,{
            method: 'GET',
        }).then( resp => {
            if (resp.ok)
                return resp.json();
            else
                throw new Error('Błąd sieci!');
        }).then( resp => {
            console.log(resp);
            if(resp !== '[]'){

                console.log(this.state.isLoaded)
                this.setState({
                    products: resp,
                    isLoaded: true,
                    name: name,
                    main: main
                })
            }
        }).catch( err => {
            console.log('Błąd!', err);
        });
    }


    render() {
        return (
            <div className={'container Categories'}>
                <div className={'row'}>
                <SearchBar  numofproducts={downloadData('numberOfProducts')} sum={downloadData('sum')} />
                <ShopMenu clickFnc={this.changeSiteHandler}/>
                <h1>
                    {this.state.main} - {this.state.name}
                </h1>
                    { this.state.isLoaded && <ListOfProducts clickFnc={this.clickHandler} products={this.state.products} /> }
                </div>
            </div>
        );
    }

}



export default SubCategory;