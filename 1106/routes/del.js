var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var pool = mysql.createPool({
	host : "127.0.0.1",
  port : 3306,
  user : "root",
  password : "dkdleldj1!",
  database : "board",
  connectionLimit : 20,
  waitForConnection : false
});

router.get('/:number', function(req, res, next) {
	var number = req.params.number;

	pool.getConnection(function(err, conn) {
		if(err) {
			conn.release();
			throw err;
		}

		var sql = "UPDATE board_info SET Enable=0 WHERE Board_seq="+number+";";
		console.log(sql);

		conn.query(sql, function() {
			if(err) {
				conn.release();
				throw err;
			}
			res.redirect('http://127.0.0.1:3000');

		});
	});

	//res.render('', {});
	//res.redirect('http://127.0.0.1:3000');
});

module.exports = router;