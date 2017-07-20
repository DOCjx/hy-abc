/**
 * creat by DOCer 2017/7/10
 */
const config = require('../utils/config');
const { apiPrefix } = config;
const Mock = require('mockjs');
let usersListData = Mock.mock({
    'data|6': [
       { 'key|1-100.1-10': 1, name: '@word', 'id|+1': 1 }
    ],
});
let database = usersListData.data;
const NOTFOUND = {
    message: 'Not Found',
    documentation_url: 'http://localhost:8000/request',
};

module.exports = {
    [`${apiPrefix}/lists`] (req, res) {
        const data = database;
        if (data) {
            res.status(200).json(data);
        } else {
            res.status(404).json(NOTFOUND);
        }
    },
};