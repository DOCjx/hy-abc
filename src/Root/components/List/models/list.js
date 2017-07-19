import { find } from '../../../../services/Lists';

export default {
    namespace: 'list',
    state: [],
    reducers: {
    'delete'(state, { payload: id }) {
        return state.filter(item => item.id !== id);
    },
    'deleteAll'(state, { payload: id }) {
        return [];
    },
    'asyncData'(state, {payload: data}) {
        //每个页面初始化时上层回调调用
        for(let raw of data) {
            for(let i in state){
                state[i].key == raw.key && state.splice(i, 1);
            }
        }
        return [
            ...state,
            ...data,
        ]
    },
    'testAsync'(state, { payload: data }){
        return [
            ...data,
        ]
    }
    },
    effects: {
        //异步获取数据初始化页面
        *find({
            payload,
        }, {call, put, select}){
            //阻塞调用
            yield put({
                type: 'showLoading'
            });
            //异步请求数据
            const data = yield call(find, {id:payload});
            yield put({
                type: 'hideLoading'
            });
            //更新当前组件数据
            yield put({
                type: 'testAsync',
                payload: data && data.data,
            });
        }
    }
};