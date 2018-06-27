import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class ProductElement extends Component{


    constructor(props) {
        super(props);
        this.state ={
            count: 0,
            price: this.props.product.price,
            name: this.props.product.name
        }
    }


    clickHandler = () =>{
        this.props.clickFnc(this.state.name, this.state.price,  this.state.count);
        this.setState ({
            count: 0
        })
    }

    changeValue = (e) => {
        if(e.currentTarget.name === 'plus'){
            this.setState({
                count: this.state.count + 1
            })
        } else {
            if(this.state.count>0){
                this.setState({
                    count: this.state.count - 1
                })
            }
        }
    }



    render() {

        return (
            <li className={'row '}>
                <NavLink className={'row productElement'} to={'/product/'+this.props.product.id}>
                    <div className={'col-md-8 productImage'}>
                        <img alt={this.props.product.name} src={'./images/'+this.props.product.src}/>
                    </div>
                    <div className={'col-md-4 productText'}>
                        <h2>{this.props.product.name}</h2>
                        <p>Cena {this.props.product.price}</p>

                        <div>
                            <button onClick={this.changeValue} name={'minus'} className={'operation'}>-</button>
                            <input  type={'text'} value={this.state.count}/>
                            <button  onClick={this.changeValue} name={'plus'} className={'operation'}>+</button>
                        </div>
                        <button onClick={this.clickHandler}>Dodaj do koszyka</button>
                    </div>
                </NavLink>
            </li>
        );
    }

}

class ListOfProducts extends Component{

    render() {

        let list = this.props.products.map((element, index)=>{
            return <ProductElement  clickFnc={this.props.clickFnc} key={element.name} product={element}/>
        })

        return (
            <ul className={'listOfProducts'}>
                {list}
            </ul>
        );
    }

}



export default ListOfProducts;