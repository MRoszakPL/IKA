import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import ShopMenu from './shopBar.js';
import SearchBar from './searchBar.js';

//Download data with set name
function downloadData(name) {
    return JSON.parse( localStorage.getItem(name));
}

const Products = [
    {
        "id": 1,
        "name": "Rękawice nitrylowe Aloes",
        "price": "3.30",
        "src": "nitryloweAloes.jpg",
    },
    {
        "id": 2,
        "name": "Papier do pieczenia",
        "price": "4.09",
        "src": "papierdopieczenia.jpg",
    },
    {
        "id": 3,
        "name": "Mop z mikrofibry",
        "price": "5.29",
        "src": "mopzmikrofibry.jpg",
    },
    {
        "id": 4,
        "name": "Worki na śmieci",
        "price": "6.49",
        "src": "workinasmieci.jpg",
    },
    {
        "id": 5,
        "name": "Ścierka z mikrofibry",
        "price": "2.30",
        "src": "scierkazmikrofibry.jpg",
        "type": "master",
    },
    {
        "id": 6,
        "name": "Ścierki MORANA",
        "price": "10.20",
        "src": "scierkiMorana.jpg",
    }
];

class NewProductsCarousel extends Component {

    render() {

        let list = this.props.items.map((element,index)=>{
            if(index === 0){
                return <NewProduct key={index} hide = {' active'} index={index} item={element}/>
            } else {
                return <NewProduct key={index} hide = {''} index={index} item={element}/>
            }

        });

        return (
            <div className="container">

                <div id={'newProducts'} className={'carousel slide'} data-ride={'carousel'} data-interval={5000}>
                    <h2>Nowości</h2>
                    <ul className={'carousel-indicators'}>
                        <li data-target="#newProducts" data-slide-to="0" className="active"></li>
                        <li data-target="#newProducts" data-slide-to="1"></li>
                        <li data-target="#newProducts" data-slide-to="2"></li>
                        <li data-target="#newProducts" data-slide-to="3"></li>
                        <li data-target="#newProducts" data-slide-to="4"></li>
                        <li data-target="#newProducts" data-slide-to="5"></li>
                    </ul>

                    <div className={'carousel-inner'}>
                        {list}
                    </div>

                    <a className="carousel-control-prev" href="#newProducts" data-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </a>
                    <a className="carousel-control-next" href="#newProducts" data-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </a>

                </div>
            </div>
        );
    }

}

class NewProduct extends Component{



    render() {

        return (
            <div className={'carousel-item'+ this.props.hide}>
                <NavLink to={'/product/'+this.props.item.id}>
                    <div>
                        <img src={'./images/'+this.props.item.src} alt={this.props.item.name}/>
                        <h5> {this.props.item.name}</h5>
                        <p>Cena {this.props.item.price}</p>
                    </div>
                </NavLink>
            </div>
        );
    }

}

class Shop extends Component{

    constructor(props) {
        super(props);
        this.state = {
            numOfProducts: (downloadData('numberOfProducts')>0) ? downloadData('numberOfProducts') : 'Pusto',
            sum: (downloadData('sum')) ? downloadData('sum') : '0.00',
            products: [],
        }
    }


    componentDidMount() {
        this.setState ({
            numOfProducts: (downloadData('numberOfProducts') > 0) ? downloadData('numberOfProducts') : 'Pusto',
            sum: (downloadData('sum')) ? downloadData('sum') : '0.00'
        })
    }

    searchButtonHandler = (value) => {this.props.history.push(`/search/${value}`)};

    render() {

        console.log(this.state.products.length)
        return (
            <div className={'shop'}>
                <SearchBar clickFnc={this.searchButtonHandler} numofproducts={this.state.numOfProducts} sum={this.state.sum} />
                <ShopMenu />
                <div className={'container'}>
                    <NewProductsCarousel items={Products}/>
                </div>
            </div>
        );
    }

}

export default Shop;