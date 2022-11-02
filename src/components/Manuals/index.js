import React from 'react';
import { Row, Col, Select } from 'antd';
import { assemblyGuides, manuals, assemblyVideos } from '../../utilities/models.js';
import { sortBy as _sortBy, map as _map } from 'lodash';
import './styles.scss';
import {Link} from "react-router-dom";

const { Option } = Select;

const Manuals = () => {
  const guides = _sortBy(assemblyGuides, ['label']);
  const userManuals = _sortBy(manuals, ['label']);
  const videos = _sortBy(assemblyVideos, ['label']);

  return (
    <div className="manuals">

      <div className="guide-dropdowns">
          <Row justify="center">
              <Col span={12}>
      <h3 className="dropdown-text">Assembly Guides: </h3>
              </Col>
              <Col  span={12}>
          <Select className="guide-select" placeholder="Select Product">
              {
                  _map(guides, (guide) => {
                      const url = `${guide.urlParam}`;
                      return <Option key={guide.label}>
                          <Link to={url} target="new">{guide.label}</Link>
                      </Option>
                  })
              }
          </Select>
              </Col>
          </Row>
      <br />
          <Row justify="center">
              <Col span={12}>
                  <h3 className="dropdown-text">Assembly Videos: </h3>
              </Col>
              <Col  span={12}>
                  <Select className="guide-select"
                          placeholder="Select Product"
                          onChange={(value) => {
                              window.open(value);
                  }}>
                      {
                          _map(videos, (video) => {
                              return <Option key={video.value}>
                                  {video.label}
                              </Option>
                          })
                      }
                  </Select>
              </Col>
          </Row>
<br />
          <Row>
              <Col span={12}>
      <h3 className="dropdown-text">User Manuals: </h3>
              </Col>
              <Col span={12}>
          <Select className="guide-select" placeholder="Select Product">
              {
                  _map(userManuals, (manual) => {
                      const url = `${manual.urlParam}`;
                      return <Option key={manual.label}>
                          <Link to={url} target="new">{manual.label}</Link>
                      </Option>
                  })
              }
          </Select>
              </Col>
          </Row>
        <br/>
      </div>

      <div className="guide-extraHelp">
        <h3>Still can't find what you need? <a href="#customerService">Customer Service</a> can help.</h3>
      <h3><a href="tel:1-866-424-0500" className="customerServiceWhite">866-424-0500</a></h3>
      <br/><br/>
      </div>
    </div>
  )
};

export default Manuals;