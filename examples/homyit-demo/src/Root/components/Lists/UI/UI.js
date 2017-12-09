import React from 'react';
import PropTypes from 'prop-types';
import UIs from './UI/';
import style from './assets/style/style.less';
import { Layout, Menu, Breadcrumb, Button, Icon, Row, Col} from 'antd';



const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const UI = ({dispatch, lists}) => {

  const {isOpen} = lists;
  const {nav} = lists;
  const {cont} = lists;
  console.log(cont.id);
  function handleChangeDisplay({item}) {
     dispatch({
      type:"lists/changeDisplay",
      payload: item
     })
   } 

  function handleChangeContent({it}) {
    dispatch({
     type:"lists/changeContent",
     payload: it
    })
  }

  
	
	return (
	<Row className="listsrow">
	<Col xs={{span:24}} sm={{span:24}} lg={{span:24}}>
	<Layout className="listlayout">
    <Row>
    <Col xs={{span:24}} sm={{span:24}} lg={{span:24}}>
  	
        <div className="listslogo">
        	
        </div>
    
    </Col>
    </Row>
		
    <Content className="listcontent">      
      <Layout className="contentLayout">
        <Row>
        <Col xs={{span:6}} sm={{span:6}} lg={{span:6}}>
        <div className="listsleft">
        	<ul className="leftnavul">
            {
              nav.map(function (item) {
                if (item.pid == 0) {
                  return (
                      <li className="leftnavli" key={item.id}>
                          <a onClick={()=>handleChangeDisplay({item})}>{item.name}</a>
                          <ul className="leftul" key={item.id} style={{display:`${item.isOpen}`}}>
                          {
                            nav.map(function (it){
                              if (item.id == it.pid) {
                                return (
                                  <li key={it.id} className="leftli">
                                    <a onClick={()=>handleChangeContent({it})}>{it.name}</a>
                                  </li>
                                )
                              }
                            })
                          }
                          </ul>
                      </li>                            
                  )
                }                  
              })
            }
          </ul>
        </div>
        </Col>
        <Col xs={{span:18}} sm={{span:18}} lg={{span:18}}>
        <Content style={{ padding: '0 0', minHeight: 280 }}>
          <div className="listsright">
            
        </div>
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