import {app} from './app';
import models from './Root/models';
import './index.css';

// 2. Plugins
// app.use({});

// 3. Model
models.map(model => app.model(model));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
