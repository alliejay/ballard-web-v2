import React from 'react';
import { assemblyGuides, manuals } from '../../utilities/models.js';
import DropDown from '../../components/Dropdown/index.js';
import { MANUALS } from '../../utilities/constants.js';

const Manuals = () => {
  return (
    <div className="content-padding">
      <h2>Select a product to view the guide.</h2>
      <h3 className="dropdown-text">Assembly Guides: </h3>
      <DropDown options={assemblyGuides} label="Select Product" baseUrl={MANUALS}/>
      <br />
      <h3 className="dropdown-text">User Manuals: </h3>
      <DropDown options={manuals} label="Select Product" baseUrl={MANUALS}/>

      <br/><br/><br/><br/>
      <h3>Still can't find what you need? Customer Service can help.</h3>
      <h4><a href="http://www.customerfirstservice.com/" target="new">Customer First Service</a></h4>
      <a href="tel:1-866-424-0500">866-424-0500</a>
      <br/><br/>
    </div>
  )
};

export default Manuals;