import React, { Component } from 'react';


//Send data with set name and conten//t
function sendData(name, content) {
    localStorage.setItem(name, JSON.stringify( content ) );
}

//Download data with set name
function downloadData(name) {
    return JSON.parse( localStorage.getItem(name) );
}


class FirstListElement extends Component{

    render() {
        return (
            <li>
                <div className={'firstRow'}>
                    <p>Produkt</p>
                    <p>Liczba</p>
                    <p>Cena</p>
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
                <div>
                    <p>{name}</p>
                    <p>{number}</p>
                    <p>{prices}</p>
                    <p>{number*prices}</p>
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
            list.push(<ListElement name={this.state.nameOfProducts[i]} number={this.state.numbers[i]} prices={this.state.prices[i]}/>)
        }
        return (
            <ul>
                <FirstListElement/>
                {list}
            </ul>
        );
    }

}


class Basket extends Component{

    render() {
        return (
            <div>

                <List />
            </div>
        );
    }

};

export default Basket;