import React, { Component } from 'react';
import SearchBar from "./searchBar";
import ShopMenu from "./shopBar";


//Send data with set name and conten//t
function sendData(name, content) {
    localStorage.setItem(name, JSON.stringify( content ) );
}

//Download data with set name
function downloadData(name) {
    return JSON.parse( localStorage.getItem(name) );
}


class ProductElement extends Component{


    constructor(props) {
        super(props);
        this.state ={
            count: 0,
            price: this.props.product.price,
            name: this.props.product.name
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

        return (
            <li className={'row productElement'}>
                    <div className={'col-md-8 productImage'}>
                    <img src={'./images/'+this.props.product.src}/>
                    </div>
                    <div className={'col-md-4 productText'}>
                        <h2>{this.props.product.name}</h2>
                        <p>Cena {this.props.product.price}</p>

                        <div>
                            <button onClick={this.changeValue} name={'minus'} className={'operation'}>-</button>
                            <input  type={'text'} value={this.state.count}/>
                            <button  onClick={this.changeValue} name={'plus'} className={'operation'}>+</button>
                        </div>
                        <button onClick={this.clickHandler}>Dodaj do koszyka</button>
                    </div>
            </li>
        );
    }

}

class ListOfProducts extends Component{

    render() {

        let list = this.props.products.map((element, index)=>{
            return <ProductElement clickFnc={this.props.clickFnc} key={index} product={element}/>
        })

        return (
            <ul className={'listOfProducts'}>
                {list}
            </ul>
        );
    }

}

class MainCategories extends Component{

    constructor(props) {
        super(props);
        this.state ={
            products: [],
            isLoaded: false,
            numberOfProducts: (downloadData('numberOfProducts')) ? downloadData('numberOfProducts') : 0,
            sum: (downloadData('sum')) ? downloadData('sum') : '0.00'
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
            prices.push(price);
        } else{
            prices.push(price);
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
            numberOfProducts: numberOfProducts,
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

    render() {
        console.log(this.state.numberOfProducts)
        return  (
            <div className={'container mainCategories'}>
                <div className={'row'}>
                    <SearchBar numofproducts={this.state.numberOfProducts} sum={this.state.sum} />
                    <ShopMenu/>
                    <h1>
                        {this.props.match.params.mainTheme}
                    </h1>
                    { this.state.isLoaded && <ListOfProducts clickFnc={this.clickHandler} products={this.state.products} /> }
                </div>
            </div>
            )

    }

};

export default MainCategories;