import React from 'react';
import DropDown from '../../components/Dropdown/index.js';
import { models } from '../../utilities/models.js';
import './styles.scss';

const CustomerService = () => {
  return (
    <div>
      <h1>Customer Service</h1>
      <h2>Looking for product manuals or parts? We can help.</h2>

      <br /><br />

      <h3>
        <DropDown options={models} label="Select product to view manual"/> {/* TODO need to pass manuals & direct to manual pages */}
      </h3>

      <h3>
        <DropDown options={models} label="Search for parts"/>
      </h3>

      <h3>
        <a href="https://www.youtube.com/user/customerfirstservice" target="new"><span className="youtube-icon"/> Instructional Videos</a>
      </h3>

      <br /><br />

    </div>
  )
};

export default CustomerService;
