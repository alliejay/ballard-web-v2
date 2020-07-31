import React, { Component, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import DropDown from '../../components/Dropdown/index.js';
import { Button, Card, Col, Row } from 'antd';
import { EROS, BIKES, ALL } from '../../utilities/constants';
import { PARENT_COMPANIES, BRANDS, transformData, eros, bikes } from '../../utilities/productMapping';
import { forEach as _forEach, sortBy as _sortBy } from 'lodash';
import './styles.scss';

const AssemblyVideos = () => {

  const location = useLocation();
  const searchTerm = location.state ? location.state.searchTerm : ALL;

  const [search, setSearchTerm] = useState(searchTerm);
  const [data, setData] = useState([]);
  const [cards, setCards] = useState();

  const [selectedBrand, setSelectText] = useState("Select Brand");
  const [productTypes, setProductTypes] = useState([eros, bikes]);

  const handleClick = (item) => {
    setSelectText(item.key)
  };

  useEffect(() => {
    const productInformation = transformData(selectedBrand, "videos", search)
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
      if(item.assemblyVideo) {
        return <Card
        className="productCard"
        title={item.name}
        size="small"
        style={{ width: 590 }}
        key={index}>
          <div className="videoThumbnail">{item.videoEmbed}</div>
        </Card>
      }
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

export default AssemblyVideos;
