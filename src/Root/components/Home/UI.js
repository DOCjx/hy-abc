import React from 'react';
import PropTypes from 'prop-types';
import style from './assets/style/style.less';

const UI = () => {
	console.log('aaa')
	return (
		<div className="home-con">
			<img className='img' src={require('./assets/img/yay.jpg')} />
		</div>
	)
}
UI.propTypes = {
  
};
export default UI;