import React, { useState } from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import { Country } from './component/Country';
import { Region } from './component/Region';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  FileTextOutlined
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import './index.css';

const { Header, Sider } = Layout;

const App = () => {

  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }

  const items1 = [
    getItem(<NavLink to="/country">Country</NavLink>, '1', <FileTextOutlined />),
    getItem(<NavLink to="/region">Region</NavLink>, '9', <FileTextOutlined />),
  ];


  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
      <Sider style={{
        overflow: 'auto',
        height: '100vh',
      }} trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          items={items1}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Routes>
          <Route path="/country" element={<Country />} />
          <Route path="/region" element={<Region />} />
          <Route path="*" element={<Country />} />
        </Routes>
      </Layout>
    </Layout>
  );
};

export default App;