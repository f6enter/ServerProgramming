var express = require('express');
var router = express.Router();

// [mysql연동_1] mysql 모듈을 로드한다.
mysql = require('mysql');

// [mysql연동_2] 데이터베이스 연결 pool을 만든다.
pool = mysql.createPool({
  host : "127.0.0.1",
  port : 3306,
  user : "root",
  password : "dkdleldj1!",
  database : "board",
  connectionLimit : 20,
	waitForConnection : false
	

});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});



router.post('/', function(req, res, next) {
	var id = req.body.id;
	var pw = req.body.pw;

	pool.getConnection( function(err, con) {
		/**
     * [mysql연동_5] 콜백함수에서 sql문을 작성한다.
     * 
     * 콜백함수의 매개변수)
     * 
     * err : 데이터베이스 연결 도중에 오류가 발생했을 경우, 에러내용이 저장
     * connection : 데이터베이스 연결 후 sql문을 실행하기 위한 객체
     */
		if(err) {
			// [mysql연동_6] 데이터베이스 연결중 오류가 발생했다면
      // 현재의 연결을 해제한다
			con.release();
			// 오류 내용을 콘솔화면에 출력하고 프로그램을 종료한다.
			throw err;
		}

		var sql ="SELECT * FROM signup WHERE id='"+id+"';";
		console.log(sql);

		// [mysql연동_7] 데이터베이스 연결 후 sql문을 실행한다.
    // con.query() 함수를 활용하여 sql문을 실행한다.
    // con.query() 함수의 매개변수는 sql문을 작성한 문자열과,
		// sql문을 실행후 결과물을 처리하기 위한 콜백함수이다.	

		con.query(sql, function(err, result) {
			/**
       * [mysql연동_8] sql문을 실행 후에 처리를 위한 콜백함수
       * 
       * err : sql문의 문법오류 및 기타 오류 등으로 sql문이 실행되지 않을경우
       *      에러내용들이 저장되는 변수
       * rows : sql문 실행된 결과물
       */

			// 에러가 발생 했을 때
			if(err) {
				con.release();
				throw err;
			}

			// console.log(result);

			if(result.length == 0) {
				res.render('error.ejs' , { message : "아이디가 없습니다."})
				return;
			} else {
				// 비밀번호 검사
				var sql_pw = "SELECT * FROM signup WHERE id='"+id+"' AND pw='"+pw+"';"
				console.log(sql_pw);

				con.query(sql_pw, function(err, result2) {
					if(err) {
						con.release();
						throw err;
					}
					if(result2.length == 0) {
						res.render('error.ejs' , { message : "비밀번호가 다릅니다."})
						return;
					} 
					res.render('error.ejs', { message : "만나서 반갑습니다. 회원님."});
				});
			}
		});

	});

});

module.exports = router;
