var express = require('express');
var router = express.Router();
var userDao = require('../dao/userDao');


/* GET users listing. */
router.get('/', function (req, res, next) {
	res.send('respond with a resource');
});

/*获取用户信息测试*/
router.post('/getUserInfo', function (req, res) {
	var username = req.body.username; //获取用户信息字段
	userDao.getUserInfo(username, function (data) {
		res.json(data); //json数据返回字段
	})
});

module.exports = router;
