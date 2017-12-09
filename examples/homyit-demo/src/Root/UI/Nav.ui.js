import React from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import navStyle from '../public/assets/style/navStyle.less';
import {Line,Layer,Stage,Star} from 'react-konva';

const UI = ({dispatch, nav, handleLink}) => {
  //console.log(nav);
  const {stars,navs,line} = nav;
  let {i} = nav;
  // console.log(stars);
  //console.log(stageHeight);
  //console.log(i);
  const star={
    0:[{key: 2,x: '60', y: '40', id:2 ,intSize: 2 ,outSize: 8, rotation:15}],
    1:[
      {key: 2,x: '60', y: '40', id:2,intSize: 2 ,outSize: 11, rotation:15},
      {key: 3,x: '115',y: '20', id:3,intSize: 2 ,outSize: 8}
    ],
    2:[
      {key: 2,x: '60', y: '40', id:2,intSize: 2 ,outSize: 8, rotation:15},
      {key: 3,x: '115',y: '20', id:3,intSize: 2 ,outSize: 8},
      {key: 4,x: '140',y: '80', id:4,intSize: 2 ,outSize: 8, rotation:115}
    ],
    3:[{key: 1,x: '83', y: '128',id:1,intSize: 2 ,outSize: 8, rotation:310},
      {key: 2,x: '60', y: '40', id:2,intSize: 2 ,outSize: 11, rotation:15},
      {key: 3,x: '115',y: '20', id:3,intSize: 2 ,outSize: 11},
      {key: 4,x: '140',y: '80', id:4,intSize: 2 ,outSize: 8, rotation:90}
    ],
    4:[{key: 1,x: '83', y: '128',id:1,intSize: 2 ,outSize: 11, rotation:30},
      {key: 2,x: '60', y: '40', id:2,intSize: 2 ,outSize: 8, rotation:115},
      {key: 3,x: '115',y: '20', id:3,intSize: 2 ,outSize: 8},
      {key: 4,x: '140',y: '80', id:4,intSize: 2 ,outSize: 11, rotation:90},
      {key: 5,x: '105',y: '200',id:5,intSize: 2 ,outSize: 8, rotation:15}
      ],
    5:[{key: 1,x: '83', y: '128',id:1,intSize: 2 ,outSize: 8, rotation:30},
      {key: 2,x: '60', y: '40', id:2,intSize:2 ,outSize: 8, rotation:115},
      {key: 3,x: '115',y: '20', id:3,intSize: 2 ,outSize: 8},
      {key: 4,x: '140',y: '80', id:4,intSize: 2 ,outSize: 11, rotation:190},
      {key: 5,x: '105',y: '200',id:5,intSize: 2 ,outSize: 8, rotation:15},
      {key: 6,x: '70', y: '255',id:6,intSize: 2 ,outSize: 11}
      ],
    6:[{key: 1,x: '83', y: '128',id:1,intSize: 2 ,outSize: 11, rotation:30},
      {key: 2,x: '60', y: '40', id:2,intSize: 2 ,outSize: 11, rotation:115},
      {key: 3,x: '115',y: '20', id:3,intSize: 2 ,outSize: 8},
      {key: 4,x: '140',y: '80', id:4,intSize: 2 ,outSize: 8, rotation:90},
      {key: 5,x: '105',y: '200',id:5,intSize: 2 ,outSize: 8, rotation:15},
      {key: 6,x: '70', y: '255',id:6,intSize: 2 ,outSize: 11},
      {key: 7,x: '115',y: '303',id:7,intSize: 2 ,outSize: 8, rotation:115}
    ],
    7:[{key: 1,x: '83', y: '128',id:1,intSize: 2 ,outSize: 8, rotation:30},
      {key: 2,x: '60', y: '40', id:2,intSize: 2 ,outSize: 8, rotation:15},
      {key: 3,x: '115',y: '20', id:3,intSize: 2 ,outSize: 8, rotation:15},
      {key: 4,x: '140',y: '80', id:4,intSize: 2 ,outSize: 11, rotation:90},
      {key: 5,x: '105',y: '200',id:5,intSize: 2 ,outSize: 11, rotation:15},
      {key: 6,x: '70', y: '255',id:6,intSize: 2 ,outSize: 8, rotation:15},
      {key: 7,x: '115',y: '303',id:7,intSize: 2 ,outSize: 11, rotation:15}
    ],
    8:[{key: 1,x: '83', y: '128',id:1,intSize: 2 ,outSize: 8, rotation:15},
      {key: 2,x: '60', y: '40', id:2,intSize: 2 ,outSize: 8},
      {key: 3,x: '115',y: '20', id:3,intSize: 2 ,outSize: 11, rotation:15},
      {key: 4,x: '140',y: '80', id:4,intSize: 2 ,outSize: 8, rotation:45},
      {key: 5,x: '105',y: '200',id:5,intSize: 2 ,outSize: 8, rotation:15},
      {key: 6,x: '70', y: '255',id:6,intSize: 2 ,outSize: 11, rotation:52},
      {key: 7,x: '115',y: '303',id:7,intSize: 2 ,outSize: 8, rotation:15}
    ],
    9:[{key: 1,x: '83', y: '128',id:1,intSize: 2 ,outSize: 11, rotation:75},
      {key: 2,x: '60', y: '40', id:2,intSize: 2 ,outSize: 11, rotation:15},
      {key: 3,x: '115',y: '20', id:3,intSize: 2 ,outSize: 8},
      {key: 4,x: '140',y: '80', id:4,intSize: 2 ,outSize: 11, rotation:15},
      {key: 5,x: '105',y: '200',id:5,intSize: 2 ,outSize: 8, rotation:25},
      {key: 6,x: '70', y: '255',id:6,intSize: 2 ,outSize: 8, rotation:15},
      {key: 7,x: '115',y: '303',id:7,intSize: 2 ,outSize: 11, rotation:80}
    ],
    10:[{key: 1,x: '83', y: '128',id:1,intSize: 2 ,outSize: 11},
      {key: 2,x: '60', y: '40', id:2,intSize: 2 ,outSize: 8, rotation:150},
      {key: 3,x: '115',y: '20', id:3,intSize: 2 ,outSize: 11, rotation:115},
      {key: 4,x: '140',y: '80', id:4,intSize: 2 ,outSize: 8, rotation:15},
      {key: 5,x: '105',y: '200',id:5,intSize: 2 ,outSize: 8, rotation:125},
      {key: 6,x: '70', y: '255',id:6,intSize: 2 ,outSize: 11, rotation:15},
      {key: 7,x: '115',y: '303',id:7,intSize: 2 ,outSize: 8, rotation:155}
    ]
  }

  const starPhone={
    0:[{key: 2,x: '30', y: '35', id:2 ,intSize: 2 ,outSize: 8, rotation:15}],
    1:[
      {key: 2,x: '30', y: '35', id:2,intSize: 2 ,outSize: 11, rotation:15},
      {key: 3,x: '75',y: '20', id:3,intSize: 2 ,outSize: 8}
    ],
    2:[
      {key: 2,x: '30', y: '35', id:2,intSize: 2 ,outSize: 8, rotation:15},
      {key: 3,x: '75',y: '20', id:3,intSize: 2 ,outSize: 8},
      {key: 4,x: '90',y: '60', id:4,intSize: 2 ,outSize: 8, rotation:115}
    ],
    3:[{key: 1,x: '52', y: '87',id:1,intSize: 2 ,outSize: 8, rotation:310},
      {key: 2,x: '30', y: '35', id:2,intSize: 2 ,outSize: 11, rotation:15},
      {key: 3,x: '75',y: '20', id:3,intSize: 2 ,outSize: 11},
      {key: 4,x: '90',y: '60', id:4,intSize: 2 ,outSize: 8, rotation:90}
    ],
    4:[{key: 1,x: '52', y: '87',id:1,intSize: 2 ,outSize: 11, rotation:30},
      {key: 2,x: '30', y: '35', id:2,intSize: 2 ,outSize: 8, rotation:115},
      {key: 3,x: '75',y: '20', id:3,intSize: 2 ,outSize: 8},
      {key: 4,x: '90',y: '60', id:4,intSize: 2 ,outSize: 11, rotation:90},
      {key: 5,x: '65',y: '135',id:5,intSize: 2 ,outSize: 8, rotation:15}
      ],
    5:[{key: 1,x: '52', y: '87',id:1,intSize: 2 ,outSize: 8, rotation:30},
      {key: 2,x: '30', y: '35', id:2,intSize:2 ,outSize: 8, rotation:115},
      {key: 3,x: '75',y: '20', id:3,intSize: 2 ,outSize: 8},
      {key: 4,x: '90',y: '60', id:4,intSize: 2 ,outSize: 11, rotation:190},
      {key: 5,x: '65',y: '135',id:5,intSize: 2 ,outSize: 8, rotation:15},
      {key: 6,x: '35', y: '170',id:6,intSize: 2 ,outSize: 11}
      ],
    6:[{key: 1,x: '52', y: '87',id:1,intSize: 2 ,outSize: 11, rotation:30},
      {key: 2,x: '30', y: '35', id:2,intSize: 2 ,outSize: 11, rotation:115},
      {key: 3,x: '75',y: '20', id:3,intSize: 2 ,outSize: 8},
      {key: 4,x: '90',y: '60', id:4,intSize: 2 ,outSize: 8, rotation:90},
      {key: 5,x: '65',y: '135',id:5,intSize: 2 ,outSize: 8, rotation:15},
      {key: 6,x: '35', y: '170',id:6,intSize: 2 ,outSize: 11},
      {key: 7,x: '60',y: '207',id:7,intSize: 2 ,outSize: 8, rotation:115}
    ],
    7:[{key: 1,x: '52', y: '87',id:1,intSize: 2 ,outSize: 8, rotation:30},
      {key: 2,x: '30', y: '35', id:2,intSize: 2 ,outSize: 8, rotation:15},
      {key: 3,x: '75',y: '20', id:3,intSize: 2 ,outSize: 8, rotation:15},
      {key: 4,x: '90',y: '60', id:4,intSize: 2 ,outSize: 11, rotation:90},
      {key: 5,x: '65',y: '135',id:5,intSize: 2 ,outSize: 11, rotation:15},
      {key: 6,x: '35', y: '170',id:6,intSize: 2 ,outSize: 8, rotation:15},
      {key: 7,x: '60',y: '207',id:7,intSize: 2 ,outSize: 11, rotation:15}
    ],
    8:[{key: 1,x: '52', y: '87',id:1,intSize: 2 ,outSize: 8, rotation:15},
      {key: 2,x: '30', y: '35', id:2,intSize: 2 ,outSize: 8},
      {key: 3,x: '75',y: '20', id:3,intSize: 2 ,outSize: 11, rotation:15},
      {key: 4,x: '90',y: '60', id:4,intSize: 2 ,outSize: 8, rotation:45},
      {key: 5,x: '65',y: '135',id:5,intSize: 2 ,outSize: 8, rotation:15},
      {key: 6,x: '35', y: '170',id:6,intSize: 2 ,outSize: 11, rotation:52},
      {key: 7,x: '60',y: '207',id:7,intSize: 2 ,outSize: 8, rotation:15}
    ],
    9:[{key: 1,x: '52', y: '87',id:1,intSize: 2 ,outSize: 11, rotation:75},
      {key: 2,x: '30', y: '35', id:2,intSize: 2 ,outSize: 11, rotation:15},
      {key: 3,x: '75',y: '20', id:3,intSize: 2 ,outSize: 8},
      {key: 4,x: '90',y: '60', id:4,intSize: 2 ,outSize: 11, rotation:15},
      {key: 5,x: '65',y: '135',id:5,intSize: 2 ,outSize: 8, rotation:25},
      {key: 6,x: '35', y: '170',id:6,intSize: 2 ,outSize: 8, rotation:15},
      {key: 7,x: '60',y: '207',id:7,intSize: 2 ,outSize: 11, rotation:80}
    ],
    10:[{key: 1,x: '52', y: '87',id:1,intSize: 2 ,outSize: 11},
      {key: 2,x: '30', y: '35', id:2,intSize: 2 ,outSize: 8, rotation:150},
      {key: 3,x: '75',y: '20', id:3,intSize: 2 ,outSize: 11, rotation:115},
      {key: 4,x: '90',y: '60', id:4,intSize: 2 ,outSize: 8, rotation:15},
      {key: 5,x: '65',y: '135',id:5,intSize: 2 ,outSize: 8, rotation:125},
      {key: 6,x: '35', y: '170',id:6,intSize: 2 ,outSize: 11, rotation:15},
      {key: 7,x: '60',y: '207',id:7,intSize: 2 ,outSize: 8, rotation:155}
    ]
  }

  const linesPhone={
    0:[
      {key:1, points:[30, 35]}
    ],
    1:[
      {key:1, points:[30, 35, 75, 20]}
    ],
    2:[
      {key:1, points:[30, 35, 75, 20, 90, 60]}
    ],
    3:[
      {key:1, points:[30, 35, 75, 20, 90, 60, 52, 87]}
    ],
    4:[
      {key:1, points:[30, 35, 75, 20, 90, 60, 52, 87, 65, 135]}
    ],
    5:[
      {key:1, points:[30, 35, 75, 20, 90, 60, 52, 87, 65, 135, 35, 170]}
    ],
    6:[
      {key:1, points:[30, 35, 75, 20, 90, 60, 52, 87, 65, 135, 35, 170, 60 ,207]}
    ],
    7:[
      {key:1, points:[30, 35, 75, 20, 90, 60, 52, 87, 65, 135, 35, 170, 60 ,207]}
    ],
    8:[
      {key:1, points:[30, 35, 75, 20, 90, 60, 52, 87, 65, 135, 35, 170, 60 ,207]}
    ],
    9:[
      {key:1, points:[30, 35, 75, 20, 90, 60, 52, 87, 65, 135, 35, 170, 60 ,207]}
    ],
    10:[
      {key:1, points:[30, 35, 75, 20, 90, 60, 52, 87, 65, 135, 35, 170, 60 ,207]}
    ]
  }
  const lines={
    0:[
      {key:1, points:[60, 40]}
    ],
    1:[
      {key:1, points:[60, 40, 115, 20]}
    ],
    2:[
      {key:1, points:[60, 40, 115, 20, 140, 80]}
    ],
    3:[
      {key:1, points:[60, 40, 115, 20, 140, 80, 83, 128]}
    ],
    4:[
      {key:1, points:[60, 40, 115, 20, 140, 80, 83, 128, 105, 200]}
    ],
    5:[
      {key:1, points:[60, 40, 115, 20, 140, 80, 83, 128, 105, 200, 70, 255]}
    ],
    6:[
      {key:1, points:[60, 40, 115, 20, 140, 80, 83, 128, 105, 200, 70, 255, 115 ,303]}
    ],
    7:[
      {key:1, points:[60, 40, 115, 20, 140, 80, 83, 128, 105, 200, 70, 255, 115 ,303]}
    ],
    8:[
      {key:1, points:[60, 40, 115, 20, 140, 80, 83, 128, 105, 200, 70, 255, 115 ,303]}
    ],
    9:[
      {key:1, points:[60, 40, 115, 20, 140, 80, 83, 128, 105, 200, 70, 255, 115 ,303]}
    ],
    10:[
      {key:1, points:[60, 40, 115, 20, 140, 80, 83, 128, 105, 200, 70, 255, 115 ,303]}
    ]
  }


  const addNav={
    0:[{key: 1,href: 'javascript:;', className:'nav1',name:'首页' ,id: 1}],
    1:[{key: 1,href: 'javascript:;', className:'nav1',name:'首页' ,id: 1}],
    2:[{key: 1,href: 'javascript:;', className:'nav1',name:'首页' ,id: 1}],
    3:[{key: 1,href: 'javascript:;', className:'nav1',name:'首页' ,id: 1},
      {key: 2,href: 'javascript:;', className:'nav2',name:'宏奕生活' ,id: 2}
    ],
    4:[{key: 1,href: 'javascript:;', className:'nav1',name:'首页' ,id: 1},
      {key: 2,href: 'javascript:;', className:'nav2',name:'宏奕生活' ,id: 2},
      {key: 3,href: 'javascript:;', className:'nav3',name:'就业方向' ,id: 3}
      ],
    5:[{key: 1,href: 'javascript:;', className:'nav1',name:'首页' ,id: 1},
      {key: 2,href: 'javascript:;', className:'nav2',name:'宏奕生活' ,id: 2},
      {key: 3,href: 'javascript:;',className:'nav3',name:'就业方向' ,id: 3},
      {key: 4,href: 'javascript:;', className:'nav4',name:'项目案例' ,id: 4}
      ],
    6:[{key: 1,href: 'javascript:;', className:'nav1',name:'首页' ,id: 1},
      {key: 2,href: 'javascript:;', className:'nav2',name:'宏奕生活' ,id: 2},
      {key: 3,href: 'javascript:;', className:'nav3',name:'就业方向' ,id: 3},
      {key: 4,href: 'javascript:;', className:'nav4',name:'项目案例' ,id: 4},
      {key: 5,href: 'javascript:;', className:'nav5',name:'宏奕成员' ,id: 5}
    ],
    7:[{key: 1,href: 'javascript:;', className:'nav1',name:'首页' ,id: 1},
      {key: 2,href: 'javascript:;', className:'nav2',name:'宏奕生活' ,id: 2},
      {key: 3,href: 'javascript:;', className:'nav3',name:'就业方向' ,id: 3},
      {key: 4,href: 'javascript:;', className:'nav4',name:'项目案例' ,id: 4},
      {key: 5,href: 'javascript:;', className:'nav5',name:'宏奕成员' ,id: 5}
    ],
    8:[{key: 1,href: 'javascript:;', className:'nav1',name:'首页' ,id: 1},
      {key: 2,href: 'javascript:;',className:'nav2',name:'宏奕生活' ,id: 2},
      {key: 3,href: 'javascript:;', className:'nav3',name:'就业方向' ,id: 3},
      {key: 4,href: 'javascript:;', className:'nav4',name:'项目案例' ,id: 4},
      {key: 5,href: 'javascript:;', className:'nav5',name:'宏奕成员' ,id: 5}
    ],
    9:[{key: 1,href: 'javascript:;', className:'nav1',name:'首页' ,id: 1},
      {key: 2,href: 'javascript:;', className:'nav2',name:'宏奕生活' ,id: 2},
      {key: 3,href: 'javascript:;', className:'nav3',name:'就业方向' ,id: 3},
      {key: 4,href: 'javascript:;', className:'nav4',name:'项目案例' ,id: 4},
      {key: 5,href: 'javascript:;', className:'nav5',name:'宏奕成员' ,id: 5}
    ],
    9:[{key: 1,href: 'javascript:;', className:'nav1',name:'首页' ,id: 1},
      {key: 2,href: 'javascript:;', className:'nav2',name:'宏奕生活' ,id: 2},
      {key: 3,href: 'javascript:;', className:'nav3',name:'就业方向' ,id: 3},
      {key: 4,href: 'javascript:;', className:'nav4',name:'项目案例' ,id: 4},
      {key: 5,href: 'javascript:;', className:'nav5',name:'宏奕成员' ,id: 5}
    ]
  }
  
  //console.log(stars);
    let timer;
    let navTimer;
    let j=i;      
    function addStar(star,lines) { 
    if (i===10) {
      i=6;
      }
      dispatch({
        type: 'nav/canvas',
        payload: {star,i,addNav,lines}
      });
  }
  timer=setTimeout(function() { 
     if(window.innerWidth > 485) {
      addStar(star[i],lines);
    }
    if(window.innerWidth > 0 && window.innerWidth < 485){
      addStar(starPhone[i],linesPhone);
    }
      //stageStyle();
      //console.log(i);  
  }, 1000);

  return (
    <div>
      <div className='bigDipper-box'>
        <Stage width={300} height={400} style={{background: "rgba(255, 255, 255, 0)",position:"absolute"}}>
              <Layer>
                {
                  stars.map(function(item){
                    return (
                        <Star className="starChange" 
                          key={item.id} 
                          x={item.x} 
                          y={item.y} 
                          rotation={item.rotation} 
                          numPoints="6" 
                          innerRadius={item.intSize} 
                          outerRadius={item.outSize} 
                          fill="white" 
                        />
                        )
                  })
                  
                }
                {
                  line.map(function(item){
                    return (
                      <Line 
                        key={item.key} 
                        x="0" y="0" 
                        points={item.points} 
                        stroke='white' 
                        strokeWidth= '1 '
                      />
                      )
                  })
                }
              </Layer>
        </Stage>
           
        <div className="nav">
          {
            navs.map(function(item){
              return (
                <a key={item.id} onClick = { () => handleLink(item.id-1) } className={item.className} href={item.href} >{item.name}</a>)
            })
          } 

        </div>
       
        
      </div>
    </div>
  );
}

UI.propTypes = {
};
export default connect(
  ({nav}) => ({nav})
)(UI);