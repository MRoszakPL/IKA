import React, { Component } from 'react';
import logo from '../images/logo.png';
import {
    NavLink
} from 'react-router-dom';



const newItems = [
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
                    <li><NavLink to={'/shop/master'}>Master</NavLink></li>
                    <li><NavLink to={'/shop/morana'}>Morana</NavLink></li>
                    <li><NavLink to={'/shop/leaflet'}>Reklamówki</NavLink></li>
                    <li><NavLink to={'/shop/package'}>Opakowania</NavLink></li>
                    <li><NavLink to={'/shop/gloves'}>Rękawice</NavLink></li>
                    <li><NavLink to={'/shop/hygienicArticles'}>Artykuły higieniczne</NavLink></li>
                    <li><NavLink to={'/shop/professionalCleaning'}>Profesjonalne sprzątanie</NavLink></li>
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

        let list = this.props.newItems.map((element,index)=>{
            if(index === 0){
                return <NewItem key={index} hide = {' active'} index={index} item={element}/>
            } else {
                return <NewItem key={index} hide = {''} index={index} item={element}/>
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

class NewItem extends Component{

    render() {
        return (

                <div className={'carousel-item'+ this.props.hide}>
                    <NavLink to={'/shop/'+this.props.index}>
                    <div>
                        <img src={'./images/'+this.props.item.src} />

                            <h5>Cena {this.props.item.price}</h5>
                            <p>{this.props.item.name}</p>

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
                <SearchBar />
                <ShopMenu />
                <NewItems newItems={newItems}/>
                <ShopList />
            </div>
        );
    }

}

export default Shop;