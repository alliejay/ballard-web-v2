import React, { useState } from 'react';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import './styles.scss';
import { MANUALS } from '../../utilities/constants.js';
import {
  Link
} from "react-router-dom";
const DropDown = ({options, label, handleClick, selectText, baseUrl, className}) => {

  const menu = (
    <Menu onClick={handleClick}>
      {options.map((option, index) => {
          if(option.urlParam) {
            if(baseUrl == MANUALS) {
              const url = `${option.urlParam}`;
              return (
                <Menu.Item key={option.label}>
                  <Link to={url} target="new">{option.label}</Link>
                </Menu.Item>
              )
            } else {
              const url = `${baseUrl}/${option.urlParam}`;
              return (
                <Menu.Item key={option.label}>
                  <a href={url} target="new">{option.label}</a>
                </Menu.Item>
              )
            }
          } else {
            return (
              <Menu.Item key={option.label}>
                {option.label}
              </Menu.Item>
            )
          }
      })}
    </Menu>
  );

 return (
   <div className={`dropdown-container ${className}`}>
     <p className="label">{label}</p>
     <Dropdown overlay={menu} placement="bottomRight" trigger={['click']} className="dropdown" overlayClassName="dropdown-test">
      <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
        {selectText} <DownOutlined />
      </a>
     </Dropdown>
   </div>
 )
};

export default DropDown;