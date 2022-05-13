import React from 'react';
import { Switch, BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Navbar, Exchanges, Homepage, Stocks, News, StockDetails } from "./components";
import './App.css';

const App = () => {
  return (
    <div className="app">
        <div className="navbar">
            <Navbar />
        </div>
        <div className="main">
            <Layout>
                <div className="routes">
                    <Routes>
                        <Route path="/"
                            element={<Homepage />}
                        />
                        <Route path="/exchanges"
                            element={<Exchanges />}
                        />
                        <Route path="/stocks"
                            element={<Stocks />}
                        />
                        <Route path="/stock/:stockTicker"
                            element={<StockDetails />}
                        />
                        <Route path="/news"
                            element={<News />}
                        />
                    </Routes>
                </div>
            </Layout>
        <div className="footer">
            <Typography.Title level={5} style={{color: 'white', textAlign: 'center'}}>
                COPYRIGHT © 2022 Tech Bulletin
            </Typography.Title>
            <Space>
                <Link to="/">Home</Link>
                <Link to="/exchanges">Exchanges</Link>
                <Link to="/news">News</Link>
            </Space>
        </div>
        </div>
    </div>
  );
}

export default App;