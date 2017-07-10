import dva from 'dva';
import { show } from '../../services/Todo';
import {routerRedux, browserHistory} from 'dva/router';
import {DEFAULT_MODULE} from '../conf';

export default {
  namespace: 'app',
  state: {
    key: DEFAULT_MODULE,
    keyPath: DEFAULT_MODULE,
    isLoading: false
  },
  reducers: {
    'changeModule'(state, {payload: module}) {
        console.log(module)
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
          console.log(keyNow.indexOf('/'))
          //设置app的model
          dispatch({
            type: "changeModule",
            payload: {
              key: keyNow,
              keyPath: [keyNow]
            }
          });
          let tmp = keyNow;
          tmp = tmp[0].toLowerCase() + tmp.slice(1);
          console.log(`${tmp}/show`)
          //异步请求初始化数据
          dispatch({
            type: `${tmp}/show`,
            payload: {
              key: keyNow,
              keyPath: [keyNow]
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
  }
};