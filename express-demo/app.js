/**
 * Created by xingxiao05 on 17/5/19.
 */
const express = require('express');
const app = express();

//把static文件里面的静态文件加入到服务器中
app.use(express.static('static'));



app.get('/', (req, res) => {
    //解析HTML文件
    res.sendFile(__dirname + '/views/users.html');
});

const server = app.listen(3000, function () {
    var host = server.address().address;
    var port  = server.address().port;

    console.log(host,port);
})
