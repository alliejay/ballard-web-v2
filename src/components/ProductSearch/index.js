import React, { Component, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import DropDown from '../../components/Dropdown/index.js';
import { Button } from 'antd';
import { EROS, BIKES, ALL } from '../../utilities/constants';
import { PARENT_COMPANIES, BRANDS } from '../../utilities/productMapping';
import { forEach as _forEach, sortBy as _sortBy } from 'lodash';
import './styles.scss';

const ProductSearch = (props) => {

  const location = useLocation();
  const searchTerm = location.state.searchTerm ? location.state.searchTerm : 'all';
  const [search, setSearchTerm] = useState(searchTerm);

  useEffect(() => {
    // search again
    console.log("useEffect", search)
  }, [search]);

  const handleButtonClick = (selection) => {
    setSearchTerm(selection)
  };

  const createBrandList = () => {
    let list = [];
    _forEach(PARENT_COMPANIES, (company) => {
      list.push({ label: company.name })
    });
    _forEach(BRANDS, (brand) => {
      list.push({ label: brand.name})
    });
    _sortBy(list, ['label']);
    return list;
  };

  return (
    <div>
      <h1>Product Search</h1>

      <DropDown label="Search" options={createBrandList()}/>

      <Button type={search == ALL && 'primary'}
              onClick={() => handleButtonClick(ALL)}
              className="productSearchButton">ALL</Button>
      <Button type={search == EROS && 'primary'}
              onClick={() => handleButtonClick(EROS)}
              className="productSearchButton">ELECTRIC RIDE ONS</Button>
      <Button type={search == BIKES && 'primary'}
              onClick={() => handleButtonClick(BIKES)}
              className="productSearchButton">BICYCLES</Button>


    </div>
  )


};

export default ProductSearch;

// Dropdown with brand names --> loads products with thumbnail img & video link
// Click on product name/image --> to Walmart site
//