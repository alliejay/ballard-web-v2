import React from 'react';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { SHOP_BASE_URL } from '../../utilities/constants';
import './styles.scss';

const DropDown = ({options, label}) => {
  const menu = (
    <Menu>
      {options.map((option, index) => {
          const url = `${SHOP_BASE_URL}/${option.urlParam}`;
          return (
            <Menu.Item key={index}>
              <a href={url}>{option.label}</a>
            </Menu.Item>
          )
      })}
    </Menu>
  );

 return (
   <div>
     <p className="label">{label}: </p>
     <Dropdown overlay={menu} trigger={['click']} className="dropdown">
      <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
       Select Product <DownOutlined />
      </a>
     </Dropdown>
   </div>
 )
};

export default DropDown;