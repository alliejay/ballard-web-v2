import React from 'react';
import { Link } from "react-router-dom";

import { Row, Col } from 'antd';

import yamaha from '../../img/yamaha.jpg';
import honda from '../../img/honda.jpg';
import batman from '../../img/batman.jpg';
import disney from '../../img/disney.jpg';
import warnerbros from '../../img/warnerbros.png';
import columbia from '../../img/columbia.png';
import './styles.scss';

const Brands = () => {
  return (
    <div>
      <Row >
        <Col className="logoCol" span={6}><img src={yamaha} className="brandLogo" id="yamaha" /></Col>
        <Col className="logoCol" span={10}><Link to={{pathname: '/product-search', state: { brand: "Honda" }}}><img src={honda} className="brandLogo" id="honda" /></Link></Col>
        <Col className="logoCol" span={6}><h1 className="textLogo" id="actionwheels">Action Wheels</h1></Col> {/* TODO: get logo */}
      </Row>

      <Row>
        <Col className="logoCol" span={6}><img src={batman} className="brandLogo" id="batman" /></Col>
        <Col className="logoCol" span={10}><h1 className="textLogo">Sea Scooter</h1></Col> {/* TODO: get logo */}
        <Col className="logoCol" span={6}><img src={warnerbros} className="brandLogo" /></Col>

      </Row>

      <Row >
        <Col className="logoCol" span={6}><h1 className="textLogo">Thunder Tank</h1></Col> {/* TODO: get logo */}
        <Col className="logoCol" span={10}><img src={disney} className="brandLogo" /></Col>
        <Col className="logoCol" span={6}><img id="columbia" src={columbia} className="brandLogo" /></Col>
      </Row>
    </div>
  )
};

export default Brands;


// Yamaha
// Honda
// Action Wheels
// Batman
// SeaScooter
// Thunder Tank
// Disney
// Warner Brothers
// Columbia Bicycles