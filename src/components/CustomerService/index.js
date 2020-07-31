import React from 'react';
import DropDown from '../../components/Dropdown/index.js';
import { models } from '../../utilities/models.js';
import { Button } from 'antd';
import { Link } from "react-router-dom";

import './styles.scss';

const CustomerService = () => {
  return (
    <div>
      <h2><a href="http://customerfirstservice.com/" target="new">Customer First Service:</a> (620) 432-3756</h2>

      <Link to="/assembly-videos">
        <Button className="assembly-btn">Assembly Videos</Button>
      </Link>

    </div>
  )
};

export default CustomerService;


{/*<h3>*/}
  {/*<DropDown options={models} label="Select product to view manual"/>
{/*</h3>*/}

{/*<h3>*/}
{/*<DropDown options={models} label="Search for parts"/>*/}
  {/*</h3>*/}

  {/*<h3>*/}
  {/*<a href="https://www.youtube.com/user/customerfirstservice" target="new"><span className="youtube-icon"/> Instructional Videos</a>*/}
{/*</h3>*/}