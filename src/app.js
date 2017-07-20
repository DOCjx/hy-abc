/**
 * creat by DOCer 2017/7/10
 */
import dva from 'dva';
import {browserHistory} from 'dva/router';

// 1. Initialize
// const app = dva();
export const app = dva({
    history: browserHistory
});