import React from 'react';
import './App.css';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css'
import { Switch, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Profile from './components/Profile'
import Report from './components/Report'
import ErrorPage from './components/ErrorPage'
import { HomeOutlined, FileAddOutlined, UserOutlined } from '@ant-design/icons'
const { Header, Footer, Content } = Layout

function App() {
  return (
    <div className="App">
      <Layout>
        <Header>
         <Menu mode="horizontal" theme="dark">
           <Menu.Item key="home" icon={<HomeOutlined/>}>
             <Link to='/'>Home</Link>
           </Menu.Item>
           <Menu.Item key="report" icon={<FileAddOutlined />}>
             <Link to='/report'>Report</Link>
           </Menu.Item>
           <Menu.Item key="profile" icon={<UserOutlined />}>
             <Link to='/profile'>Profile</Link>
           </Menu.Item>
         </Menu>
        </Header>
        <Content>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/report" component={Report} />
            <Route path="/profile" component={Profile} />
            <Route component={ErrorPage} />
          </Switch>
        </Content>
        <Footer>

        </Footer>
      </Layout>
    </div>
  );
}

export default App;
