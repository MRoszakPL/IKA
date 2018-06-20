import React, { Component } from 'react';
import logo from '../images/logo.png';
import {
    NavLink
} from 'react-router-dom';



const newProducts = [
    {
        name: 'Rękawice nitrylowe Aloes',
        price: '3.30',
        src: 'nitryloweAloes.jpg'
    },
    {
        name: 'Papier do pieczenia',
        price: '4.09',
        src: 'papierdopieczenia.jpg'
    },
    {
        name: 'Mop z mikrofibry',
        price: '5.29',
        src: 'mopzmikrofibry.jpg'
    },
    {
        name: 'Worki na śmieci',
        price: '6.49',
        src: 'workinasmieci.jpg'
    },
    {
        name: 'Ścierka z mikrofibry',
        price: '2.30',
        src: 'scierkazmikrofibry.jpg'
    },
    {
        name: 'Ścierki MORANA',
        price: '10.20',
        src: 'scierkiMorana.jpg'
    },
]
let numberOfProducts = 10;
let sum = 142.32;

class Basket extends Component{

    render() {
        return (
            <div className={'col-md basket'}>
                <p>Liczba produktów {this.props.numberOfProducts}</p>
                <p>Koszt {this.props.sum}</p>
                <button className={'basketButton'}>Do koszyka</button>
            </div>
        );
    }

}

class SearchBar extends Component {

    render() {
        return (
            <div className={'row'}>
                <div className={'container searchbar'}>
                    <img className={'col-md'} alt={'logo'} src={logo}/>
                    <div className={'col-md search'}>
                        <input placeholder={'Wyszukaj produkt'} type={'text'}/>
                        <button>Szukaj</button>
                    </div>
                    <Basket numberOfProducts={this.props.numberOfProducts} sum={this.props.sum}/>
                </div>
            </div>
        );
    }

}

class ShopMenu extends Component{

    render() {
        return (
            <div className={'container shopmenu'} >
                <ul>
                    <li className={'col-sm'}><NavLink to={'/shop/master'}>Master</NavLink></li>
                    <li className={'col-sm'}><NavLink to={'/shop/morana'}>Morana</NavLink></li>
                    <li className={'col-sm'}><NavLink to={'/shop/leaflet'}>Reklamówki</NavLink></li>
                    <li className={'col-sm'}><NavLink to={'/shop/package'}>Opakowania</NavLink></li>
                    <li className={'col-sm'}><NavLink to={'/shop/gloves'}>Rękawice</NavLink></li>
                    <li className={'col-sm'}><NavLink to={'/shop/hygienicArticles'}>Artykuły higieniczne</NavLink></li>
                    <li className={'col-sm'}><NavLink to={'/shop/professionalCleaning'}>Profesjonalne sprzątanie</NavLink></li>
                </ul>
            </div>
        );
    }

}

class ShopList extends Component{
    render() {
        return (
            <div>

            </div>
        );
    }
}

class ShopItem extends Component {
    render() {
        return (
            <div>

            </div>
        );
    }
}

class NewProducts extends Component {

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
                <NavLink to={'/shop/'+this.props.index}>
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

    render() {
        return (
            <div className={'shopPage'}>
                <SearchBar numberOfProducts={numberOfProducts} sum={sum} />
                <ShopMenu />
                <NewProducts items={newProducts}/>
                <ShopList />
            </div>
        );
    }

}

export default Shop;