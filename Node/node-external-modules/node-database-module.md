# node database module

- [mysql](#mysql)
- mariadb
- [postgresql](#postgresql)
- [mongodb](#mongodb)
- sqlite
- tedious
- ...



## mysql

```bash
$ npm install mysql
```

```js
const mysql = require('mysql');

const db = mysql.createConnection({
    host : '127.0.0.1',
    port : '3306',
    user : '',
    password : '',
    database : '',
});



db.query('SELECT * FROM 테이블', (err, data) => {
    console.log(err, data);
});
```



## postgresql


```bash
$ npm install pg
```

```js
const pg = require('pg');

const db = new pg.Pool({
    host : '127.0.0.1',
    port : '5432',
    user : '',
    password : '',
    database : '',
});

db.connect();


db.query('SELECT * FROM 테이블', (err, data) => {

    console.log(err, data);
    db.end();

});
```



## mongodb

- mongodb
- mongoose
