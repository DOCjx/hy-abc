import React from 'react';
import PropTypes from 'prop-types';
import { routerRedux } from 'dva/router';
import reactTapEventPlugin from 'react-tap-event-plugin';
import style from '../public/assets/style/style.less';
import Nav from './Nav.ui';
import Work from './Work.ui';
import Logo from './Logo.ui';
import Life from './Life.ui';
import Items from './Items.ui';
import Foot from './Foot.ui';
import introducestyle from '../public/assets/style/introducestyle.less';
import Members from './Members.ui.js';
import { Layout, Menu, Breadcrumb, Button } from 'antd';
import { Row, Slider } from 'antd';
reactTapEventPlugin();

const { Header, Content, Footer } = Layout;

const UI = ({dispatch, app}) => {
    const {bgTop, bgIndex, suportWebp} = app;
// testwebp START
    const isSuportWebp = () => {
        const img = new Image();
        img.onload = () => {
            dispatch({
                type: 'app/checkWebp',
                payload: true
            });
        };
        img.onerror = () => {
            dispatch({
                type: 'app/checkWebp',
                payload: false
            });
        };
        img.src = "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAsAAAABBxAREYiI/gcAAABWUDggGAAAADABAJ0BKgEAAQABABwlpAADcAD+/gbQAA==";
    };
// testwebp END
// fullPage START
    let startY,
        endY,
        startX,
        endX,
        touchDirection = 1,
        moveFlag = 0;
    //在定时内不能发生页面滚动
    setTimeout(() => {
        moveFlag = 1;
    }, 800);
    function startTouchScroll(ev) {
        console.log("startTouch");
        const e = ev || window.event;
        e.preventDefault();
        const touch = e.touches[0];
        startX = touch.pageX;
        startY = touch.pageY;
    }
    function moveTouchScroll(ev) {
        console.log("moveTouch");
        const e = ev || window.event;
        e.preventDefault();
        const touch = e.touches[0];
        endX = touch.pageX;
        endY = touch.pageY;
    }
    function endTouchScroll(ev) {
        //判断移动的点,1为手指向下滑动,-1为手指向上滑动
        touchDirection = (endY - startY) > 0 ? 1 : -1;
        //判断移动的点,1为手指向右滑动,-1为手指向左滑动
        let scrollTranslation = (endX - startX) > 0 ? 1 : -1;
        //计算滑动距离
        let scrollDistanceY = Math.abs(endY - startY);
        let scrollDistanceX = Math.abs(endX - startX);
        //和滚动交互共用滚动条滚动
        scrollDistanceY > 40 && (scrollDistanceY > scrollDistanceX) && handlerWheel(ev);
    }
    const handleGoBg = nextBgIndex => {
        const bgTopUpdate = nextBgIndex * getClientHeight();
        console.log("nextBgIndex:", nextBgIndex);
        dispatch({
            type: 'app/goBg',
            payload: {
                bgTop: bgTopUpdate,
                bgIndex: nextBgIndex
            }
        });
    };
    window.onload = () => {
        //支持webp检查
        isSuportWebp();
        //校准滚动条高度
        handleGoBg(0);
        //绑定处理触摸事件
        const doc = document;
        doc.addEventListener("touchstart",  startTouchScroll, {passive: false});
        doc.addEventListener("touchmove", moveTouchScroll, {passive: false});
        doc.addEventListener("touchend",  endTouchScroll, {passive: false});
    };
    //绑定处理键盘事件
    window.onkeydown = ev => {
        const e = ev || window.event;
        const keyCode = e.keyCode;
        e.preventDefault();
        (keyCode == 38 || keyCode == 40) && handlerWheel(e);
    };
    //绑定处理窗口变化事件
    window.onresize = ev => {
        handleGoBg(bgIndex);
    };
    //取窗口可视范围的高度
    const getClientHeight = () => {
        var clientHeight = 0;
        if(document.body.clientHeight && document.documentElement.clientHeight) {
            var clientHeight = (document.body.clientHeight < document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
        } else {
            var clientHeight = (document.body.clientHeight > document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
        }
        return clientHeight;
    }
    //用于判断是否更新页面
    let bgIndexUpdate = bgIndex;
    const handlerWheel = ev => {
        //用于触摸事件时判断是否更新页面
        const lastBgIndexUpdate = bgIndexUpdate;
        const e = ev || window.event;
        e.preventDefault();
        //未到定时则不能进行滚动,触发后重新初始化防止回调中会用到
        if(!moveFlag) return;
        //鼠标滚动，触摸，键盘下健时触发
        if(e.deltaY > 0 || touchDirection == -1 || e.keyCode == 40)
            bgIndexUpdate = (++bgIndexUpdate) < 6 ? bgIndexUpdate : 5;
        else
            bgIndexUpdate = (--bgIndexUpdate) >= 0 ? bgIndexUpdate : 0;
        bgIndexUpdate != lastBgIndexUpdate && handleGoBg(bgIndexUpdate);
    };
    const sectionHeitht = getClientHeight();
//fullPage END
//imganimation START
    //页面展示赋值
    const judegBgI = [],
          judegBgISub = [],
          judegBgIPus = [];
    for(let i = 0; i < 6; i++) {
        judegBgI[i] = bgIndex == i;
        judegBgISub[i] = (bgIndex - 1) == i;
        judegBgIPus[i] = (bgIndex + 1) == i;
    }
    const base14 = sectionHeitht / 4;
    const oppBase14 = -base14;
    const base12 = (sectionHeitht * 5) / 8;
//imganimation END
    return(
        <main
            onWheel = {ev => handlerWheel(ev)}
        >
            <Row><div style={{background: suportWebp ? `url(${require('../public/assets/img/bg-loss.webp')}) no-repeat top / cover` : `url(${require('../public/assets/img/bg-loss.png')}) no-repeat top / cover`, top: -bgTop, height: 7 * sectionHeitht}} className="bg"></div>;
                            <Row style={{height: judegBgI[0] ? sectionHeitht : 0}} className="warpCon">
                    <div style={{marginTop: judegBgI[0] ? sectionHeitht / 4 : ( judegBgISub[0] ? -sectionHeitht / 4 : 0), height: judegBgI[0] ? sectionHeitht / 2 : 0}} className="boatCon">
                        <div style={{display: judegBgI[0] ? "block" : "none"}} className="detail">
                            <Row>
                                <Logo />
                                <div className={introducestyle.intro}>
                                    <h1>宏奕简介</h1>
                                    <p>宏奕工作室(HOMYIT STUDIO)成立于2013年9月，由计信学院各领导，老师的大力支持下迅速成长起来的学生自主研发工作室。以社团的模式传承，以模拟公司的方式运营。其目的致力于Web开发，由12级创始人王宏凯及十余名长老成员共同努力下，本着“有爱同行，踏实求新”的侠客情怀，通过开办技术培训，承接商业项目，致力于为我院师生提供一个专业的Web开发修炼圣地，为我院培养出更多就业型人才。以超强的团队凝聚力和深厚的技术实力得到学院师生的肯定。</p>
                                </div>
                            </Row>
                        </div>
                    </div>
                    <div className="boatFooter">
                        <img style={{zIndex: 7, display: judegBgIPus[0] || judegBgISub[0] || bgIndex== 0 ? "block" : "none"}} className="boat" src={require('../public/assets/img/0.png')} />
                    </div>
                </Row>
                <Row style={{height: judegBgI[1] ? sectionHeitht : 0}} className="warpCon">
                    <div style={{marginTop: judegBgI[1] ? base14 : ( judegBgISub[1] ? oppBase14 : 0), height: judegBgI[1] ? base12 : 0}} className="boatCon">
                        <div style={{display: judegBgI[1] ? "block" : "none"}} className="detail">
                            <Row>
                                <h1>宏奕生活</h1>
                                <Life />
                            </Row>
                        </div>
                    </div>
                    <div className="boatFooter">
                        <img style={{zIndex: 6, display: judegBgIPus[1] || judegBgISub[1] || judegBgI[1] ? "block" : "none"}} className="boat" src={require('../public/assets/img/1.gif')} />
                    </div>
                </Row>
                <Row style={{height: judegBgI[2] ? sectionHeitht : 0}} className="warpCon">
                    <div style={{marginTop: judegBgI[2] ? base14 : ( judegBgISub[2] ? oppBase14 : 0), height: judegBgI[2] ? base12 : 0}} className="boatCon">
                        <div style={{display: judegBgI[2] ? "block" : "none"}} className="detail">
                            <Row>
                                <h1>就业方向</h1>
                                <Work />
                            </Row>
                        </div>
                    </div>
                    <div className="boatFooter">
                        <img style={{zIndex: 5, display: judegBgIPus[2] || judegBgISub[2] || judegBgI[2] ? "block" : "none"}} className="boat" src={require('../public/assets/img/2.gif')} />
                    </div>
                </Row>
                <Row style={{height: judegBgI[3] ? sectionHeitht : 0}} className="warpCon">
                    <div style={{marginTop: judegBgI[3] ? base14 : ( judegBgISub[3] ? oppBase14 : 0), height: judegBgI[3] ? base12 : 0}} className="boatCon">
                        <div style={{display: judegBgI[3] ? "block" : "none"}} className="detail">
                            <Row>
                                <h1>项目案例</h1>
                                <Items/>
                            </Row>
                        </div>
                    </div>
                    <div className="boatFooter">
                        <img style={{zIndex: 4, display: judegBgIPus[3] || judegBgISub[3] || judegBgI[3] ? "block" : "none"}} className="boat" src={require('../public/assets/img/3.gif')} />
                    </div>
                </Row>
                <Row style={{height: judegBgI[4] ? sectionHeitht : 0}} className="warpCon">
                    <div style={{marginTop: judegBgI[4] ? base14 : ( judegBgISub[4] ? oppBase14 : 0), height: judegBgI[4] ? base12 : 0}} className="boatCon">
                        <div style={{display: judegBgI[4] ? "block" : "none"}} className="detail">
                            <Row>
                                <h1 className="boatConTitle">宏奕成员</h1>
                                <Members />
                            </Row>
                        </div>
                    </div>
                    <div className="boatFooter">
                        <img style={{zIndex: 3, display: judegBgIPus[4] || judegBgISub[4] || judegBgI[4] ? "block" : "none"}} className="boat" src={require('../public/assets/img/4.gif')} />
                    </div>
                </Row>
                <Row style={{height: judegBgI[5] ? sectionHeitht : 0}} className="warpCon">
                    <div style={{marginTop: judegBgI[5] ? base14 : ( judegBgISub[5] ? oppBase14 : 0), height: judegBgI[5] ? base12 : 0}} className="boatCon">
                        <div style={{display: judegBgI[5] ? "block" : "none"}} className="detail">
                            <Row>
                                <Foot />
                            </Row>
                        </div>
                    </div>
                    <div className="boatFooter">
                    </div>
                </Row>
                <Nav  handleLink={handleGoBg}/>
            </Row>
        </main>
    );
}
UI.propTypes = {
  dispatch: PropTypes.func.isRequired,
  app: PropTypes.object.isRequired,
};
export default UI;