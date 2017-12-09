import React from 'react';
import PropTypes from 'prop-types';
import style from '../public/assets/style/footerstyle.less';

const UI = () => {

	return (
		<div id={style.footer}>
			<div id={style.foo1}>
				<img src={require('../public/assets/img/footer.png')}/>
			</div>
			<div id={style.foo2}>
				<img className={style.logo} src={require("../public/assets/img/log.png")} title="" alt="" />
				<p> ♥ 宏奕的作品特别注重项目的技术性，无论是开发的技术沉淀还是后期维护都没有问题！会以极强的稳定性、优秀的用户体验、较好的安全性及负责的跟踪维护让您没有后顾之忧</p>
				<a href=""><img src={require("../public/assets/img/微博.png")} title="" alt="" /></a>
				<a href=""><img src={require("../public/assets/img/邮件.png")} title="" alt="" /></a>
				<a href=""><img src={require("../public/assets/img/QQ登录.png")} title="" alt="" /></a>
			</div>
		</div>
	)
}
UI.propTypes = {

};
export default UI;