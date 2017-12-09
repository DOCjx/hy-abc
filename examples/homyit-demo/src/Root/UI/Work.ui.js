import React from 'react';
import PropTypes from 'prop-types';
import style from '../public/assets/style/workstyle.less';

import { Row, Col } from 'antd';
const UI = () => {
	
	return (
      	<div id={style.col}>
			<div className={style.php}>
				<span>前端开发</span>
				<br />
				<a>Javascript</a>
				<br />
				<a>HTML/CSS</a>
				<br />
				<a>HTML5</a>
			</div>

			<div className={style.php}>
				<span>前端开发</span>
				<br />
				<a>Javascript</a>
				<br />
				<a>HTML/CSS</a>
				<br />
				<a>HTML5</a>
			</div>
			
			<div className={style.php}>
				<span>数据处理</span>
				<br />
				<a>MYSQL</a>
				<br />
				<a>MONGODB</a>
				<br />
				<a>APACHE</a>
			</div>
<br/>
			<div className={style.js}>
				<span>图像处理</span>
				<br />
				<a>PHOTOSHOP</a>
				<br />
				<a>AI</a>
				<br />
			</div>

			<div className={style.js}>
				<span>开源作品</span>
				<br />
				<a>HYADMIN</a>
				<br />
				<a>HYRIAWEB</a>
			</div>
		</div>	
	)
}
UI.propTypes = {
  
};
export default UI;