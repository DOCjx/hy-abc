import React from 'react';
import PropTypes from 'prop-types';
import style from '../public/assets/style/lifeStyle.less';
import { connect } from 'dva';


const UI = ({dispatch, life}) => {
	const {imageslife} = life;
	let {n}=life;
	const arrimg={
		0:[
			{key: 0,classname:"over",img:"left1.jpg",Classname:"on",number:"1"},
	    	{key: 1,classname:"hide",img:"left2.jpg",Classname:"  ",number:"2"},
	    	{key: 2,classname:"hide",img:"left3.jpg",Classname:"  ",number:"3"},
	    	{key: 3,classname:"hide",img:"left4.jpg",Classname:"  ",number:"4"}
		],
		1:[
			{key: 0,classname:"hide",img:"left1.jpg",Classname:"  ",number:"1"},
	    	{key: 1,classname:"over",img:"left2.jpg",Classname:"on",number:"2"},
	    	{key: 2,classname:"hide",img:"left3.jpg",Classname:"  ",number:"3"},
	    	{key: 3,classname:"hide",img:"left4.jpg",Classname:"  ",number:"4"}
		],
		2:[
			{key: 0,classname:"hide",img:"left1.jpg",Classname:"  ",number:"1"},
	    	{key: 1,classname:"hide",img:"left2.jpg",Classname:"  ",number:"2"},
	    	{key: 2,classname:"over",img:"left3.jpg",Classname:"on",number:"3"},
	    	{key: 3,classname:"hide",img:"left4.jpg",Classname:"  ",number:"4"}
		],
		3:[
			{key: 0,classname:"hide",img:"left1.jpg",Classname:"  ",number:"1"},
	    	{key: 1,classname:"hide",img:"left2.jpg",Classname:"  ",number:"2"},
	    	{key: 2,classname:"hide",img:"left3.jpg",Classname:"  ",number:"3"},
	    	{key: 3,classname:"over",img:"left4.jpg",Classname:"on",number:"4"}
		]
		//这个传回去的状态数组需要用【】这个东西进行打包
	};
	let timer=setTimeout(function changeimg() {
    		n++;
    		if (n>3) {
		        	n=0;
		     	}
		dispatch({
			type:'life/changeimg',
			payload:{
				imageslife: arrimg[n],n
			}
		});
},3000);
	function buttonChange(key){

	clearTimeout(timer);
	// console.log(key);
    dispatch({
 		type:'life/buttonChange',
 		payload:{
 		imageslife:arrimg[key],key
 		}
    });
};
    function arrowChange(p){
    	clearTimeout(timer);
    	p--;
    	if (p<0) {
    		p=3
    	}
 		dispatch({
 		type:'life/arrowChange',
 		payload:{
 		imageslife:arrimg[p],p
 		}
    });
};
// `${item.img}`
	function arrowchange(h){
		clearTimeout(timer);
		h++;
		if (h>3) {
			h=0
		}
 	
 		dispatch({
 		type:'life/arrowchange',
 		payload:{
 		imageslife:arrimg[h],h
 		}
    });
};

	return (
		<div>
			<div className="banner">
				<img src={require("../public/assets/img/leftb.png")} className="beijingc"/>
			 	<div className="beiyongb" onTouchTap={() => arrowChange(n)}  ></div>
			 	<div className="leftchange" >
			 		<img src={require("../public/assets/img/lifeleft.png")} className="leftimg"/>
			 		<img src={require("../public/assets/img/lefta.png")} className="beijinga"/>
			 	</div>
			 	 <div className="imgwh">
			   	  	{
			   	  		imageslife.map(function(item){
			   	  			return (
			   	  				<a key={item.key}><img key={item.key} className={item.classname} src={require(`../public/assets/img/${item.img}`)} /></a>
			   	  			)
			   	  		})
			   	  	}

				</div>
				<ul>
			   		{
			   			imageslife.map(function(itemT) {
			   				return (
			   			 		<li key={itemT.key} className={itemT.Classname} onTouchTap={() => buttonChange(itemT.key)}></li>
			   				)
			   			})
			   		}
 				</ul>
       		    <div className="rightchange" onTouchTap={() => arrowchange(n)}>
       		    	<img src={require("../public/assets/img/liferight.png")} className="rightimg"/>
       		    	<img src={require("../public/assets/img/lefta.png")} className="beijingb"/>
       		    </div>
       		   
	    	</div>
	    </div>
	)
}
UI.propTypes = {

};
export default connect(
  ({life}) => ({life})
)(UI);