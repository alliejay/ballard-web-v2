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
import Contact from '../../components/Contact/index.js';

const Navigation = () => {
  return (
    <div className="navigation">
      <Router>
        <div>
          <div>
            <div className="nav-logo">
              <h2 className="logo">LOGO</h2>
            </div>
            <div className="nav">
              <ul className="nav-list">
                <li><Link to="/">ABOUT</Link></li>
                <li><Link to="/customer-service">CUSTOMER SERVICE</Link></li>
                <li><Link to="/contact">CONTACT</Link></li>
              </ul>
            </div>
          </div>

          <div className="page-wrapper">
            <Switch>
              <Route path="/customer-service">
                <CustomerService />
              </Route>
              <Route path="/contact">
                <Contact />
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