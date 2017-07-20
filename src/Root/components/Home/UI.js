/**
 * creat by DOCer 2017/7/10
 */
import React from 'react';
import PropTypes from 'prop-types';
import style from './assets/style/style.less';

const UI = () => {
    return (
        <div className="home-con">
            <img className='img' src={require('./assets/img/yay.jpg')} />
        </div>
    )
}
UI.propTypes = {

};
export default UI;