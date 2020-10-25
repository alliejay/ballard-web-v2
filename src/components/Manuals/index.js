import React from 'react';
import { assemblyGuides, manuals } from '../../utilities/models.js';
import DropDown from '../../components/Dropdown/index.js';
import { MANUALS } from '../../utilities/constants.js';
import './styles.scss';

const Manuals = () => {
  return (
    <div className="manuals">

      <div className="guide-dropdowns">
      <h3 className="dropdown-text">Assembly Guides: </h3>
      <DropDown options={assemblyGuides} label="Select Product" baseUrl={MANUALS} className="guide-dropdown"/>
      <br />

      {/*<h3 className="dropdown-text">Assembly Videos: </h3>*/}
      {/*<DropDown options={assemblyGuides} label="Select Product" baseUrl={MANUALS} className="video-dropdown"/>*/}
      {/*<br />*/}

      <h3 className="dropdown-text">User Manuals: </h3>
        <DropDown options={manuals} label="Select Product" baseUrl={MANUALS} className="user-dropdown"/>
        <br/>
      </div>

      <div className="guide-extraHelp">
      <h3>Still can't find what you need? Customer Service can help.</h3>
      <h3><a href="http://www.customerfirstservice.com/" target="new" className="customerServiceWhite">Customer First Service:</a>  <a href="tel:1-866-424-0500" className="customerServiceWhite">866-424-0500</a></h3>
      <br/><br/>
      </div>
    </div>
  )
};

export default Manuals;