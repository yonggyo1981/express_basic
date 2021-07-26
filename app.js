const express = require('express');
const app = express(); // express 객체가 생성 


// GET - / 라우터 
app.get("/", (req, res) => {
	/**
	req - Request 
	res - Response 
		 .send(데이터) - 출력(http모듈 제공 기본 메서드 예) res.write, res.end)
		 .status(상태코드) - (http 모듈 - res.writeHead(상태코드))
	*/
	
	return res.send("<h1>Express에서 출력!</h1>");
});



app.get("/test", (req, res, next) => {
	//return res.send("<h1>테스트 라우터</h1>");
	console.log("0번째 미들웨어");
	next(); // 다음 해당하는 라우터의 첫번째 미들웨어로 이동 
});

app.get("/test", (req, res, next) /* 1번째 미들웨어 */ => {
	console.log("1번째 미들웨어");
	next(); // 다음 미들웨어로 이동
}, (req, res, next) /* 2번째 미들웨어 */  => {
	console.log("2번째 미들웨어");
	next();
}, (req, res) /* 3번째 미들웨어 */ => {
	console.log("3번째 미들웨어");
	
	return res.send("");
});

app.listen(3000, () => {
	console.log("3000번 포트에서 서버 대기중...");
});