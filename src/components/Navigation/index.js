import React from 'react';
import './styles.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from '../../components/About/index.js';

const Navigation = () => {
  return (
    <div className="navigation">
      <Router>
        <div>
          <nav>
            <ul className="nav-list">
              <li><Link to="/">ABOUT</Link></li>
              <li><Link to="/customer-service">CUSTOMER SERVICE</Link></li>
              <li><Link to="/contact">CONTACT</Link></li>
            </ul>
          </nav>

          <Switch>
            <Route path="/">
              <About />
            </Route>
            <Route path="/customer-service">
              <CustomerService />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
};

function Contact() {
  return <h2>Contact</h2>;
}

function CustomerService() {
  return <h2>Customer Service</h2>;
}

export default Navigation;