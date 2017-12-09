import React from 'react';
import { Icon,} from 'antd';

export default ({dispatch, lists, findContentDetail,findContent}) => {
	// const {findContentDetail} = lists;

	function handleContent(item){
		dispatch({
			type: "lists/handleContent",
			payload: {
	      		item,
	      		findContent
	    	}
		})
	}
	
	return (
		<div>
          <div className="h1">宏奕简介</div>
          <div className="listCont">
            <ul className="contUl">
            {
              findContentDetail.map(function (item) {
              	return (
	              	<li className="contLi" key={item.id}>
	              		<Icon type="caret-right"/><a onClick={() => handleContent(item.id)}>{item.name}</a>
	              	</li>
              	)
              })
          	}
            </ul>
          </div>
        </div>
	);
};
