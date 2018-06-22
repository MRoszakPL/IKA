import React, { Component } from 'react';




class Head extends Component{


    render() {

        console.log(this.props.item);
        return (
            <li className={'head'}>
                <div>
                <p className={'col-2'}>Numer</p>
                <p className={'col-2'}>Liczba produktów</p>
                <p className={'col-2'}>Koszt</p>
                </div>
            </li>
        );
    }

}

class Order extends Component{


    constructor(props) {
        super(props);
        this.state = {
            hidden: 'invisible',
            unhidden: ''
        }
    }

    clickHandler = () => {
        if(this.state.hidden === ''){
            this.setState({
                hidden: 'invisible',
                unhidden: ''
            })
        } else {
            this.setState({
                hidden: '',
                unhidden: 'invisible'
            })
        }
    }

    render() {

        let list = [];
        console.log(this.props.item.name)
        for(let i = 0; i<this.props.item.name.length; i++){
            list.push(<li>
                <p className={'col-2'}>{i+1}</p>
                <p className={'col-3'}>{this.props.item.name[i]}</p>
                <p className={'col-2'}>{this.props.item.numbers[i]}</p>
                <p className={'col-2'}>{this.props.item.prices[i]}</p>
                <p className={'col-2'}>{this.props.item.prices[i]*this.props.item.numbers[i]}</p>
            </li>)
        }

        return (
            <li  className={'listElement'} onClick={this.clickHandler}>

                <div className={this.state.unhidden}>
                    <p className={'col-2'}>{this.props.number+1}</p>
                    <p className={'col-2'}>{this.props.item.numberOfProducts}</p>
                    <p className={'col-2'}>{this.props.item.sum}</p>
                </div>
                <ul className={this.state.hidden}>
                    <li>
                        <p className={'col-2'}>{'Nr pozycji'}</p>
                        <p className={'col-3'}>{'Nazwa produktu'}</p>
                        <p className={'col-2'}>{'Liczna sztuk'}</p>
                        <p className={'col-2'}>{'Cena jednostkowa'}</p>
                        <p className={'col-2'}>{'Cena'}</p>
                    </li>
                    {list}
                    <li>
                        <p className={'col-2'}>Sumagit</p>
                        <p className={'col-3'}></p>
                        <p className={'col-2'}></p>
                        <p className={'col-2'}></p>
                        <p className={'col-2'}>{this.props.item.sum}</p>
                    </li>
                </ul>
            </li>
        );
    }

}


class OrdersList extends Component{

    render() {
        console.log(this.props.items);
        let list = this.props.items.map((element, index)=>{
            return <Order key={index} number={index} item={element} />
        })
        return (
            <ul>
                <Head />
                {list}
            </ul>
        );
    }
}

class Orders extends Component{

    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            isLoaded: false
        }
    }


    componentDidMount() {

        fetch(`http://localhost:3001/order/`, {
            method: 'GET', // or 'PUT'
        }).then( resp => {
            if (resp.ok)
                return resp.text();
            else
                throw new Error('Błąd sieci!');
        }).then((resp) => {
           this.setState ({
               orders: JSON.parse(resp),
               isLoaded: true
           })
        }).catch( err => {
            console.log('Błąd!', err);
        });

    }


    render() {
        return (
            <div className={'orders container'}>
                <h1>Twoje zamówienia</h1>
                {(this.state.isLoaded) && <OrdersList items={this.state.orders} />}
            </div>
        );
    }

}

export default Orders