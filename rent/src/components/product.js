import React, { Component } from 'react';
import '../App.css';

class Product extends Component{
    render(){
        return(
            <div className="col-xs-6 col-s-6 col-md-4 col-lg-3 product">
                <a href="https://placeholder.com"><img src="http://via.placeholder.com/150x150" /></a>
            </div>
        );
    }
}

export default Product;