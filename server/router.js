const express = require('express');
const querystring = require('querystring');
const bodyParser = require('body-parser');
const app = express();

//设置允许跨域访问该服务.
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    if (req.method == 'OPTIONS')
        res.sendStatus(200);
    else
        next();
});

/*
app.use(bodyParser.json({ limit: '1mb' }));  //body-parser 解析json格式数据
app.use(bodyParser.urlencoded({            //此项必须在 bodyParser.json 下面,为参数编码
    extended: true
}));
*/
/*
app.on('', function (req, res) {
    let postParams = '';
    req.on('data', (params) => {
        postParams += params;
    })

    req.on('end', () => {
        let userData = querystring.parse(postParams);
        console.log(userData);
    })
});
*/

app.post('', function (req, res) {
    var params;

    req.on('data', function(data) {
        params = JSON.parse(data);
        console.log(data);
        console.log(typeof(params));
        console.log(params);
    })

    req.on('end', function() {
        console.log("ending", params);
        if (params.studentName == '何凯琦')
            console.log("admin\n");
    })
    res.json({ title: "你好" });
});

const server = app.listen(8080, function () {
    console.log('Express app server listening on port %d', server.address().port);
});