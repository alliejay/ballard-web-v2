import React from 'react';
import { assemblyGuides, manuals } from '../../utilities/models.js';
import DropDown from '../../components/Dropdown/index.js';
import { MANUALS } from '../../utilities/constants.js';
import { sortBy as _sortBy } from 'lodash';
import './styles.scss';

const Manuals = () => {
  const guides = _sortBy(assemblyGuides, ['label']);
  const userManuals = _sortBy(manuals, ['label']);

  return (
    <div className="manuals">

      <div className="guide-dropdowns">
      <h3 className="dropdown-text">Assembly Guides: </h3>
      <DropDown options={guides} label="Select Product" baseUrl={MANUALS} className="guide-dropdown"/>
      <br />

      {/*<h3 className="dropdown-text">Assembly Videos: </h3>*/}
      {/*<DropDown options={assemblyGuides} label="Select Product" baseUrl={MANUALS} className="video-dropdown"/>*/}
      {/*<br />*/}

      <h3 className="dropdown-text">User Manuals: </h3>
        <DropDown options={userManuals} label="Select Product" baseUrl={MANUALS} className="user-dropdown"/>
        <br/>
      </div>

      <div className="guide-extraHelp">
        <h3>Still can't find what you need? <a href="#customerService">Customer Service</a> can help.</h3>
      <h3><a href="tel:1-866-424-0500" className="customerServiceWhite">866-424-0500</a></h3>
      <br/><br/>
      </div>
    </div>
  )
};

export default Manuals;