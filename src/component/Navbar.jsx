
import React from 'react' // eslint-disable-next-line
import { Button, Menu, Typography, Avatar } from 'antd'  // eslint-disable-next-line
import {Link } from 'react-router-dom'; // eslint-disable-next-line
import {HomeOutlined, MoneyCollectOutlined, BulbOutline, FundOutline, MenuOutline, FileExcelOutlined, AccountBookFilled } from '@ant-design/icons';// eslint-disable-next-line
import { icons } from 'antd/es/image/PreviewGroup';
import icon from '../images/cryptocurrency.png';


const Navbar = () => {
  return (
    <div className='nav-container'>
      <div className='logo-container'>
        <Avatar src={icon} size='large' />
        <Typography.Title level={2} className='logo'>
            <Link to="/">Crypto Market</Link>
        </Typography.Title>
      </div>
      <Menu theme='dark'>
        <Menu.Item icon={<HomeOutlined></HomeOutlined>}>
            <Link to='/'>Home</Link>
        </Menu.Item>
        <Menu.Item icon={<AccountBookFilled></AccountBookFilled>}>
            <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
        </Menu.Item>
        <Menu.Item icon={<MoneyCollectOutlined></MoneyCollectOutlined>}>
            <Link to='/exchanges'>Exchanges</Link>
        </Menu.Item>
        <Menu.Item icon={<FileExcelOutlined></FileExcelOutlined>}>
            <Link to='/news'>News</Link>
        </Menu.Item>

      </Menu>
    </div>
  )
}

export default Navbar;
