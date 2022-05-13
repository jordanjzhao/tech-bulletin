import React, { useState } from 'react'
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';
import { useGetTrendingQuery } from '../services/trendingApi';
import { COOKIE_NAME_PRERENDER_BYPASS } from 'next/dist/server/api-utils';

const Cryptocurrencies = () => {

  const { data: stocksList, isFetching } = useGetTrendingQuery();
  const [ stocks, setStocks ] = useState(stocksList?.finance?.result[0]?.quotes);

  if(isFetching) return 'Loading... ';
  //console.log(stocksList);

  return (
    <>
      <Row gutters={[32, 32]} className="crypto-card-container">
        {stocks.map((ticker) => (
          <Col xs={23} sm={12} lg={6} className="crypto-card" key={ticker.symbol}>
            <Link to={`/stock/${ticker.symbol}`}>
                <Card 
                  title={`${ticker.symbol} - ${ticker.longName}`}
                  extra={`${ticker.exchange}`}
                  hoverable
                >
                  <p>Price: {ticker.regularMarketPrice}</p>
                  <p>Previous Close: {ticker.regularMarketPreviousClose}</p>
                  <p>Change Percent: {millify(ticker.regularMarketChangePercent)}%</p>
                  <p>Trending Score: {millify(ticker.trendingScore)} </p>
                </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Cryptocurrencies;