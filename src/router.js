import {Router, Route} from 'dva/router';
import index from './Root/index';

function RouterConfig({ history }) {

  return (
    <Router history={history}>
        <Route path='/' component={index} />
        <Route path='/Home' component={index} />
        <Route path='/Todo' component={index} />
        <Route path='/List' component={index} />
    </Router>
  );
}

export default RouterConfig;
