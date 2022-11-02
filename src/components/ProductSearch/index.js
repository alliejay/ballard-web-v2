import React, { Component, useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import DropDown from '../../components/Dropdown/index.js';
import { Button, Card, Col, Row, Space } from 'antd';
import { EROS, BIKES, ALL } from '../../utilities/constants';
import { PARENT_COMPANIES, BRANDS, transformData, eros, bikes } from '../../utilities/productMapping';
import { forEach as _forEach, sortBy as _sortBy, orderBy as _orderBy } from 'lodash';
import './styles.scss';

const ProductSearch = (props) => {
  const location = useLocation();
  const searchTerm = location.state && location.state.searchTerm ? location.state.searchTerm : ALL;
  const selectText = location.state && location.state.brand ? location.state.brand : "Select Brand";

  const [search, setSearchTerm] = useState(ALL);
  const [data, setData] = useState([]);
  const [cards, setCards] = useState();

  const [selectedBrand, setSelectText] = useState(selectText);
  const [productTypes, setProductTypes] = useState([ALL, eros, bikes]);

  const handleClick = (item) => {
    setSelectText(item.key)
  };

  useEffect(() => {
    const productInformation = transformData(selectedBrand, "products", search)
    const data = _orderBy(productInformation.data, ['itemPosition'], ['desc']);
    setData(data);
    setProductTypes(productInformation.productTypes)
  }, [selectedBrand, search]);

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
        key={index}>
        <div className="coverImage"><img src={item.image} /></div>
        <div className="links">
          {
            item.walmartLink && <a href={item.walmartLink} target="new">Buy From Walmart</a>
          }
          {
            item.dunhamLink && <a href={item.dunhamLink} target="new">Buy From Dunham's Sports</a>
          }
          {
              item.assemblyVideo && <a href={item.assemblyVideo} target="_blank" className="assemblyLink">View Assembly Video</a>
          }
        {!item.assemblyVideo && item.assemblyGuide && <Link className="assemblyLink" to={item.assemblyGuide} target="new">View Assembly Guide</Link>}

        </div>
      </Card>
    }));
  }, [data]);

  if(!productTypes.includes(search)) {
    console.log("productTypes", productTypes)
    setSearchTerm(productTypes[0])
  }

  return (
    <div className="content-padding productSearchContainer">
      <div className="productSearchFilter">
        <DropDown
          label="Filter Results: "
          className="brandSearch"
          options={createBrandList()}
          selectText={selectedBrand}
          handleClick={handleClick}/>
        <span className="productFilters">
        {
          productTypes.length == 3 &&
          <Button type={search == ALL && 'primary'}
                  onClick={() => setSearchTerm(ALL)}
                  className="productSearchButton">ALL</Button>
        }
        {
          productTypes.includes(eros) &&
          <Button type={search == eros && 'primary'}
                  onClick={() => setSearchTerm(eros)}
                  className="productSearchButton">ELECTRIC RIDE ONS</Button>
        }
        {
          productTypes.includes(bikes) &&
          <Button type={search == bikes && 'primary'}
                  onClick={() => setSearchTerm(bikes)}
                  className="productSearchButton">BICYCLES</Button>
        }
        </span>
      </div>

    <div className="productCards">
      {cards}
    </div>

    </div>
  )


};

export default ProductSearch;
