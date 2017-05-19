/**
 * Created by xingxiao05 on 17/5/19.
 */
const connect = require('connect');
const app = connect();

app.use(function (req, res) {
    res.end("hello world");
});


app.listen(3000);