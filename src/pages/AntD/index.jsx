import React from 'react';
import { Layout, Menu } from "antd";
import { Link, Routes, Route } from 'react-router-dom';
import LoginPage from '../LoginPage';

const { Header, Content } = Layout;

const items = [
  { key: '1', label: <Link to="/ant">Home</Link> },
  { key: '2', label: <Link to="/ant/login">Login</Link> },
];

const AntDPage = () => {
  return (
    <Layout>
      <Header style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Menu theme="dark" mode="horizontal" items={items} />
      </Header>
      <Content style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<div>AntD Homepage</div>} />
          <Route path="login" element={<LoginPage />} />
        </Routes>
      </Content>
    </Layout>
  );
};

export default AntDPage;
