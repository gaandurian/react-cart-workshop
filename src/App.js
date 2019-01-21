import React, { Component } from "react";
import Navbar from "./components/navbar/navbar";
import ProductList from "./components/product-list/product-list"
import Modal from 'react-responsive-modal'

import "./App.css";

class App extends Component {
  
  state = {
    cart: []
  }

  render() {

    return (
      <div>
        <Navbar handleOpenCart={this.onCartOpen} items={this.state.cart.length}/>
        <div className="container">
          <ProductList handleAddToCart={this.handleAddToCart}/>
        </div>

        <Modal open={this.state.cartOpen} onClose={this.onCartClose} center styles={{ overlay:{background: 'rgba(255,255,255, .9)'}}}>
          <h2 className="m-3">Items in your cart</h2>
          {this.state.cart ? this.state.cart.map(pr => (
            <div>
            <h3>{pr.label}</h3>
            <p>{pr.description}</p>
            </div>
          )) : "No products in the cart"}
          <button className="btn btn-danger m-1">Empty cart</button><button className="btn btn-primary">Done Shopping</button>
        </Modal>
      </div>
    );
  }
  
  handleAddToCart = (product) => {
    let arr = this.state.cart
    arr.push(product)
    this.setState({cart: arr})
  }

  onCartOpen = () => {
    this.setState({ cartOpen: true })
  }

  onCartClose = () => {
    this.setState({ cartOpen: false })
  }

}

export default App;
