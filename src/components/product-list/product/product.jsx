import React, { Component } from "react";
import "./product.css";

class Product extends Component {
  state = {};
  render(props) {
    return (
      
        <div className="card" style={{width: '18rem'}}>
  <img className="card-img-top" src={this.props.product.imgUrl} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">{this.props.product.label}</h5>
    <p className="card-text">{this.props.product.description}</p>
    <a href="#" className="btn btn-danger" onClick={() => this.props.handleAddToCart(this.props.product)}>Add to cart</a>
  </div>
</div>
      
    );
  }
}

export default Product;
