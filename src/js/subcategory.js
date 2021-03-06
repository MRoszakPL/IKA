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
    return JSON.parse(localStorage.getItem(name));
}

function translateMainCategory(value) {

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

function translateSubCategory(value) {

    switch(value){
        case 'folia':
            return 'Folia aluminiowa';
        case 'gastronomy':
            return "Gastronomia";
        case 'masterMops':
            return "Mopy i zestawy kąpielowe";
        case 'papers':
            return "Papiery";
        case 'gloves':
            return "Rękawice";
        case 'ropes':
            return "Sznury i linki do prania";
        case 'wiper':
            return "Ścierki";
        case 'mops':
            return "Mopy";
        case 'scourer':
            return "Druciaki";
        case 'dishrag':
            return "Zmywaki";
        case 'forGastronomy':
            return "Dla gastronomii";
        case 'forPackages':
            return "Taśmy pakowe";
        case 'forHome':
            return "Gospodarcze";
        case 'forHospital':
            return "Diagnostyczne";
        case 'oneUse':
            return "Jednorazowe";
        case 'forWork':
            return "Robocze";
        default:
            return value;
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
            name : translateSubCategory(this.props.match.params.product),
            main: translateMainCategory(this.props.match.params.mainTheme),
        }

    }

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
    }

    componentDidMount() {

        fetch(`http://localhost:3002/products?type=${this.props.match.params.mainTheme}&category=${this.props.match.params.product}`,{
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
                    isLoaded: true,
                    searched: false
                })
            }
        }).catch( err => {
            console.log('Błąd!', err);
        });
    }

    changeSiteHandler = (mainCategory, subcategory, name, main) =>{

        fetch(`http://localhost:3002/products?type=${mainCategory}&category=${subcategory}`,{
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
                    isLoaded: true,
                    name: name,
                    main: main
                })
            }
        }).catch( err => {
            console.log('Błąd!', err);
        });
    }

    searchButtonHandler = (value) => {this.props.history.push(`/search/${value}`)};

    render() {
        return (
            <div className={'container shop'}>
                <div className={'row'}>
                <SearchBar clickFnc={this.searchButtonHandler} numofproducts={downloadData('numberOfProducts')} sum={downloadData('sum')} />
                <ShopMenu clickFnc={this.changeSiteHandler}/>
                <h1>
                    {`${this.state.main} - ${this.state.name}`}
                </h1>
                    { this.state.isLoaded && <ListOfProducts clickFnc={this.clickHandler} products={this.state.products} /> }
                </div>
            </div>
        );
    }

}

export default SubCategory;