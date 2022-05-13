import React, { useState, useEffect } from 'react'
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';
import { useGetTrendingQuery } from '../services/trendingApi';

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: stocksList, isFetching } = useGetTrendingQuery(count);
  const [ stocks, setStocks ] = useState([]);
  const [ searchTerm, setSearchTerm ] = useState('');

  useEffect(() => {
    const filteredData = stocksList?.finance?.result[0]?.quotes.filter((ticker) => ticker.symbol.toLowerCase().includes(searchTerm.toLowerCase()));
    setStocks(filteredData);

  }, [stocksList, searchTerm]);

  if(isFetching) return 'Loading... ';
  //console.log(stocksList);
  // if (stocks !== undefined) {
  //   console.log(stocksList);
  // }

  return (
    <>
      <div className="search-crypto">
        <input placeholder="Search Ticker" onChange={(e) => setSearchTerm(e.target.value)} />
      </div>
      <Row gutter={[32, 32]} className="crypto-card-container">
        {stocks?.map((ticker) => (
          <Col xs={23} sm={12} lg={6} className="crypto-card" key={ticker.symbol}>
            <Link to={`/stock/${ticker.symbol}`}>
                <Card 
                  title={`${ticker.symbol} - ${ticker.shortName}`}
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