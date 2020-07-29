import React from 'react';
import './styles.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from '../../components/About/index.js';
import CustomerService from '../../components/CustomerService/index.js';
import Products from '../Products/index.js';
import Brands from '../../components/Brands/index.js';

const Navigation = () => {
  return (
    <div className="navigation">
      <Router>
        <div>
          <div>
            <div className="nav-logo">
              <Link to="/"><h2 className="logo">LOGO</h2></Link>
            </div>
            <div className="nav">
              <ul className="nav-list">
                <li><Link to="/customer-service">CUSTOMER SERVICE</Link></li>
                <li><Link to="/products">PRODUCTS</Link></li>
              </ul>
            </div>
          </div>

          <div className="page-wrapper">
            <Switch>
              <Route path="/customer-service">
                <CustomerService />
              </Route>
              <Route path="/products">
                <Products />
              </Route>
              <Route path="/brands">
                <Brands />
              </Route>
              <Route path="/">
                <About />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  )
};

export default Navigation;