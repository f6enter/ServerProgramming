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

var number = 0;
// 수정페이지를 만들어 클라이언트에게 전달하는 기능함수
router.get('/:number', function(req, res, next) {
	// 글번호를 주소의 식별자로 전달받는다.
	number = req.params.number;
	// var title = req.body.titleInput;
	// var name = req.body.nameInput;
	// var contents = req.body.contentsInput;

	// 연결 풀에서 연결을 가져온다.
	pool.getConnection(function (err, conn) {
		if(err){
			// 연결 풀에 연결 객체를 반납한다.
			conn.release();
			// 에러 메시지를 표시하고 프로그램 종료.
			throw err;
		}

		var sql = "SELECT * FROM Board_info WHERE Board_seq="+number+";";

		// 연결 객체의 query()함수로 sql문을 실행한다.
		conn.query(sql, function(err, result){
			if(err) {
				conn.release();
				throw err;
			}

			if(result.length == 0) {
				// 에러 페이지를 표시
				//res.render('', {});
				return;
			} else {
			// views폴더 안에 있는 update.ejs 파일을 웹페이지로 표시한다.
			// sql 결과물을 웹페이지에 조합한다.
			res.render('update.ejs', { send_data : result });
			}
		});		
	});
});

router.post('/', function(req, res, next) {
	var title = req.body.titleInput;
	var name = req.body.nameInput;
	var contents = req.body.contentsInput;

	pool.getConnection(function (err, conn) {
		if(err){
			conn.release();
			throw err;
		}
		var sql = "UPDATE board_info SET Title='"+title+"', Writer_seq="+name+", Contents='"+contents+"' WHERE Board_seq ="+number+";";
		// UPDATE board_info SET @#!@$!@$ WHERE 

		console.log(sql);

		conn.query(sql, function(err, result){
			if(err) {
				conn.release();
				throw err;
			}
			res.redirect("http://127.0.0.1:3000/"); // 수정 페이지에서 등록누르면 리스트페이지로.
		});		
	});
//res.redirect('http://127.0.0.1:3000');
});

module.exports = router;