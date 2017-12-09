/**
 * creat by DOCer 2017/7/10
 */
const config = require('../utils/config');
const { apiPrefix } = config;
const Mock = require('mockjs');
let usersListData = Mock.mock({
    'data|3': [
        {
            "id|+1": 1,
            name: '@name',
            "key|+1": 1,
            nickName: '@last',
            phone: /^1[34578]\d{9}$/,
            'age|11-99': 1,
            address: '@county(true)',
            isMale: '@boolean',
            email: '@email',
            createTime: '@datetime',
            avatar () {
              return Mock.Random.image('100x100', Mock.Random.color(), '#757575', 'png', this.nickName.substr(0, 1))
            },
        },
    ],
});
let database = usersListData.data;
const NOTFOUND = {
    message: 'Not Found',
    documentation_url: 'http://localhost:8000/request',
};

module.exports = {
    [`${apiPrefix}/test/:id`] (req, res) {
        const { id } = req.params;
        const data = database.filter(item => item.id == id);
        if (data) {
            res.status(200).json(data);
        } else {
            res.status(404).json(NOTFOUND);
        }
    },
};