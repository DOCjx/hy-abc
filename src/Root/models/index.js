import app from './app';
import subModels from '../components/List/models';
import todo from '../components/Todo/models';

export default [
    app,
    ...subModels,
    ...todo,
];