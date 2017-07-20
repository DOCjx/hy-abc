/**
 * creat by DOCer 2017/7/10
 */
import app from './app';
import subModels from '../components/List/models';
import todo from '../components/Todo/models';

export default [
    app,
    ...subModels,
    ...todo,
];