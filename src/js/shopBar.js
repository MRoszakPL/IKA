import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

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



export default ShopMenu;