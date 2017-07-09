/**
 * Created by baidu on 16/11/28.
 * Header部分只是 添加todo 的功能，与其他部分无关，所以独立出来
 */
import {connect} from 'dva';
import UI from './UI';

export default connect(
    ({todo}) => ({
        newTodo: todo.newTodo
    })
)(UI);