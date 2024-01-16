import React from 'react'// eslint-disable-next-line
import {BrowserRouter as Router, Routes, Route,  Link} from 'react-router-dom';// eslint-disable-next-line
import {Layout, Typography, Space} from 'antd';
// eslint-disable-next-line
import {Navbar, HomePage, Exchanges, Cryptocurrencies, CryptoDetails, News} from './component';// eslint-disable-next-line
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <div className='navbar'>
        <Navbar></Navbar>
      </div>
      <div className='main'>
        <Layout>
          <div className="routes">
            <Routes>
              <Route path='/' element={<HomePage />}>
              </Route>
              <Route path='/exchanges' element={<Exchanges />}>
              </Route>
              <Route path='/cryptocurrencies' element={<Cryptocurrencies />}>
              </Route>
              <Route path='/crypto/:coinId' element={<CryptoDetails />}>
              </Route>
              <Route path='/news' element={<News />}>
              </Route>
            </Routes>
          </div>
        </Layout>
        <div className='footer'>
          <Typography.Title level={5} style={{color: 'white', textAlign: 'center'}}>
            Crypto Market<br/>
            All Right Reserved
          </Typography.Title>
          <Space>
            <Link to='/'>Home</Link>
            <Link to='/exchanges'>Exchanges</Link>
            <Link to='/news'>News</Link>
          </Space>
        </div>
      </div>
    </div>
  )
}

export default App;

