/**
 * Created by baidu on 17/6/26.
 */
import {router, history} from 'dva';

import {init as List} from '../components/List/common/handler';
import {init as Todo} from '../components/Todo/common/handler';

const enterModule = {
    Todo,
    List
};

export const init = ({dispatch, getState}) => {
    // console.log(getState);
    router.register({path: '/', exact: true}, {
        onMatch() {
            // redirect到默认模块
            console.log('Redirect to default module', arguments[0]);
            history.replace('/Todo');
        }
    });
    router.register({
        pathname: '/TodoEntry',
        search: '?form=Test'
    }, {
        onMatch() {
            console.log('Enter Todo from Test');
            history.replace('/todo');
        }
    });
    router.register('/:module', {
        onMatch({params: {module}}, [lastMatchInfo = {}]) {
            const init = enterModule[module];

            if (!init) {
                return;
            }

            init && init({dispatch, getState});
        }
    });
};