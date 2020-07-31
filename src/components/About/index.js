import React from 'react';
import { Link } from "react-router-dom";
import './styles.scss';
import { Button } from 'antd';

const About = () => {
  return (
    <div>
      {/*<h2 className="about-msg">Cutting-edge American design teams, paired with world-wide production facilities and logistics capacities, makes Ballard Pacific the leader in the development, manufacturing & selling of wheeled recreational products. We've teamed up with Columbia Bicycles, Dew Tour, Yamaha & MotionTrendz to bring the newest designs to the mass market.</h2>*/}

      <div className="homescreen-btns">
        <Button block className="homescreen-btn">
          <Link to="/products">PRODUCTS</Link>
        </Button>
        <Button block className="homescreen-btn">
          <Link to="/customer-service">CUSTOMER SERVICE</Link>
        </Button>
      </div>
    </div>
  )
};

export default About;