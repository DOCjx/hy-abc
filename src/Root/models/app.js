/**
 * creat by DOCer 2017/7/10
 */
import dva from 'dva';
import {show as todo} from '../../services/Todo';
import {show as list} from '../../services/Lists';
import {routerRedux, browserHistory} from 'dva/router';
import {DEFAULT_MODULE} from '../conf';
const serviceMap = {todo, list}
export default {
    namespace: 'app',
    state: {
        key: DEFAULT_MODULE,
        keyPath: DEFAULT_MODULE,
        isLoading: false
    },
    reducers: {
        'changeModule'(state, {payload: module}) {
            // console.log(...module)
            return {
                ...state,
                ...module
            };
        },
        showLoading(state) {
            return {
                ...state,
                isLoading: true
            }
        },
        hideLoading(state) {
            return {
                ...state,
                isLoading: false
            }
        },
    },
    subscriptions: {
        setup({ dispatch, history }) {
            function initPage(keyNow){
                //去除字段里面包含的斜杠
                if( keyNow.indexOf('/') != -1 ) {
                    keyNow = keyNow.replace('/', '');
                    browserHistory.push(`/${keyNow}`);
                }
                // console.log(keyNow.indexOf('/'))
                //设置app的model
                dispatch({
                    type: "changeModule",
                    payload: {
                        key: keyNow,
                        keyPath: [keyNow]
                    }
                });
                let keyToLower = keyNow;
                keyToLower = keyToLower[0].toLowerCase() + keyToLower.slice(1);
                // console.log(`${tmp}/show`);
                //异步请求初始化数据
                dispatch({
                    type: 'show',
                    payload: {
                        module: keyToLower
                    }
                });
            }
            //处理进入页面时的路由
            browserHistory.listen(location => {
                const keyNow = location.pathname.slice(1)
                    ? location.pathname.slice(1):
                    DEFAULT_MODULE;
                initPage(keyNow);
            });
        }
    },
    effects: {
        //异步获取数据初始化页面
        *show({
            payload,
        }, {call, put, select}){
            const {module} = payload;
            const Module = serviceMap[module];
            if(!Module) return;
            //阻塞调用
            yield put({
                type: 'showLoading'
            });
            //异步请求数据
            const data = yield call(Module);
            yield put({
                type: 'hideLoading'
            });
            //更新当前组件数据
            yield put({
                type: `${module}/asyncData`,
                payload: data && data.data,
            });
        }
    }
};