import dva from 'dva';

export default {
    namespace: 'life',
    state: { 
		imageslife: [
			{key: 0,classname:"over",img:"left1.jpg",Classname:"on",number:"1"},
	    	{key: 1,classname:"hide",img:"left2.jpg",Classname:"  ",number:"2"},
	    	{key: 2,classname:"hide",img:"left3.jpg",Classname:"  ",number:"3"},
	    	{key: 3,classname:"hide",img:"left4.jpg",Classname:"  ",number:"4"}
	    ],   
	    n:0  
	},
    reducers: {
    	'changeimg'(state, {payload: imageslife}) {
    		
			return {
				...state,
				imageslife:imageslife.imageslife,
				n:imageslife.n
			}
		},
		'buttonChange'(state, {payload:imagesT}){
		// console.log(imagesT.key);
			return{
				...state,
				imageslife:imagesT.imageslife,
			    n:imagesT.key
			}
		},
		'arrowChange'(state, {payload:imagesw}){
			return{
				...state,
				imageslife:imagesw.imageslife,
			    n:imagesw.p
			}
		},
		'arrowchange'(state, {payload:imagesw}){
			return{
				...state,
				imageslife:imagesw.imageslife,
			    n:imagesw.h
			}
		}


}
};