var express = require('express'); // express모듈에
var router = express.Router(); // Router객체활용
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



/* GET home page. */
/* 강사님 ver. */
router.post('/', function(req, res, next) {
	var select = req.body.searchTypeInput;

	pool.getConnection(function(err, conn){
		if(err){
			conn.release();
			throw err;
		}

		var sql = "";

		switch(select) {
			case "title":
				sql = "SELECT * FROM Board_info WHERE Title LIKE '%"+req.body.keyword+"%';";
			break;
			case "writer":
				sql = "SELECT * FROM Board_info WHERE Contents LIKE '%"+req.body.keyword+"%';";
			break;
			case "number":
				sql = "SELECT * FROM Board_info WHERE Writer_seq LIKE '%"+req.body.keyword+"%';";
			break;
		}

		console.log(sql);

		conn.query(sql, function(err, result){
			if(err) {
				conn.release();
				throw err;
			}
			res.render('index.ejs', { send_data : result });
		});
	});
});


// 내 ver.
// router.post('/', function(req, res, next) {
// 	pool.getConnection(function(err, conn){
// 		if(err){
// 			conn.release();
// 			throw err;
// 		}
// 		/**
// 		 * sql문에서 특정 키워드가 포함된 내용을 검색하고 싶을 때
// 		 * 
// 		 * SELECT문에서 WHERE 다음에 'Like %키워드%'로 조건을 제시하면,
// 		 * 해당 '키워드' 포함된 내용을 검색해준다.
// 		 */
// 		var sql = "SELECT * FROM Board_info WHERE Title LIKE '%"+req.body.keyword+"%' OR Contents LIKE '%"+req.body.keyword+"%';";

// 		console.log(sql);

// 		conn.query(sql, function(err, result){
// 			if(err) {
// 				conn.release();
// 				throw err;
// 			}
// 			res.render('index.ejs', { send_data : result });
// 		});
// 	});
// });

module.exports = router;