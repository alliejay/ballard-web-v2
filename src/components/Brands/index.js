import React from 'react';
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

      <Row>
        <Col span={6}><img src={yamaha} className="brandLogo" /></Col>
        <Col span={6}><img src={honda} className="brandLogo" /></Col>
        <Col span={6}><h1>Action Wheels</h1></Col> {/* TODO: get logo */}
        <Col span={6}><img src={batman} className="brandLogo" /></Col>
      </Row>

      <Row>
        <Col span={4}><h1>Sea Scooter</h1></Col> {/* TODO: get logo */}
        <Col span={4}><h1>Thunder Tank</h1></Col> {/* TODO: get logo */}
        <Col span={4}><img src={disney} className="brandLogo" /></Col>
        <Col span={4}><img src={warnerbros} className="brandLogo" /></Col>
        <Col span={4}><img src={columbia} className="brandLogo" /></Col>
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