import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import PropTypes from 'prop-types'

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


class Buttons extends Component{



    clickHandler =(e)=>{
        this.props.paymentFnc(e)
    }

    render() {
        return (
            <div className={'navButtons'}>
                <BackButton />
                <button onClick={this.clickHandler}>Zapłać</button>
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


    constructor(props) {
        super(props);
        this.state = {
            value: this.props.number
        }
    }

    clickHandler = (e) =>{
        let number = 0;
        let numberOfProducts = downloadData('numberOfProducts');
        let num = downloadData('numbers');



        if(e.currentTarget.name === 'minus'){
            if(this.state.value>0){
                number = this.state.value-1;
                numberOfProducts = numberOfProducts -1;
                num[e.currentTarget.id] =  num[e.currentTarget.id] -1;

                this.props.clickFnc(-this.props.prices)
            } else {
                number = 0;
            }
        } else {
            number = this.state.value+1;
            numberOfProducts = numberOfProducts+1;
            num[e.currentTarget.id] =  num[e.currentTarget.id] + 1;

            this.props.clickFnc(this.props.prices)
        }

        this.setState({
            value: number
        })

        sendData('numberOfProducts', numberOfProducts);
        sendData('numbers', num);


    }

    deleteItem = (e) =>{
      this.props.deleteFnc(e);
    }

    render() {
        const {name, prices} = this.props;
        return (
            <li>
                <div className={'row listElement'}>
                    <p className={'col-4'}>{name}</p>
                    <p className={'col-2'}><button className={'operationMinus'} id = {this.props.id} onClick={this.clickHandler} name={'minus'}>-</button><input type={'text'} value={this.state.value}/><button  onClick={this.clickHandler} className={'operationAdd'} id = {this.props.id} name={'plus'}>+</button></p>
                    <p className={'col-2'}>{prices}</p>
                    <p className={'col-2'}>{(Math.round((this.state.value*prices) * 100) / 100)}</p>
                    <button id = {name} className={'col-1 deleteButton'} onClick={this.deleteItem}>Usuń</button>
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

    deleteElement =(e) =>{
        let nameOfProducts = downloadData('nameOfProducts');
        let prices = downloadData('prices');
        let count = downloadData('numbers');
        let sum = downloadData('sum');
        let numberOfProducts = downloadData('numberOfProducts');

        let index = nameOfProducts.indexOf(e.currentTarget.id);
        let counter = count.splice(index, 1);
        nameOfProducts.splice(index, 1);
        sum = sum - (counter * prices.splice(index, 1));
        console.log(sum);
        console.log(counter);
        sendData('nameOfProducts', nameOfProducts);
        sendData('numberOfProducts', numberOfProducts- counter);
        sendData('numbers', count);
        sendData('prices', prices);
        sendData('sum', (Math.round(Number(sum) * 100) / 100));
        this.setState({
            numberOfProducts: numberOfProducts-counter,
            nameOfProducts: nameOfProducts,
            numbers: count,
            prices:prices,
            sum: (Math.round(Number(sum) * 100) / 100)
        })
    }

    clickHandler = (value) => {
        this.setState({
            sum: Math.round((Number(this.state.sum) + Number(value)) * 100) / 100
        })

        sendData('sum', Math.round((Number(this.state.sum) + Number(value)) * 100) / 100);
    }

    payment = (e) => {

        e.preventDefault();

        let data = {
            name: this.state.nameOfProducts,
            numberOfProducts: this.state.numberOfProducts,
            numbers: this.state.numbers,
            prices: this.state.prices,
            sum: this.state.sum,
            pay: false
        }

        fetch(`http://localhost:3001/order`, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers:{'Content-Type': 'application/json'}
        }).then( resp => {
            if (resp.ok)
                return resp.text();
            else
                throw new Error('Błąd sieci!');
        }).then( () => {
            sendData('nameOfProducts',[]);
            sendData('numberOfProducts',0);
            sendData('numbers',[]);
            sendData('prices',[]);
            sendData('sum',0);
            this.setState({
                pay: true
            })
        }).catch( err => {
            console.log('Błąd!', err);
        });


    };

    static contextTypes = {
        router: PropTypes.object
    };

    redirect(value){
        if(value){
            this.context.router.history.push(`/shop`)
        }
    }
    render() {
        let list = [];
        for(let i = 0; i<this.state.numbers.length; i++){
            list.push(<ListElement clickFnc={this.clickHandler} deleteFnc={this.deleteElement} key={this.state.nameOfProducts[i]} id={i} name={this.state.nameOfProducts[i]} number={this.state.numbers[i]} prices={this.state.prices[i]}/>)
        }
        return (
            <div>
                <ul>
                    <FirstListElement/>
                    {list}
                    <LastElement price={this.state.sum}/>
                </ul>
                <Buttons paymentFnc={this.payment}/>
                {this.redirect(this.state.pay)}
            </div>
        );
    }

}

class Basket extends Component{

    render() {
        return (
            <div className={'basket container '}>
                <List />
            </div>
        );
    }
}

export default Basket;