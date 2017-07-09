import dva from 'dva';
import {DEFAULT_MODULE} from '../conf'

export default {
  namespace: 'app',
  state: {
      key: DEFAULT_MODULE,
      keyPath: DEFAULT_MODULE
  },
  reducers: {
    'changeModule'(state, {payload: module}) {
        return {
            ...state,
            ...module
        };
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        if (pathname === '/list') {
          dispatch({
            type: 'list/fetch',
          });
        }
      });
    }
  },
  effects: {
    *addList({ payload: list }, { put, call }) {
      yield call(addList, list);
      yield put(routerRedux.push('/list'));
    },
  }
};