import dva from 'dva';
import { browserHistory } from 'dva/router';

// 1. Initialize
// const app = dva();
export const app = dva({
	history: browserHistory
});