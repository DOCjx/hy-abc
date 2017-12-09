import dva from 'dva';

export default {
    namespace: 'items',
    state: { 
		images: [
			{key: 0,classname:"over",img:"items1.png",Classname:"on",number:"1"},
	    	{key: 1,classname:"hide",img:"items2.png",Classname:"",number:"2"},
	    	{key: 2,classname:"hide",img:"items3.png",Classname:"",number:"3"},
	    	{key: 3,classname:"hide",img:"items4.png",Classname:"",number:"4"}
	    ], 
	    n:0	   
	},
    reducers: {
    	'changeimg'(state, {payload: images}) {
    		
			return {
				...state,
				images:images.images,
				n:images.n
			}
		},
		'buttonChange'(state, {payload:imagesT}){
		// console.log(imagesT.key);
			return{
				...state,
				images:imagesT.images,
			    n:imagesT.key
			}
		},
		'arrowChange'(state, {payload:imagesw}){
			return{
				...state,
				images:imagesw.images,
			    n:imagesw.p
			}
		},
		'arrowchange'(state, {payload:imagesw}){
           
			return{
				...state,
				images:imagesw.images,
			    n:imagesw.h
			}
		}


}
};