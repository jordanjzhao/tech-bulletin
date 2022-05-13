import React, { useState, useEffect } from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';
import newImage from '../images/pexels-markus-spiske.jpg';

import { Loader } from '../components';
import { useGetNewsQuery } from '../services/techNewsApi';

const { Text, Title } = Typography;
const { Option } = Select;

const fillerImage = newImage;

const News = () => {
  const { data: techNews, isFetching } = useGetNewsQuery();
  // const [ news, setNews ] = useState([]);
  // const [ searchTerm, setSearchTerm ] = useState('');

  // useEffect(() => {
  //   const filteredData = techNews?.title.filter((news) => news.title.toLowerCase().includes(searchTerm.toLowerCase()));
  //   setNews(filteredData);

  // }, [techNews, searchTerm]);

  if(isFetching) return <Loader />;
  //console.log(techNews);

  return (
    <>
    {/* <div className="search-crypto">
        <input placeholder="Search News" onChange={(e) => setSearchTerm(e.target.value)} />
    </div> */}
    <Row gutter={[24,24]}>
      {techNews.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>
                  {news.title}
                </Title>
                <img style={{ maxWidth: '200px', maxHeight: '100px'}} src={fillerImage} alt="news"/>
              </div>
              <div className="provider-container">
                <div>
                  <Text className="provider-name">{news.source}</Text>
                </div>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
    </>
  )
}

export default News;