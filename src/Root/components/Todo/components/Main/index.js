import {connect} from 'dva';
import UI from './UI';

export default connect(
    ({todo}) => (todo)
)(UI);