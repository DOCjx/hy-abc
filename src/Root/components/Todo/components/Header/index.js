import {connect} from 'dva';
import UI from './UI';

export default connect(
    ({todo}) => ({
        newTodo: todo.newTodo
    })
)(UI);