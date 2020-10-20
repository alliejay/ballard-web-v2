import React from 'react';
import DropDown from '../../components/Dropdown/index.js';
import { models } from '../../utilities/models.js';
import { Link } from "react-router-dom";
import { SHOP_BASE_URL } from '../../utilities/constants';

import './styles.scss';

const CustomerService = () => {
  embedForm = () => {
    EmbedManager.embed({
      key: "https://fs4.formsite.com/res/showFormEmbed?EParam=PyBo85CFjhENtvLZ3yttpdt7h1SghSJ6&956043880",
      width: "100%"
    });
  };

  return (
    <div className="content-padding">
      <h2><a href="http://customerfirstservice.com/" target="new">Customer First Service</a></h2>
      <h3>tel: <a href="tel:1-866-424-0500">866-424-0500</a></h3>


      <a name="form956043880" id="formAnchor956043880"></a>


    </div>
  )
};

export default CustomerService;

{/*<h3>Looking for a specific part? We can help.</h3>*/}
{/*<DropDown options={models} label="Select Product" baseUrl={SHOP_BASE_URL}/>*/}

{/*<h3>*/}
  {/*<DropDown options={models} label="Select product to view manual"/>
{/*</h3>*/}

{/*<h3>*/}
{/*<DropDown options={models} label="Search for parts"/>*/}
  {/*</h3>*/}

  {/*<h3>*/}
  {/*<a href="https://www.youtube.com/user/customerfirstservice" target="new"><span className="youtube-icon"/> Instructional Videos</a>*/}
{/*</h3>*/}