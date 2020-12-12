const express = require('express');
const router = express();

//设置允许跨域访问该服务.
router.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'routerlication/json;charset=utf-8');
  next();
});

router.on('', function(req, res) {
  console.log(req.json());
});

router.post('', function (req, res) {
  console.log(req);
  res.json({title:"你好"});
});

const server = router.listen(8080, function () {
  console.log('Express router server listening on port %d', server.address().port);
});