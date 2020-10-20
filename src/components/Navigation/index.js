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

import disneyBanner from '../../img/disney_banner.jpg';
import talonBanner from '../../img/talon_banner.jpg';

import {
  TagsOutlined,
  FilePdfOutlined,
  PhoneOutlined,
  ToolOutlined,
  CustomerServiceOutlined
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
              <Link to="/"><img src={logo} className="logo" /></Link>
            </div>
            <div className="nav">
              <div className="customerServiceNumber">
                <span>Customer Service:</span> <a href="tel:1-866-424-0500">866-424-0500</a>
              </div>

              <ul className="nav-list">
                <li><Link to="/customer-service">CUSTOMER SERVICE</Link></li>
                <li><Link to="/products">SEARCH PRODUCTS</Link></li>
                <li><Link to="/products">SELF HELP GUIDES</Link></li>
                <li><Link to="/products">BRANDS</Link></li>
              </ul>
            </div>
          </div>

      <div className="banner-container">
          <img src={talonBanner} className="banner-img bannerLeft" />
          <img src={disneyBanner} className="banner-img bannerRight" />
      </div>

      <div className="wrapper">
        <div className="welcomeText">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vehicula, purus in cursus vulputate, metus orci tincidunt dui, vel feugiat nulla sapien eget mi. Morbi sagittis hendrerit dui sit amet rutrum. Sed et faucibus ligula. Sed commodo lobortis sollicitudin. Quisque vel aliquam nisl. Phasellus et ex lacus. Etiam convallis massa libero, lacinia porta nisi convallis eget. Duis tincidunt nulla vel ex sollicitudin congue.
          </p>
        </div>

        <div className="secondPanel panel">
          <h2>Self Help Guides</h2>
          <h3>Select a product from one of the dropdown menus to view the guide.</h3>
          <Manuals />
        </div>

        <div className="thirdPanel panel">
          <h2>Ballard Pacific & Action Wheels are proud to partner with the following brands:</h2>
          <Brands />
        </div>

        <div className="fourthPanel panel">
          <h2></h2>
          <CustomerService />
        </div>

        {/*Routes*/}
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


{/*<div className="overlay">*/}
  {/*<div className="icon-pair">*/}
    {/*<Link className="icon-text" to="/customer-service"> <CustomerServiceOutlined style={{ fontSize: '60px', color: 'black' }} className="icon" /> CUSTOMER SERVICE</Link>*/}
  {/*</div>*/}

  {/*<div className="icon-pair">*/}
    {/*<Link className="icon-text" to="/manuals"><FilePdfOutlined style={{ fontSize: '60px', color: 'black' }} className="icon" /> SELF HELP GUIDES</Link>*/}
  {/*</div>*/}

  {/*<div className="icon-pair">*/}
    {/*<Link className="icon-text" to="/brands"><TagsOutlined style={{ fontSize: '60px', color: 'black' }} className="icon" /> BRANDS</Link>*/}
  {/*</div>*/}
{/*</div>*/}