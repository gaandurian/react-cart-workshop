import React, { Component } from 'react';
import Product from './product/product'
import './product-list.css'

class ProductList extends Component {
    state = {    products: [
        {
            label: 'Chamiya Papillon',
            description: 'Chamiya papillon hya chamya ta7founa barcha w ki tekel menha barcha taatik jwena7',
            price: 4,
            qt: 17,
            size: .5,
            imgUrl: 'http://atalanta-group.com.tn/media/produits/55b0bc1e98830.jpg'
        },
        {
            label: 'Chamiya Ghazela',
            description: 'Chamiya ghazela, chamya mezyena barcha w ki tkathar menha twalli tejri w tnagaz barcha',
            price: 4,
            qt: 22,
            size: .5,
            imgUrl: 'http://atalanta-group.com.tn/media/produits/566e896d6515a.jpg'
        },
        {
            label: 'Chamiya Na3oura',
            description: 'Chamiya aala 3ajla, bnina w lux barcha ',
            price: 5,
            qt: 14,
            size: .5,
            imgUrl: 'http://atalanta-group.com.tn/media/produits/566e7c3412ae5.jpg'
        }
    ]
}

    render() { 
        return ( <div className="product-list">
            {this.state.products.map(pr => <Product product={pr} handleAddToCart={this.props.handleAddToCart} />)}
        </div> );
    }
}
 
export default ProductList;