import React from 'react';
import PropTypes from 'prop-types';
import membersStyle from '../public/assets/style/membersStyle.less';
import { connect } from 'dva';

import { Row, Col } from 'antd';

const UI = ({dispatch, members}) => {
    const {peoples} = members;
    const {gradeNow} = members;
    const peopleNow = peoples.filter(item => item.grade==gradeNow);
    function handleChangeMembers(key) {
        dispatch({
            type:"members/changeMembers",
            payload: key
        })
    } 
	return (
        <div>
            <Row className="members-tag">
                <Col span={4} offset={3} className="bear">
                <img src={require('../public/assets/img/bear.png')} />
                </Col>
            </Row>
            <Row className="members">
                <Col span={4} offset={3} className="members-nav">
                    <ul>
                    {
                        peoples.map((elem, index) => {
                            const color = elem.grade == gradeNow ? "rgb(19,185,203)" : "transparent";
                            return <li key={index}  onClick={() => handleChangeMembers(elem.grade)}><a style={{backgroundColor: `${color}`}} >{elem.title}</a></li>
                       })                 
                    }
                    </ul>
                </Col>
                <Col span={14} offset={1}className="members-name">
                  
                        {
                           peopleNow.map((elem,index) => {
                            console.log(elem)
                              return (
                                <ul key={index}>
                                    {
                                        elem.gradeMembers.map((el,index)=>{
                                            return (<li key={index}><a href={el.url}>{el.name}</a></li>)
                                        })
                                    }

                                </ul>
                              )
                        
                             })       
                        }
                   
                   
                </Col>
            </Row>
        </div>
	)
}
UI.propTypes = {
  };

export default connect(
  ({members}) => ({members})
)(UI);