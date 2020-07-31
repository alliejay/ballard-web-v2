import React, { useState } from 'react';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { SHOP_BASE_URL } from '../../utilities/constants';
import './styles.scss';

const DropDown = ({options, label, handleClick, selectText}) => {

  const menu = (
    <Menu onClick={handleClick}>
      {options.map((option, index) => {
          {/*const url = `${SHOP_BASE_URL}/${option.urlParam}`;*/}
          return (
            <Menu.Item key={option.label}>
              {option.label}
            </Menu.Item>
          )
      })}
    </Menu>
  );

 return (
   <div className="dropdown-container">
     <p className="label">{label}: </p>
     <Dropdown overlay={menu} trigger={['click']} className="dropdown">
      <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
        {selectText} <DownOutlined />
      </a>
     </Dropdown>
   </div>
 )
};

export default DropDown;