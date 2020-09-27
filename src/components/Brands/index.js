import React from 'react';
import { Link } from "react-router-dom";

import { Row, Col } from 'antd';

import actionwheels from '../../img/actionwheels.jpeg';
import seascooter from '../../img/seascooter.jpg';
import yamaha from '../../img/yamaha.jpg';
import honda from '../../img/honda.jpg';
import batman from '../../img/batman.png';
import disney from '../../img/disney.jpg';
import warnerbros from '../../img/warnerbros.png';
import columbia from '../../img/columbia2.png';
import './styles.scss';

const Brands = () => {
  return (
    <div className="brands-container">
      {/*<h2 className="title">OUR BRANDS</h2>*/}
      <Row >
        <Col className="logoCol" span={8}><img src={actionwheels} className="brandLogo" id="action_wheels" /></Col>
        <Col className="logoCol" span={8}><img src={honda} className="brandLogo" id="honda" /></Col>
        <Col className="logoCol" span={8}><img src={disney} className="brandLogo" id="disney" /></Col>
      </Row>

      <Row>
        <Col className="logoCol" span={8}><img src={yamaha} className="brandLogo" id="yamaha" /></Col>
        <Col className="logoCol" span={8}><img src={columbia} className="brandLogo" id="columbia" /></Col>
        <Col className="logoCol" span={8}><img src={warnerbros} className="brandLogo" id="warnerbros" /></Col>
      </Row>

      <Row >
        <Col className="logoCol" span={8}><h1 className="textLogo">Thunder Tank</h1></Col> {/* TODO: get logo */}
        <Col className="logoCol" span={8}><img src={seascooter} className="brandLogo" id="seascooter" /></Col>
        <Col className="logoCol" span={8}><img id="columbia" src={batman} className="brandLogo" /></Col>
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