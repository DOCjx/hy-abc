import React from 'react';
import PropTypes from 'prop-types';
import style from '../assets/style/anli.less';
import { Carousel ,Row, Col} from 'antd';
const UI = ({dispatch, lists}) => {
    console.log(lists)
    return (
        <div className="items-all">

            <div className="items-name">
              <Row>
                <Col xs={{span:15}} sm={{span:15}} lg={{span:15}}>
                <h2>江西师范大学财务处网站</h2>
                <img src={require("../assets/img/jiantou1.png")} className="name-img1"/>
                </Col>
               
              </Row>
            </div>
            <div className="items-content">
                <h3>作品简介</h3> 
                <p>提供及时公示学校财务处通知，展示最新动态，
                  收费公示功能，提供信息查询接口。方便管理员管理相关信息及发布信息。
                  整个网站页面设计清新，整洁，用户体验良好。</p>                                    
                <h3>主要成员</h3>
                <p className="item-person"> 王宏凯</p>                              
                <h3>指导老师</h3>
                <p className="item-teacher"> 朱虎平</p>

                 <div className="items-img">
                   <h2> 项目展示</h2>
                  <Row type="flex" gutter={16}>
                    <Col span={11}><img src={require("../assets/img/1.png")}/></Col> 
                    <Col span={11}><img src={require("../assets/img/3.png")}/></Col>
                  </Row> 
                  <Row type="flex" gutter={16}>   
                    <Col span={11}><img src={require("../assets/img/4.png")}/></Col> 
                    <Col span={11}><img src={require("../assets/img/5.png")}/></Col>    
                  </Row>
                </div>

            </div>
            
            
        </div>
    )
}
UI.propTypes = {
  
};
export default UI;