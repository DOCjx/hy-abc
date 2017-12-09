import React from 'react';
import PropTypes from 'prop-types';
import style from '../assets/style/life.less';
import { Row, Col } from 'antd';
import { Carousel } from 'antd';
const UI = ({dispatch, item}) => {
    // const{lists} = lists;
    console.log(item);
    
    return (
        <div className="life-content">
               <div className="child-content">
                <Row type="flex"  gutter={20} justify="center" align="center"> 
                    <Col span={8}>
                    <div className="img-div">
                        <Carousel autoplay>
                            <div><img src={require("../assets/img/newplan1.jpg")}/></div>
                            <div><img src={require("../assets/img/newplan2.png")}/></div>
                        </Carousel>
                    </div>
                    </Col>
                    <Col span={14}>
                         <div className="child-article">
                              <h2>招新活动</h2>
                               <p>
                                   秋风不住的飒飒的吹着，秋雨不住滴沥滴沥的下着，窗外的梧桐和芭蕉叶子一声声的响 着，做出十分的秋意。墨绿色的窗帘，垂得低低的。灯光之下，我便坐在窗前书桌旁边，寂 寂无声的看着书。桌上瓶子里几枝桂花，似乎太觉得幽寂不堪了，便不时的将清香送将过来 。要我抬头看它。又似乎对我微笑说：“冰心呵!窗以外虽是‘秋雨秋风愁煞人’，窗以内 却是温煦如春呵!”
                               </p>  
                         </div>
                    </Col>
                </Row>
               </div>
               <div className="child-content">
                 <Row type="flex"  gutter={20} justify="center" align="center">
                    <Col span={14}>
                         <div className="child-article">
                              <h2>暑期培训</h2>
                               <p>
                                  今天晚上拿起来阅看，竟如同旧友重逢一般的喜悦。看到一同《木兰花慢 》：“故人知健否，又过了一番秋……更何处相逢，残更听雁，落日呼鸥……”到这里一页 完了，便翻到那篇去。忽然有一个信封，从书页里，落在桌上。翻过信面一看，上面写着“ 冰心亲启”四个字。我不觉呆了。莫非是眼花了吗?这却分明是许久不知信息的同学英云的 笔迹啊!是什么时候夹在这本书里呢?满腹狐疑地拆开信，从头到尾看了一遍。看完了以后 ，神经忽然错乱起来。一年前一个悲剧的印象，又涌现到眼前来了。
                               </p>  
                         </div>
                    </Col>
                    <Col span={8}>
                    <div className="img-div">
                        <Carousel autoplay>
                            <div><img src={require("../assets/img/learn (3).jpg")}/></div>
                            <div><img src={require("../assets/img/learn (3).jpg")}/></div>
                            <div><img src={require("../assets/img/learn (4).jpg")}/></div>
                        </Carousel>
                    </div>
                    </Col>
                  
                </Row>
               </div>
               <div className="child-content">
                <Row type="flex"  gutter={20} justify="center" align="center"> 
                    <Col span={8}>
                    <div className="img-div">
                        <Carousel autoplay>
                            <div><img src={require("../assets/img/play (1).jpg")}/></div>
                            <div><img src={require("../assets/img/play (2).jpg")}/></div>
                            <div><img src={require("../assets/img/play (3).jpg")}/></div>
                            <div><img src={require("../assets/img/play (4).jpg")}/></div>
                            <div><img src={require("../assets/img/play (5).jpg")}/></div>
                            <div><img src={require("../assets/img/play (6).jpg")}/></div>
                        </Carousel>
                    </div>
                    </Col>
                    <Col span={14}>
                         <div className="child-article">
                              <h2>聚会聚餐</h2>
                               <p>
                                 晨起的第一缕初光,把映在瞳孔里的景物都变得朦朦胧胧.伸开手掌,感受着手指在阳光中穿梭；微微眯着眼,让所见的,变得清晰起来；吸入空灵的空气,好似浑身都舒展开了.窗台上藤蔓,零落了一片柔光；掠过一只小鸟的影子,啼叫的曲子随之飘扬.  
                                 今天晚上拿起来阅看，竟如同旧友重逢一般的喜悦。看到一同《木兰花慢 》：“故人知健否，又过了一番秋……更何处相逢，残更听雁，落日呼鸥……”
                               </p>  
                         </div>
                    </Col>
                </Row>
               </div>
        </div> 
    )
}
UI.propTypes = {
  
};
export default UI;