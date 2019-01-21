import React, { Component } from "react";
import './navbar.css'

class Navbar extends Component {
  state = {};
  render() {
    let cartClass
    (this.props.items > 0) ? cartClass = "btn-danger" : cartClass = "btn-primary" 
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Shop
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a onClick={this.props.handleOpenCart} className={"btn " + cartClass} href="#">
                Cart <span className="sr-only">(current)
                    
                </span><span className="badge badge-light">{this.props.items}</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
