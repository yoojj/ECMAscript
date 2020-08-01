# Node File System
https://nodejs.org/api/fs.html  



```js
const fs = require('fs');

// 비동기식 파일 읽기
fs.readFile('file', [options], callback);

// 동기식 파일 읽기
fs.readFileSync('file', [options]);

// 비동기식 파일 쓰기
fs.writeFile('file', data, [options], callback);

// 동기식 파일 쓰기
fs.writeFileSync('file', data, [options]);

// 파일 이름 변경
fs.rename('file', '변경될file', callback);

// 비동기식 폴더 생성
fs.mkdir(path, [mode], callback);

// 동기식 폴더 생성
fs.mkdirSync(path, [mode]);

// 비동기식 폴더 삭제하기
fs.rmdir(path, callback);     

// 비동기식 폴더 삭제하기                   
fs.rmdirSync(path);
```


ex.

```js
const fs = require('fs');

fs.readFile('file.txt', encoding='utf-8', (error, data) => {

    if(error) throw error;

    console.log(data);

});
```
