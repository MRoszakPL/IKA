import React, { Component } from 'react';


class Product extends Component{

    render() {
        return <h1>
            Info about User with ID: {this.props.match.params.mainTheme}
            :::{this.props.match.params.product}
        </h1>;
    }

};

export default Product;