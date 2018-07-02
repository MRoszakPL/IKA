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
                        <input  type={'text'} value={this.props.count}/>
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

            item: null,
            value: 0,
            isLoaded: false,
            numOfProducts: (downloadData('numberOfProducts')) ? downloadData('numberOfProducts') : 0,
            sum: (downloadData('sum')) ? downloadData('sum') : '0.00',
        }
    }




    componentDidMount() {
        fetch('http://localhost:3002/products?id='+this.props.match.params.id,
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


    render() {

        return (
            <div>
                <ShopMenu/>
                <div className={'container'}>
                    {this.state.isLoaded && <ProductDescription count={this.state.value} product={this.state.item} />}
                    <button onPress={() => this.props.history.goBack()} title="Go back from this HomeScreen" />
                </div>
            </div>
        );
    }

};

export default Product;