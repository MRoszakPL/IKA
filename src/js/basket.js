import React, { Component } from 'react';
import {withRouter} from "react-router-dom";


//Send data with set name and conten//t
function sendData(name, content) {
    localStorage.setItem(name, JSON.stringify( content ) );
}

//Download data with set name
function downloadData(name) {
    return JSON.parse( localStorage.getItem(name) );
}
const BackButton = withRouter(({ history }) => (
    <button
            type='button'
            onClick={() => { history.push('/shop') }}>
       Wróć do sklepu
    </button>
))

class Button extends Component{

    render() {
        return (
            <div className={'navButtons'}>
                <BackButton />
                <button >Zapłać</button>
            </div>
        );
    }

}

class LastElement extends Component{
    render() {
        return (
            <li>
                <div className={'row finalCost'}>
                    <p className={'col-4'}>Cena: {this.props.price}</p>
                </div>
            </li>
        );
    }
}

class FirstListElement extends Component{

    render() {
        return (
            <li>
                <div className={'row '}>
                    <p className={'col-4 head'}>Nazwa produktu</p>
                    <p className={'col-2 number'}>Liczba</p>
                    <p className={'col-2 price'}>Cena</p>
                    <p className={'col-2 sum'}>Suma</p>
                </div>
            </li>
        );
    }

}

class ListElement extends Component{

    render() {
        const {name, number, prices} = this.props;
        return (
            <li>
                <div className={'row listElement'}>
                    <p className={'col-4'}>{name}</p>
                    <p className={'col-2'}>{number}</p>
                    <p className={'col-2'}>{prices}</p>
                    <p className={'col-2'}>{number*prices}</p>
                    <button className={'col-1 deleteButton'}>Usuń</button>
                </div>
            </li>
        );
    }

}

class List extends Component{

    constructor(props) {
        super(props);
        this.state = {
            numberOfProducts: downloadData('numberOfProducts'),
            nameOfProducts: downloadData('nameOfProducts'),
            numbers: downloadData('numbers'),
            prices: downloadData('prices'),
            sum: downloadData('sum')
        }
    }


    render() {
        let list = [];
        for(let i = 0; i<this.state.numbers.length; i++){
            list.push(<ListElement key={this.state.nameOfProducts[i]} name={this.state.nameOfProducts[i]} number={this.state.numbers[i]} prices={this.state.prices[i]}/>)
        }
        return (
            <ul>
                <FirstListElement/>
                {list}
                <LastElement price={this.state.sum}/>
            </ul>
        );
    }

}

class Basket extends Component{

    render() {
        return (
            <div className={'basket container '}>
                <List />
                <Button />
            </div>
        );
    }

};

export default Basket;