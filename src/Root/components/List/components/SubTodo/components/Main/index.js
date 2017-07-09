/**
 * Created by baidu on 16/11/28.
 */
import {connect, history} from 'dva';
import UI from './UI';
import {LOCATION_FILTER_MAP} from  '../../config';

export default connect(
    ({subtodo}) => (subtodo)
)(UI);