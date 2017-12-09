import { Router, Route } from 'dva/router';
import index from './Root/index';
// import lists from './Root/components/Lists/index';

function RouterConfig({ history }) {

  return (
    <Router history={history}>
      <Route path="/" component={index} />
       </Router>
  );
}

export default RouterConfig;
