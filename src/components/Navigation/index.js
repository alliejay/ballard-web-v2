import React from 'react';
import './styles.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from '../../img/logo.png';
import About from '../../components/About/index.js';
import CustomerService from '../../components/CustomerService/index.js';
import Products from '../Products/index.js';
import Brands from '../../components/Brands/index.js';
import ProductSearch from '../ProductSearch/index.js';
import AssemblyVideos from '../AssemblyVideos/index';
import Parts from '../Parts/index';
import Manuals from '../Manuals/index';
import Contact from '../Contact/index';

import banner from '../../img/banner.jpg';
import {
  TagsOutlined,
  FilePdfOutlined,
  PhoneOutlined,
  ToolOutlined
} from '@ant-design/icons';

import { Layout } from 'antd';
const { Footer } = Layout;

const Navigation = () => {
  return (
    <div className="navigation">
      <Router>
        <div>
          <div className="nav-container">
            <div className="nav-logo">
              <Link to="/"><img src={logo} /></Link>
            </div>
            <div className="nav">
              Customer Service: <a href="tel:1-866-424-0500">866-424-0500</a>
              {/*<ul className="nav-list">*/}
                {/*<li><Link to="/customer-service">CUSTOMER SERVICE</Link></li>*/}
                {/*<li><Link to="/products">PRODUCTS</Link></li>*/}
              {/*</ul>*/}
            </div>
          </div>

      <div className="banner-container">
        <img src={banner} className="banner" />
        <div className="overlay">
          <div className="icon-pair">
            <Link className="icon-text" to="/brands"><TagsOutlined style={{ fontSize: '60px', color: 'black' }} className="icon" /> BRANDS</Link>
          </div>

          <div className="icon-pair">
            <Link className="icon-text" to="/manuals"><FilePdfOutlined style={{ fontSize: '60px', color: 'black' }} className="icon" /> PDF MANUALS</Link>
          </div>

          <div className="icon-pair">
            <Link className="icon-text" to="/parts"><ToolOutlined style={{ fontSize: '60px', color: 'black' }} className="icon" /> FIND PARTS</Link>
          </div>

          {/*<div className="icon-pair">*/}
            {/*<PhoneOutlined style={{ fontSize: '60px', color: 'black' }} className="icon" />*/}
            {/*<Link className="icon-text" to="/contact">CONTACT</Link>*/}
          {/*</div>*/}
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
              <Route path="/product-search">
                <ProductSearch />
              </Route>
              <Route path="/assembly-videos">
              <AssemblyVideos />
            </Route>
              <Route path="/parts">
                <Parts />
              </Route>
              <Route path="/manuals">
                <Manuals />
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
      {/*<Footer>Ballard Pacific</Footer>*/}
    </div>
  )
};

export default Navigation;