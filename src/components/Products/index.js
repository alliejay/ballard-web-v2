import React from 'react';
import { Button } from 'antd';
import { Link } from "react-router-dom";
import './styles.scss';

const Products = () => {

  return (
    <div>
      <div className="homescreen-btns">
        <Button block className="homescreen-btn">
          <Link to="/brands">BRANDS</Link>
        </Button>
        <Button block className="homescreen-btn">
          <Link to={{ pathname: "/product-search", state: { searchTerm: "eros" }}}>ELECTRIC RIDE ONS</Link>
        </Button>
        <Button block className="homescreen-btn">
          <Link to={{ pathname: "/product-search", state: { searchTerm: "bikes" }}}>BICYCLES</Link>
        </Button>
      </div>
    </div>
  )
};

export default Products;

{/*<div>*/}
  {/*<div className="contact">*/}
    {/*<h1>Contact Us</h1>*/}
    {/*<h3>We'd love to hear from you.</h3>*/}
  {/*</div>*/}
  {/*<br />< br/>*/}
  {/*<div className="contact-form">*/}
    {/*<Demo />*/}
  {/*</div>*/}
  {/*<br />< br/>*/}
  {/*<h5 className="contact">tel: 866.424.0500</h5>*/}
  {/*<h5 className="contact">fax: 775.248.5155</h5>*/}
  {/*<h5 className="contact">email: service@motiontrendz.com</h5>*/}
{/*</div>*/}