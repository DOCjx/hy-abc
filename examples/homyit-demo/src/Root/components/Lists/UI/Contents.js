import React from 'react';
import Anli from './Anli';
import Life from './Life';
import Jianjie from './Jianjie';
import Chengyuan from './Chengyuan';

export default ({dispatch, lists}) => {
	const {content, findContent, contId} = lists;
	const cid = contId.pid;
	console.log(cid);
	
	
	
	return (
		<div>
			<div className="h1" >宏奕简介</div>
			{
				content.map((item) => {				
					if (item.id == 18) {	
						if (item.id == findContent) {					
							return (
								<div key={item.key}>
								<Jianjie 
									lists={lists}
									dispatch={dispatch}
								/>
								</div>
							)	
						}					
					}
					if (item.id >=6 && item.id <= 9 && item.pid == cid) {
						if (item.id == findContent) {					
							return (
								<div key={item.key}>
								<Life 
									item={item}
									dispatch={dispatch}
								/>
								</div>
							)	
						}					
					}
					if (item.id >=10 && item.id <= 12) {
						if (item.id == findContent) {					
							return (
								<div key={item.key}>
								<Anli 
									lists={lists}
									dispatch={dispatch}
								/>
								</div>
							)	
						}					
					}	
					if (item.id >=13 && item.id <= 17) {
						if (item.id == findContent) {					
							return (
								<div key={item.key}>
								<Chengyuan 
									lists={lists}
									dispatch={dispatch}
								/>
								</div>
							)	
						}					
					}							
				})
			}				
        </div>
	);
};
