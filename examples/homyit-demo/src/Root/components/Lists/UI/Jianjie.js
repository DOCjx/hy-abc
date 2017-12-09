import React from 'react';
import PropTypes from 'prop-types';
import style from '../assets/style/jianjie.less';
import { Row, Col } from 'antd';

const UI = ({dispatch, lists}) => {
	
	return (
		<Row>
		    <Col span={24} id={style.content}>
		    <Row span={11} id={style.text1}>
			    <h1>宏奕介绍</h1>
			    <h2>宏奕工作室</h2>
			    <img className={style.img1} src={require('../assets/img/yun.png')} alt=""/>
				<p>&nbsp;&nbsp;&nbsp;&nbsp;成立于2013年9月，是由团队核心12级王宏凯同志领着十余名团队成员和在江西师范大学计算机信息工程学院各领导、老师的大力支持下迅速成长起来的学生自主研发工作室。该工作室致力于Web开发，本着对“有爱同行，踏实求新”的团队精神的追求，开拓创新，不断进取，以超强的团队凝聚力和深厚的技术实力得到学院师生的一致肯定！</p>
			    <img className={style.img2} src={require('../assets/img/yun0.png')} alt=""/>
		    </Row>
		    <Row span={6} id={style.text2}>
			    <img className={style.img3} src={require('../assets/img/fishcar.png')} alt=""/>
			    <h2>专业竞赛</h2>
				<p>&nbsp;江西省软件服务外包大赛一等奖两项、三等奖一项</p>
				<p>&nbsp;中国智能机器人大赛三等奖一项</p>
				<p>&nbsp;中国大学生计算机设计大赛三等奖一项</p>
				<p>&nbsp;江西省计算机作品大赛二等奖一项、三等奖两项</p>
		    </Row>
		    <Row span={7} id={style.text3}>
		    	<img className={style.img4} src={require('../assets/img/sea.png')} alt=""/>
			    <h2>就业成绩</h2>
				<p>&nbsp;&nbsp;&nbsp;&nbsp;工作室2012级同学已经有数位拿到百度、阿里巴巴、腾讯、360、美团等国内知名互联网公司校招Offer！</p>
				<p>&nbsp;&nbsp;&nbsp;&nbsp;2012级、2013级同学就业平均月薪8000+，学院30年来就业质量最高的团队！</p>	
			</Row>
		    </Col>
		</Row>
	)
}
UI.propTypes = {
  
};
export default UI;