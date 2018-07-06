import React, { Component } from 'react';
import {HashRouter,NavLink, withRouter} from 'react-router-dom';

import logo from '../images/logo.png';




const Button = withRouter(({ history }) => (
    <button className={'basketButton'}
            type='button'
            onClick={() => { history.push('/basket') }}>
        Do koszyka
    </button>
))

const SearchInput = withRouter(({ history }) => (
    <input className={'basketButton'}
            type='button'
            onClick={() => { history.push('/basket') }}>
        Do koszyka
    </input>
))

class Basket extends Component{

    render() {

        return (
            <div className={'col-md basket'}>
                <p>{this.props.numberOfProducts>0 || this.props.numberOfProducts != null ? 'Liczba produktów: '+this.props.numberOfProducts : 'Pusto'}</p>
                <p>Koszt {this.props.sum>0 || this.props.sum != null ? this.props.sum : '0.00'} </p>
                <Button />
            </div>
        );
    }
}

class SearchBar extends Component {

    constructor(props){
        super(props);
        this.state = {
            searchValue: ''
        }
    }


    searchInputChangeHandler = (e) => {
        this.setState({
            searchValue: e.currentTarget.value
        })
    }




    pressedKey = (e) => {
         (e.charCode === 13) && this.props.clickFnc(this.state.searchValue);
    }

    clickHandler = () =>{
        this.props.clickFnc(this.state.searchValue);
    }
    render() {

        console.log(this.props)
        return (
            <div className={'row'}>
                <div className={'container searchbar'}>
                    <img className={'col-md'} alt={'logo'} src={logo}/>
                    <div className={'col-md search'}>
                        <input onChange={this.searchInputChangeHandler} placeholder={'Wyszukaj produkt'} type={'text'} value={this.state.searchValue}  onKeyPress={this.pressedKey}/>
                        <button onClick={this.clickHandler}>Szukaj</button>
                    </div>
                    <Basket numberOfProducts={this.props.numofproducts} sum={this.props.sum}/>
                </div>
            </div>
        );
    }

}


export default SearchBar;