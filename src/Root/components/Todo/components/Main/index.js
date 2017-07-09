/**
 * Created by baidu on 16/11/28.
 */
import {connect} from 'dva';
import UI from './UI';

export default connect(
    ({todo}) => (todo)
)(UI);