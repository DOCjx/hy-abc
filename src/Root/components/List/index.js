import { connect } from 'dva';
import UI from './UI';

export default connect(
  ({list}) => ({list})
)(UI);