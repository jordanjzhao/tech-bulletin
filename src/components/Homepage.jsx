import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
//import { useGetNewsQuery } from '../services/techNewsApi';
import { useGetStocksQuery } from '../services/stockApi';
import { Cryptocurrencies, News } from '../components';

const { Title } = Typography;


const Homepage = () => {
  const { data, isFetching } = useGetStocksQuery();
  const SnPFutures = data?.marketSummaryAndSparkResponse?.result[0]
  const DowFutures = data?.marketSummaryAndSparkResponse?.result[1]
  const NasdaqFutures = data?.marketSummaryAndSparkResponse?.result[2]
  const RussellFutures = data?.marketSummaryAndSparkResponse?.result[3]
  const CrudeOil = data?.marketSummaryAndSparkResponse?.result[4]
  const BTCUSD = data?.marketSummaryAndSparkResponse?.result[12]

  //console.log(data);
  if(isFetching) return 'Loading... ';

  return (
    <>
      <Title level={2} className="heading">Previous Market Close</Title>
      <Row>
        <Col span={12}><Statistic title="S&P Futures" value={SnPFutures.spark.previousClose} /></Col>
        <Col span={12}><Statistic title="Dow Futures" value={DowFutures.spark.previousClose} /></Col>
        <Col span={12}><Statistic title="Nasdaq Futures" value={NasdaqFutures.spark.previousClose} /></Col>
        <Col span={12}><Statistic title="Russell 2000 Futures" value={RussellFutures.spark.previousClose} /></Col>
        <Col span={12}><Statistic title="Crude Oil" value={CrudeOil.spark.previousClose} /></Col>
        <Col span={12}><Statistic title="BTC USD" value={BTCUSD.spark.previousClose} /></Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">Trending Stocks</Title>
        <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show More</Link></Title>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Title level={2} className="home-title">Latest Tech News</Title>
        <Title level={3} className="show-more"><Link to="/news">Show More</Link></Title>
      </div>
      <News simplified />
    </>
  )
}

export default Homepage;