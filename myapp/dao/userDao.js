var sql = require('mysql');
var userMap = require('./userMap');
var dataBaseConf = require('../conf/mysqlConf');

var pool = sql.createPool(dataBaseConf.mysql); //创建连接

module.exports = {
	getUserInfo: function (username, callback) {
		console.log("========="+username)
		pool.query(userMap.getUserInfo, username, function (error, result) {
			if (error) {
				throw error;
			}
			callback(result)
		})
	}
}

