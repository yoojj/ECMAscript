# Node Middleware Module


- [connect](#connect)
- body-parser
- cookie-parser



## connect
: 인증, 세션 관리 등 기능 제공

```bash
$ npm install connect
```

```js
const http = require('http');
const connect = require('require');
const app = connect();

app.use( (req, res, next) => {
    ...
});

const server = http.createServer(app);
server.listen(8888);
```



[top](#)
