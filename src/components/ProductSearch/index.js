import React, { Component, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import DropDown from '../../components/Dropdown/index.js';
import { Button, Card, Col, Row } from 'antd';
import { EROS, BIKES, ALL } from '../../utilities/constants';
import { PARENT_COMPANIES, BRANDS, transformData, eros, bikes } from '../../utilities/productMapping';
import { forEach as _forEach, sortBy as _sortBy } from 'lodash';
import './styles.scss';

const ProductSearch = (props) => {
  const location = useLocation();
  const searchTerm = location.state && location.state.searchTerm ? location.state.searchTerm : ALL;
  const selectText = location.state && location.state.brand ? location.state.brand : "Select Brand";

  const [search, setSearchTerm] = useState(searchTerm);
  const [data, setData] = useState([]);
  const [cards, setCards] = useState();

  const [selectedBrand, setSelectText] = useState(selectText);
  const [productTypes, setProductTypes] = useState([eros, bikes]);

  const handleClick = (item) => {
    setSelectText(item.key)
  };

  useEffect(() => {
    const productInformation = transformData(selectedBrand, "products", search)
    setData(productInformation.data);
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
        style={{ width: 450 }}
        key={index}>
        <div className="coverImage"><img src={item.image} /></div>
        <div className="links">
        <a href={item.walmartLink} target="new">Buy From Walmart</a>
        {item.assemblyVideo && <a className="assemblyLink" href={item.assemblyVideo} target="new">View Assembly Video</a>}
        </div>
      </Card>
    }));
  }, [data]);

  if(!productTypes.includes(search)) {
    setSearchTerm(productTypes[0])
  }

  return (
    <div className="productSearchContainer">
      <div className="productSearchFilter">
        <DropDown
          label="Search Brands"
          options={createBrandList()}
          selectText={selectedBrand}
          handleClick={handleClick}/>

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

      </div>

      {cards}

    </div>
  )


};

export default ProductSearch;
