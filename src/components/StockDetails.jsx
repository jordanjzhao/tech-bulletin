import React, { useState } from 'react';
import HTMLReactParser from 'html-react-parser';
import { useParams } from 'react-router-dom';
import millify from 'millify';
import { Col, Row, Typography, Select } from 'antd';
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined, StockOutlined, CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';

import { Loader } from '../components';
import { useGetStockDetailsQuery, useGetChartQuery } from '../services/stockApi';

const { Title, Text } = Typography;
const { Option } = Select;

const StockDetails = () => {
  const { stockTicker } = useParams();
  const [ timePeriod, setTimePeriod ] = useState('7d');
  const { data, isFetching } = useGetStockDetailsQuery(stockTicker);
  const stockDetails = data?.quoteType;

  const { chart, isFetchingChart } = useGetChartQuery(stockTicker);

  //console.log(data);
  if(isFetching) return <Loader />;

  //const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

  const stats = [
    { title: 'Price', value: `$ ${data?.price?.regularMarketPrice?.raw}`, icon: <DollarCircleOutlined /> },
    { title: '52 Week Change', value: `${data?.defaultKeyStatistics?.['52WeekChange']?.fmt}`, icon: <StockOutlined /> },
    { title: 'Regular Market Volume', value: `${data?.price?.regularMarketVolume.fmt}`, icon: <ThunderboltOutlined /> },
    { title: 'Market Cap', value: `$ ${data?.price?.marketCap?.fmt}`, icon: <DollarCircleOutlined /> },
    { title: 'Forward P/E Ratio', value: `${data?.defaultKeyStatistics?.forwardPE?.fmt}`, icon: <TrophyOutlined /> },
  ];

   const genericStats = [
     { title: 'Target High Price', value: `$ ${data?.financialData?.targetHighPrice?.fmt}`, icon: <CaretUpOutlined /> },
     { title: 'Target Low Price', value: `$ ${data?.financialData?.targetLowPrice?.fmt}`, icon: <CaretDownOutlined /> },
     { title: 'Total Cash', value: `$ ${data?.financialData?.totalCash?.fmt}`, icon: <ExclamationCircleOutlined /> },
     { title: 'Total Debt', value: `$ ${data?.financialData?.totalDebt?.fmt}`, icon: <ExclamationCircleOutlined /> },
     { title: 'Recommendation', value: `${data?.financialData?.recommendationKey}`, icon: <ExclamationCircleOutlined /> },
   ];

  

  return (
    <Col className="coin-detail-container">
        <Col className="coin-heading-container">
          <Title level={2} className="coin-name">
            {stockDetails?.shortName} ({stockDetails?.symbol}) Price
          </Title>
          <p>
            {stockDetails?.shortName} live price.
            View value statistics, market cap and supply.
          </p>
        </Col>
        {/* <Select 
          defaultValue="7d" 
          className="select-timeperiod" 
          placeholder="Select Time Period"
          onChange={(value) => setTimePeriod(value)}
        >
          {time.map((date) => <Option key={date}>{date}</Option>)};
        </Select> */}
        {/*LINECHART HERE*/}
        <Col className="stats-container">
          <Col className="coin-value-statistics">
            <Col className="coin-value-statistics-heading">
              <Title level={3} className="coin-details-heading">
                {stockDetails?.shortName} Value Statistics
              </Title>
              <p>
                An overview showing the stats of {stockDetails?.shortName}
              </p>
            </Col>
            {stats.map(({ icon, title, value }) => (
            <Col className="coin-stats">
              <Col className="coin-stats-name">
                <Text>{icon}</Text>
                <Text>{title}</Text>
              </Col>
              <Text className="stats">{value}</Text>
            </Col>
          ))}
          </Col>
          <Col className="other-stats-info">
            <Col className="coin-value-statistics-heading">
              <Title level={3} className="coin-details-heading">
                Other Statistics
              </Title>
              <p>
                Other stats of {stockDetails?.shortName}
              </p>
            </Col>
            {genericStats.map(({ icon, title, value }) => (
            <Col className="coin-stats">
              <Col className="coin-stats-name">
                <Text>{icon}</Text>
                <Text>{title}</Text>
              </Col>
              <Text className="stats">{value}</Text>
            </Col>
          ))}
          </Col>
        </Col>
        <Col className="coin-desc-link">
          <Row className="coin-desc">
            <Title level={3} className="coin-details-heading">
              {stockDetails?.shortName}
            </Title>
            {HTMLReactParser(data?.summaryProfile?.longBusinessSummary)}
          </Row>
          <Col className="coin-links">
            <Title level={3} className="coin-details-heading">
              Website
            </Title>
            {data?.summaryProfile?.website}
          </Col>
        </Col>
    </Col>
  )
}

export default StockDetails;