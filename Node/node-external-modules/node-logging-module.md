# Node Logging Module


- [morgan](#morgan)
- [winston](#winston)
- bunyan
- simple-node-logger



## morgan

> morgan(format, options)


**format**      
- default
- short
- tiny
- dev

**options**   
- immediate
- skip


```bash
$ npm install morgan
```

```js
const morgan = require('morgan');

const express = require('express');
const app = express();

// 간단한 로그 출력
app.use(morgan('short'));

app.use(morgan({ format: 'dev', stream: '' }));
```



## winston


```bash
$ npm install winston
```

```js
const { createLogger, format, transports } = require('winston');

const myFormat = format.printf((info) =>
    `${info.timestamp} [${info.level.toUpperCase()}] ${info.label} :: ${info.message}`);

const options = {
    console: {
        level: 'info',
        colorize: true,
        json: false,
        format: format.combine(
            format.label({ label: ' ' }),
            format.timestamp(),
            myFormat,
        ),
        handleExceptions: true,
    },
};

const logger = createLogger({
    transports: [
        new transports.Console(options.console)
    ]
});
```



[top](#)
