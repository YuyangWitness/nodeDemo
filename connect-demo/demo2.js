/**
 * Created by xingxiao05 on 17/5/19.
 */
const connect = require('connect');
const app = connect();



app.use('/foo', (req, res, next) => {
    console.log("foo");
    res.end("foo");
});

app.use('/bar', (req, res, next) => {
    console.log("bar");
    res.end("bar");
});


app.use((req, res, next) => {
    console.log("hello world");
    res.end("hello world");
});



app.listen(3000);