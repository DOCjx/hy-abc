import React from 'react';
import PropTypes from 'prop-types';
import style from '../assets/style/chengyuan.less';
import { Row, Col } from 'antd';

const UI = ({dispatch, lists}) => {
    console.log(lists)
	return (

        <div>
            <h1 className="title">宏奕工作室成员介绍</h1>
            <Row type="flex" justify="center" align="center" className="info">
                <Col span={12} className="photo">
                    <h3>诸葛亮</h3>
                    <img src={require('../assets/img/yay.jpg')} style={{}}/>
                </Col>
                <Col span={12} className="content">
                    <h3>个人信息</h3>
                    <ul>
                        <li>姓名：诸葛孔明</li>
                        <li>性别：男</li>
                        <li>手机：13155555555</li>
                        <li>邮箱：123456789@qq.com</li>
                        <li>籍贯：江西南昌</li>
                        <li>学历教育：博士</li>
                        <li>求职意向：超级无敌大军师</li>
                    </ul>
                </Col>
            </Row>
            <div className="evaluate">
                <img className="flower" src={require('../assets/img/flower.png')} />
                <h2>个人评价</h2>
                <p>海誓山盟变成一种玩笑，谁许谁天荒地老，谁守护谁亿万年华？经历了漫长的黑夜之后，我终于醒了过来。当清晨的第一缕阳光洒进窗子，我开始怀疑，漫长的记忆是否只是一场发生在梦里的幻境。一场繁华，一丝烟雨，一颗珠泪，已恍如隔世。醉留三千场的寂寥文字，已阑珊在时空的角落，沉淀在记忆的湖底。生活是人间在繁华的演出，沉睡是所有故事的收尾、谁不是生命的漫游者？谁没在云端闲情过？生命，只是一场唯有一次的真实梦境。新的阳光里，香樟哭了，那些忧伤化作清晨的雾被蒸干了。因为有阳光的揩拭，香樟才敢放肆泪珠，那么，我的眼泪呢？生活是一场变幻无穷的盛宴，我们本不该为之神伤感怀，可是，我们又是如此的奢望、如此的留恋。安放不住的心，还记得旋转木马的音乐，还记得你的音容笑貌。 一场梦境，一段魂灵，一次幻灭。眼泪的存在，只为太多的深爱，也证明所有的一切不是幻觉。生命本就来自偶然，我们本该从容淡定，给过去人原谅，也给自己一个远方。</p>
                <h3>专业技能</h3>
                    <p>熟悉计算机基本知识、microfost office办公软件，掌握CAD、photoshop等制图软件。
           获得计算机二级证书（C语言）。能熟练使用水平仪、全站仪。,SVN</p>
                <h3>实习经历</h3>
                    <p>1、帮助公司产品营销推广，编辑签约商家的推广内容及项目合约，有效地增加了用户量，平均签约商家30多户；2、 参与创新设计公司第二代会员卡及学生卡卡面内容及外观，获得该项目系统的参与人员一致好评；3、 管理运营公司微信公众号，编辑及发布产品有关内容，涨粉100+。</p>
                <h3>我的团队</h3>
                    <p>团队（Team）是由基层和管理层人员组成的一个共同体，它合理利用每一个成员的知识和技能协同工作，解决问题，达到共同的目标。</p>
            </div>
        </div>
	)
}
UI.propTypes = {
  
};
export default UI;