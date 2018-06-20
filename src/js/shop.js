import React, { Component } from 'react';
import logo from '../images/logo.png';
import {
    NavLink
} from 'react-router-dom';



class Basket extends Component{

    render() {
        return (
            <div className={'col-3'}>
                <p>Cena</p>
                <p>Liczba produktów</p>
                <button>Do koszyka</button>
            </div>
        );
    }

}

class SearchBar extends Component {

    render() {
        return (
            <div className={'container searchbar'}>
                <img className={'col-3'} src={logo}/>
                <div className={'col-6'}>
                    <input placeholder={'Wyszukaj produkt'} type={'text'}/>
                    <button>Szukaj</button>
                </div>
                <Basket/>
            </div>
        );
    }

}

class ShopMenu extends Component{

    render() {
        return (
            <div className={'container shopmenu'} >
                <ul>
                    <li><NavLink to={'morana'}>Master</NavLink></li>
                    <li><NavLink to={'morana'}>Morana</NavLink></li>
                    <li><NavLink to={'morana'}>Reklamówki</NavLink></li>
                    <li><NavLink to={'morana'}>Opakowania</NavLink></li>
                    <li><NavLink to={'morana'}>Rękawice</NavLink></li>
                    <li><NavLink to={'morana'}>Artykuły higieniczne</NavLink></li>
                    <li><NavLink to={'morana'}>Profesjonalne sprzątanie</NavLink></li>
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

class NewItems extends Component {

    render() {
        return (
            <div>

            </div>
        );
    }

}


class Shop extends Component{

    render() {
        return (
            <div>
                <SearchBar />
                <ShopMenu />
                <NewItems />
                <ShopList />
            </div>
        );
    }

}

export default Shop;