import React from 'react';
import { Link } from "react-router-dom";
import './styles.scss';
import { Button } from 'antd';
import banner from '../../img/banner.jpg';

import {
  TagsOutlined,
  FilePdfOutlined,
  PhoneOutlined,
  ToolOutlined
} from '@ant-design/icons';


const About = () => {
  return (
    <div>
      {/*<h2 className="about-msg">Cutting-edge American design teams, paired with world-wide production facilities and logistics capacities, makes Ballard Pacific the leader in the development, manufacturing & selling of wheeled recreational products. We've teamed up with Columbia Bicycles, Dew Tour, Yamaha & MotionTrendz to bring the newest designs to the mass market.</h2>*/}
      {/*<div className="banner-container">*/}
        {/*<img src={banner} className="banner" />*/}
        {/*<div className="overlay">*/}
          {/*<div className="icon-pair">*/}
            {/*<TagsOutlined style={{ fontSize: '60px', color: 'black' }} className="icon" />*/}
            {/*<Link className="icon-text" to="/brands">BRANDS</Link>*/}
          {/*</div>*/}

          {/*<div className="icon-pair">*/}
            {/*<FilePdfOutlined style={{ fontSize: '60px', color: 'black' }} className="icon" />*/}
            {/*<Link className="icon-text" to="/brands">PDF MANUALS</Link>*/}
          {/*</div>*/}

          {/*<div className="icon-pair">*/}
            {/*<ToolOutlined style={{ fontSize: '60px', color: 'black' }} className="icon" />*/}
            {/*<Link className="icon-text" to="/brands">FIND PARTS</Link>*/}
          {/*</div>*/}

          {/*<div className="icon-pair">*/}
            {/*<PhoneOutlined style={{ fontSize: '60px', color: 'black' }} className="icon" />*/}
            {/*<Link className="icon-text" to="/brands">CONTACT</Link>*/}
          {/*</div>*/}
        {/*</div>*/}
      {/*</div>*/}


      {/*<div className="homescreen-btns">*/}
        {/*<Button block className="homescreen-btn">*/}
          {/*<Link to="/products">PRODUCTS</Link>*/}
        {/*</Button>*/}
        {/*<Button block className="homescreen-btn">*/}
          {/*<Link to="/customer-service">CUSTOMER SERVICE</Link>*/}
        {/*</Button>*/}
        {/*<Button block className="homescreen-btn">*/}
          {/*<Link to="/customer-service">CUSTOMER SERVICE</Link>*/}
        {/*</Button>*/}
      {/*</div>*/}


    </div>
  )
};

export default About;