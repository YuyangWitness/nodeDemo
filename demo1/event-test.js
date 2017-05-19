/**
 * Created by xingxiao05 on 17/5/19.
 */
const events = require('events');

//创建对象
const eventEmitter = new events.EventEmitter();


const connectFuc = function ( message ) {
    console.log(message);

    //触发connectData事件
    eventEmitter.emit('connectData', 'world');
}

const connectData = function ( message ) {
    console.log(message);
}

//注册connectData事件
eventEmitter.on('connectData',connectData);

//注册connectFuc事件
eventEmitter.on('connectFuc',connectFuc);


//触发connectFuc事件，可以传递参数
eventEmitter.emit('connectFuc', 'hello');

