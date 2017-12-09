import React from 'react';
import PropTypes from 'prop-types';
import style from '../public/assets/style/itemsstyle.less';
import { connect} from 'dva';

const UI = ({dispatch, items}) => {
	const {images} = items;
	let {n}=items;items
	const arrimg={
		1:[
			{key: 0,classname:"hide",img:"items1.png",Classname:"  ",number:"1"},
	    	{key: 1,classname:"over",img:"items2.png",Classname:"on",number:"2"},
	    	{key: 2,classname:"hide",img:"items3.png",Classname:"  ",number:"3"},
	    	{key: 3,classname:"hide",img:"items4.png",Classname:"  ",number:"4"}
		],
		2:[
			{key: 0,classname:"hide",img:"items1.png",Classname:"  ",number:"1"},
	    	{key: 1,classname:"hide",img:"items2.png",Classname:"  ",number:"2"},
	    	{key: 2,classname:"over",img:"items3.png",Classname:"on",number:"3"},
	    	{key: 3,classname:"hide",img:"items4.png",Classname:"  ",number:"4"}
		],
		3:[
			{key: 0,classname:"hide",img:"items1.png",Classname:"  ",number:"1"},
	    	{key: 1,classname:"hide",img:"items2.png",Classname:"  ",number:"2"},
	    	{key: 2,classname:"hide",img:"items3.png",Classname:"  ",number:"3"},
	    	{key: 3,classname:"over",img:"items4.png",Classname:"on",number:"4"}
		],
		0:[
			{key: 0,classname:"over",img:"items1.png",Classname:"on",number:"1"},
	    	{key: 1,classname:"hide",img:"items2.png",Classname:"  ",number:"2"},
	    	{key: 2,classname:"hide",img:"items3.png",Classname:"  ",number:"3"},
	    	{key: 3,classname:"hide",img:"items4.png",Classname:"  ",number:"4"}
		]//这个传回去的状态数组需要用【】这个东西进行打包
	};
	


	let timer=setTimeout(function changeimg() {
    	n++;
    	if (n>3) {
			    	n=0;
		}
		// console.log(n);
		dispatch({ 
			type:'items/changeimg', 
			payload:{
				images: arrimg[n],n		
			}			
		});
},4000);
 	
	function buttonChange(key){
	clearTimeout(timer);
	// console.log(key);
    dispatch({
 		type:'items/buttonChange',
 		payload:{
 		images:arrimg[key],key
 	}
    }); 
};

    // console.log(n);

 	function arrowChange(p){
 		clearTimeout(timer);
           p--;
             if (p<0) {
             	p=3
             }
 		dispatch({
 		type:'items/arrowChange',
 		payload:{
 		images:arrimg[p],p
 	}
    }); 
    		
};

	function arrowchange(h){
 		clearTimeout(timer);
        h++;
          if (h>3) {
          	h=0
          }
 		dispatch({
 		type:'items/arrowchange',
 		payload:{
 		images:arrimg[h],h
 	}
    }); 
    		
};	

	return (
		<div>
			<div className="items-banner">	
			 	<div className="items-leftchange" onClick={() => arrowChange(n)}> 
                    <img src={require(`../public/assets/img/itemsbtnleft.png`)}/>
			 	 </div>
			    <div className="items-imgwh">
			   	  	{
			   	  		images.map(function(item){
			   	  			return (
			   	  				<a key={item.key}><img key={item.key} className={item.classname} src={require(`../public/assets/img/${item.img}`)}/></a>
			   	  			)
			   	  		})
			   	  	}
				</div>	
				<ul>  
			   		{
			   			images.map(function(itemT) {
			   				return (
			   			 		<li key={itemT.key} className={itemT.Classname} onClick={() => buttonChange(itemT.key)}><div className="numder"></div></li>
			   				)
			   			})
			   		}
 				</ul>
 			
			     
		        
       		    <div className="items-rightchange" onClick={() => arrowchange(n)}> 
                 	<img src={require(`../public/assets/img/itemsbtnright.png`)}/>
       		    </div>
	    	</div>
	    </div>
	)
}
UI.propTypes = {
  
};
export default connect(
    ({items}) => ({items})
	)(UI);