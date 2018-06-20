import React, { Component } from 'react';
import logo from '../images/logo.png';
import {
    NavLink, withRouter
} from 'react-router-dom';


//Download data with set name
function downloadData(name) {
    return JSON.parse( localStorage.getItem(name));
}

const items =[
    {
        mainTheme: 'Master',
        name: ['Folia aluminiowa', 'Gastronomia', 'Mopy i zestawy kąpielowe', 'Papiery', 'Rękawice',  'Sznury i linki do prania'],
        value: ['folia', 'gastronomy', 'mops', 'papers', 'gloves', 'ropes']
    },{
        mainTheme: 'Morana',
        name: ['Ścierki', 'Mopy', 'Druciaki', 'Zmywaki'],
        value: ['wiper', 'mops', 'scourer', 'dishrag']

    },{
        mainTheme: 'Reklamówki',
        name: ['HDPE', 'HDTS', 'LDTS'],
        value: ['HDPE', 'HDTS', 'LDTS']

    },{
        mainTheme: 'Opakowania',
        name: ['Dla gastronomii', 'Taśmy pakowe'],
        value: ['forGastronomy', 'forPackages']
    },{
        mainTheme: 'Rękawice',
        name: ['Gospodarcze','Diagnostyczne', 'Jednorazowe', 'Robocze'],
        value: ['forHome', 'forHospital', 'oneUse', 'forWork']

    },{
        mainTheme: 'Artykuły higieniczne',
        name: ['Katrin', 'Metssa Tissue'],
        value: ['katrin', 'metssaTissue']

    },{
        mainTheme: 'Profesjonalne sprzątanie',
        name: ['JohnsonDiversey',  'Voigt'],
        value: ['johnsonDiversey', 'voigt']
    }
];
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
];
let numberOfProducts = '33';
let sum = '332';

const Button = withRouter(({ history }) => (
    <button className={'basketButton'}
        type='button'
        onClick={() => { history.push('/basket') }}
    >
        Do koszyka
    </button>
))

class Basket extends Component{

    render() {
        return (
            <div className={'col-md basket'}>
                <p>{this.props.numberOfProducts>0 ? 'Liczba produktów '+this.props.numberOfProducts : 'Pusto'}</p>
                <p>Koszt {this.props.sum}</p>
                <Button />
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
                    <Basket numberOfProducts={(downloadData('numberOfProducts')) ? downloadData('numberOfProducts') : 0} sum={ (downloadData('sum')) ? downloadData('sum') : '0.00' }/>
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
                    <ShopMenuElement urlValue = {'master'} name={items[0].mainTheme} items={items[0]}/>
                    <ShopMenuElement urlValue = {'morana'} name={items[1].mainTheme} items={items[1]}/>
                    <ShopMenuElement urlValue = {'bags'} name={items[2].mainTheme} items={items[2]}/>
                    <ShopMenuElement urlValue = {'package'} name={items[3].mainTheme} items={items[3]}/>
                    <ShopMenuElement urlValue = {'gloves'} name={items[4].mainTheme} items={items[4]}/>
                    <ShopMenuElement urlValue = {'hygienicArticles'} name={items[5].mainTheme} items={items[5]}/>
                    <ShopMenuElement urlValue = {'professionalCleaning'} name={items[6].mainTheme} items={items[6]}/>
                </ul>
            </div>
        );
    }

}

class ShopMenuElement extends Component{

    render() {

        const {name, value} = this.props.items;
        let list = [];
        for(let i = 0; i< name.length; i++) {
            list.push(<NavLink key={name[i]} to={'/shop/' + this.props.urlValue + '/' + value[i]}>{name[i]}</NavLink>)
        }
        return (
            <li className={'col-sm'}>
                <div className="dropdown">
                    <button className="dropbtn">{this.props.name}</button>
                    <div className="dropdown-content">
                        {list}
                    </div>
                </div>
            </li>
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

// class ShopItem extends Component {
//     render() {
//         return (
//             <div>
//
//             </div>
//         );
//     }
// }

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