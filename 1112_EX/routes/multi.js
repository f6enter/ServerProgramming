// express 프레임워크를 활용하기 위해 express 모듈을 가져온다.
var express = require('express');
// 접속한 주소 정보를 가져온다.
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
	console.log('/multi 기능함수');
  res.render('main.ejs', { hello: 'Express' });
});

router.get('/:num1/:num2', function(req, res, next) {
	var num1 = req.params.num1;
	var num2 = req.params.num2;
	var multi;

	multi = parseInt(num1) * parseInt(num2);

	console.log('두수의 곱 기능함수');
  res.render('main.ejs', { hello: multi });
});

// 접속한 주소 정보를 다른 기능 파일(node.js 파일)에게 전달
module.exports = router;
