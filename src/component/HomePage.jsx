import React from 'react'// eslint-disable-next-line
import millify from 'millify';// eslint-disable-next-line
import {Row, Typography, Col, Statistic} from 'antd';// eslint-disable-next-line
import {Link} from 'react-router-dom';// eslint-disable-next-line
import { useGetCryptosQuery } from '../Services/cryptoAPI';// eslint-disable-next-line
import {Cryptocurrencies, News} from '../component';


const {Title} = Typography;

const HomePage = () => { // eslint-disable-next-line
  const {data, isFetching} = useGetCryptosQuery();
  const globalStats = data?.data?.stats;

  if(isFetching) return 'Loding...'
  //console.log(data);


  return (
    <>
    <Title level={2} className='heading'>
      Crypto Analysis;
    </Title>
    <Row>
      <Col span={12}><Statistic title='Total Cryptocurrencies' value={globalStats.total}></Statistic></Col>
      <Col span={12}><Statistic title='Total Exchanges' value={millify(globalStats.totalexchanges)}></Statistic></Col>
      <Col span={12}><Statistic title='Total Market Cap' value={millify(globalStats.totalMarketCap)}></Statistic></Col>
      <Col span={12}><Statistic title='Total 24h Volume' value={millify(globalStats.total24hVolume)}></Statistic></Col>
      <Col span={12}><Statistic title='Total Markets' value={millify(globalStats.totalMarket)}></Statistic></Col>
    </Row>
    <div className='home-heading-container'>
      <Title level={2} className='home-title'>Top 10 Cryptocurrencies in the world</Title>
      <Title level={3} className='show-more'><Link to='/cryptocurrencies'>Show More</Link></Title>
    </div>
    <Cryptocurrencies simplified/>
    <div className='home-heading-container'>
    <Title level={2} className='home-title'>Latest crypto News</Title>
    <Title level={3} className='show-more'><Link to='/news'>Show More</Link></Title>
    </div>
    <News simplified/>
    </>
  )
}

export default HomePage
