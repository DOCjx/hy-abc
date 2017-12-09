import React from 'react';
import PropTypes from 'prop-types';
import style from '../assets/style/footer.less';

import { Row, Col } from 'antd';
const UI = () => {

	return (


		<div>
			<footer>
				<img className="logo" src={require("../assets/img/LOGO.png")} title="" alt="" />

				<p> ♥ 宏奕的作品特别注重项目的技术性，无论是开发的技术沉淀还是后期维护都没有问题！会以极强的稳定性、优秀的用户体验、较好的安全性及负责的跟踪维护让您没有后顾之忧</p>
				<img src={require("../assets/img/微博.png")} title="" alt="" />
				<img src={require("../assets/img/邮件.png")} title="" alt="" />
				<img src={require("../assets/img/QQ登录.png")} title="" alt="" />

			</footer>
		</div>

	)
}
UI.propTypes = {

};
export default UI;