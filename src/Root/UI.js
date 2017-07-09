import React from 'react';
import PropTypes from 'prop-types';
import Home from './components/Home';
import List from './components/List';
import Todo from './components/Todo';
import style from './public/assets/style/style.less';

import { Layout, Menu, Breadcrumb, Button } from 'antd';
const { Header, Content, Footer } = Layout;
const moduleMap = {Home, Todo, List};

const UI = ({dispatch, app}) => {

	const Module = moduleMap[app.key];

	function handlechangeModule({item, key, keyPath}) {
		dispatch({
      type: 'app/changeModule',
      payload: {
      	key,
      	keyPath
      }
    });

	}
	return(
    <Layout>
	    <Header style={{ position: 'fixed', width: '100%' }}>
	      <div className="logo" />
	      <Menu
	        theme="dark"
	        mode="horizontal"
	        defaultSelectedKeys={['2']}
	        style={{ lineHeight: '64px' }}
	        onClick={({item, key, keyPath}) => handlechangeModule({item, key, keyPath})}
	      >
	        <Menu.Item key="Home">
	        	Home
	        </Menu.Item>
	        <Menu.Item key="Todo" >
	        	Todo
	        </Menu.Item>
	        <Menu.Item key="List">
	        	List
	        </Menu.Item>
	      </Menu>
	    </Header>
	    <Content style={{ padding: '0 50px', marginTop: 64 }}>
	      <Breadcrumb style={{ margin: '12px 0' }}>
	        <Breadcrumb.Item>Home</Breadcrumb.Item>
	        <Breadcrumb.Item>{app.keyPath}</Breadcrumb.Item>
	      </Breadcrumb>
	      <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
					{Module && <Module />}
	      </div>
	    </Content>
	    <Footer style={{ textAlign: 'center' }}>
	      Ant Design ©2016 Created by Ant UED
	    </Footer>
	  </Layout>
	)
}
UI.propTypes = {
  dispatch: PropTypes.func.isRequired,
  app: PropTypes.object.isRequired,
};
export default UI;