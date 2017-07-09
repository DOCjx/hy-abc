import dva from 'dva';

export default {
  namespace: 'list',
  state: [
       { key: 1, name: 'dva', id: 1 },
       { key: 2, name: 'antd', id: 2 },
  ],
  reducers: {
    'delete'(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
    'deleteAll'(state, { payload: id }) {
      return [];
    },
  },
};