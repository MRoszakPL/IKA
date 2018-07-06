import React, { Component } from 'react';
import ShopMenu from "./shopBar";
import SearchBar from "./searchBar";

//Send data with set name and content
function sendData(name, content) {
    localStorage.setItem(name, JSON.stringify( content ) );
}

//Download data with set name
function downloadData(name) {
    return JSON.parse( (localStorage.getItem(name)) ? localStorage.getItem(name) : 0 );
}

class ProductDescription extends Component{

    constructor(props) {
        super(props);
        this.state ={
            count: 0,
            price: this.props.product[0].price,
            name: this.props.product[0].name
        }
    }


    clickHandler = () =>{
        this.props.clickFnc(this.state.name, this.state.price,  this.state.count);
        this.setState ({
            count: 0
        })
    }

    changeValue = (e) => {
        if(e.currentTarget.name === 'plus'){
            this.setState({
                count: this.state.count + 1
            })
        } else {
            if(this.state.count>0){
                this.setState({
                    count: this.state.count - 1
                })
            }
        }
    }

    render() {
        console.log(this.props.product[0].src)
        return (
            <div className={'row productElement'}>
                <div className={'col-md-8 productImage'}>
                    <img alt={this.props.product[0].name} src={'./images/'+this.props.product[0].src}/>
                </div>
                <div className={'col-md-4 productText'}>
                    <h2>{this.props.product[0].name}</h2>
                    <p>Cena {this.props.product[0].price}</p>

                    <div>
                        <button onClick={this.changeValue} name={'minus'} className={'operation'}>-</button>
                        <input  type={'text'} value={this.state.count}/>
                        <button  onClick={this.changeValue} name={'plus'} className={'operation'}>+</button>
                    </div>
                    <button onClick={this.clickHandler}>Dodaj do koszyka</button>
                </div>
                <div>
                    <h2>Opis</h2>
                    <p>{this.props.product[0].description}</p>
                </div>

            </div>
        );
    }


}

class Product extends Component{


    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            item: null,
            value: 0,
            isLoaded: false,
            numOfProducts: (downloadData('numberOfProducts')) ? downloadData('numberOfProducts') : 0,
            sum: (downloadData('sum')) ? downloadData('sum') : '0.00',
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
        fetch('http://localhost:3002/products?id='+this.state.id,
            {
                method: 'GET'
            }).then( resp => {
            if (resp.ok)
                return resp.json();
            else
                throw new Error('Błąd sieci!');
        }).then( resp => {
            if(resp !== '[]'){
              console.log(resp)
                this.setState({
                    item: resp,
                    value: 0,
                    isLoaded: true
                })
            }

        }).catch( err => {
            console.log('Błąd!', err);
        });
    }
    searchButtonHandler = (value) => {this.props.history.push(`/search/${value}`)};

    render() {
        return (
            <div>
                <SearchBar clickFnc={this.searchButtonHandler} numofproducts={this.state.numOfProducts} sum={this.state.sum} />
                <ShopMenu/>
                <div className={'container'}>
                    <div className={'productContainer'} >
                        {this.state.isLoaded && <ProductDescription count={this.state.value} clickFnc={this.clickHandler} product={this.state.item} /> }
                        <button className={'backButton'} onClick={() => this.props.history.goBack()}>Wróć do sklepu</button>
                    </div>
                </div>
            </div>
        );
    }
};

export default Product;