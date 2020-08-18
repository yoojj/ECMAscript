# Node Realtime Module


- [socketio](#socketio)
- ws
- websocket
- sockjs
- primus



## socketio

```bash
$ npm install socket.io
$ npm install socket.io-client
```


**server**

```js
const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const client = [];

io.on('connection', (socket) => {

    console.log('client connected');

    client.push(socket);

    // 클라이언트에서 보낸 이벤트를 전달 받음  
    socket.on('이벤트', (데이터) => {
        // 클라이언트에게 이벤트 전달
        socket.broadcast.emit('이벤트', 데이터);
        socket.emit('이벤트', 데이터);
    });

    socket.on('disconnect', () => {
        console.log('client disconnected');
    });

});

http.listen(3000, (err) => {
    if(err) throw err
    console.log('server on 3000 port');
});
```


**client**

```html
<script src="./js/socket.io.js"></script>
<script>
const socket = io();

socket.on('이벤트', '데이터');
socket.emit('이벤트', '데이터');
</script>

<form id="form">
    <input type="text" id="sendMsg">
    <input type="submit" value="전송">
</form>
```



[top](#)
