import React, { Component, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import DropDown from '../../components/Dropdown/index.js';
import { Button, Card, Col, Row } from 'antd';
import { EROS, BIKES, ALL } from '../../utilities/constants';
import { PARENT_COMPANIES, BRANDS, transformData, eros, bikes } from '../../utilities/productMapping';
import { forEach as _forEach, sortBy as _sortBy } from 'lodash';
import './styles.scss';

const ProductSearch = (props) => {
  const { Meta } = Card;
  const location = useLocation();
  const searchTerm = location.state.searchTerm ? location.state.searchTerm : 'all';
  const [search, setSearchTerm] = useState(searchTerm);
  const [data, setData] = useState([]);
  const [cards, setCards] = useState();

  const [selectText, setSelectText] = useState("Select Brand");

  const handleClick = (item) => {
    setSelectText(item.key)
  };

  useEffect(() => {
    setData(transformData(selectText, "products", search));
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

  useEffect(() => {
    setCards(data.map((item, index) => {
      return <Card
        className="productCard"
        title={item.name}
        size="small"
        style={{ width: 450 }}
        key={index}>
        <div className="coverImage"><img src={item.image} /></div>
        <a href={item.walmartLink} target="new">Buy From Walmart</a>
        {item.assemblyVideo && <a href="/">View Assembly Video</a>}
      </Card>
    }));
  }, [data]);

  return (
    <div className="productSearchContainer">
      <div className="productSearchFilter">
        <DropDown
          label="Search Brands"
          options={createBrandList()}
          selectText={selectText}
          handleClick={handleClick}/>
        <Button type={search == ALL && 'primary'}
                onClick={() => handleButtonClick(ALL)}
                className="productSearchButton">ALL</Button>
        <Button type={search == eros && 'primary'}
                onClick={() => handleButtonClick(eros)}
                className="productSearchButton">ELECTRIC RIDE ONS</Button>
        <Button type={search == bikes && 'primary'}
                onClick={() => handleButtonClick(bikes)}
                className="productSearchButton">BICYCLES</Button>
      </div>

      {cards}

    </div>
  )


};

export default ProductSearch;

// Dropdown with brand names --> loads products with thumbnail img & video link
// Click on product name/image --> to Walmart site
//