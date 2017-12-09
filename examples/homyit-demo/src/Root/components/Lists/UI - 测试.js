import React from 'react';
import PropTypes from 'prop-types';
import style from './assets/style/style.less';
import { Layout, Menu, Breadcrumb, Button, Icon, Row, Col} from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const UI = ({dispatch, lists}) => {

  const {isOpen} = lists;
  function handleChangeDisplay(e) {

     dispatch({
      type:"lists/changeDisplay",
     })
   } 
	
	return (
	<Row className="listsrow">
	<Col span={24}>
	<Layout className="listlayout">
	<Header className="listsheader">
      <div className="listslogo">
      	
      </div>
    </Header>
		
    <Content className="listcontent">
      
      <Layout style={{ padding: '24px 0' }}>
        <Row>
        <Col span={6}>
        <div className="listsleft">
        	<ul className="leftnavul">
        		<li className="leftnavli"
            onClick={handleChangeDisplay}><a>123{name}</a>
            </li>
        			<ul className="leftul" style={{display:`${isOpen}`}}>
    						<li className="leftli"><a>haha</a></li>
    						<li className="leftli"><a>haha</a></li>
    						<li className="leftli"><a>haha</a></li>
        			</ul>
        	</ul>
        	<ul className="leftnavul">
        		<li className="leftnavli"><a>123</a></li>
        			<ul className="leftul">
    						<li className="leftli"><a>haha</a></li>
    						<li className="leftli"><a>haha</a></li>
    						<li className="leftli"><a>haha</a></li>
        			</ul>
        	</ul>
        	<ul className="leftnavul">
        		<li className="leftnavli"><a>123</a></li>
        			<ul className="leftul">
    						<li className="leftli"><a>haha</a></li>
    						<li className="leftli"><a>haha</a></li>
    						<li className="leftli"><a>haha</a></li>
        			</ul>
        	</ul>
        </div>
        </Col>
        <Col span={16} offset={2}>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
          Content
        </Content>
        </Col>
        </Row>
      </Layout>
      
    </Content>
    
    <Footer style={{ textAlign: 'center' }}>
      Ant Design ©2016 Created by Ant UED
    </Footer>
  </Layout>
  </Col>
  </Row>
	)
}
UI.propTypes = {
  
};
export default UI;