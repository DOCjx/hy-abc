import React from 'react';
import PropTypes from 'prop-types';
import style from '../public/assets/style/logostyle.less';

const UI = () => {
	return (
		<div id={style.loa}>
			<img src={require('../public/assets/img/logo.png')} alt=""/>
			<div id={style.loc}>
				<span>H</span>
				<span>O</span>
				<span>M</span>
				<span>Y</span>
				<span>I</span>
				<span>T</span>
				<span>&nbsp;</span>
				<span>S</span>
				<span>T</span>
				<span>U</span>
				<span>D</span>
				<span>I</span>
				<span>O</span>
			</div>
		</div>
	)
}
UI.propTypes = {

};
export default UI;