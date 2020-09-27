import React from 'react';
import { models } from '../../utilities/models.js';
import DropDown from '../../components/Dropdown/index.js';
import { SHOP_BASE_URL } from '../../utilities/constants';

const Parts = () => {
  return (
    <div className="content-padding">
      <h2>Looking for a specific part? We can help.</h2>
      <DropDown options={models} label="Select Product" baseUrl={SHOP_BASE_URL}/>

      <br/><br/><br/><br/>
      <h3>Still can't find what you need? Customer Service can help.</h3>
      <h4><a href="http://www.customerfirstservice.com/" target="new">Customer First Service</a></h4>
      <a href="tel:1-866-424-0500">866-424-0500</a>
    </div>
  )
};

export default Parts;