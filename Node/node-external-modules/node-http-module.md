# node http request module

- request
- axios
    - faxios (https://github.com/lsabbagh/faxios)
- got
- needle
- superagent
- node-fetch (https://github.com/node-fetch/node-fetch)
- ...




## request
: 노드 내장 모듈인 http와 https 모듈을 래핑한 모듈


```bash
$ npm install request
```

```js
const request = require('request');

// 기본 get 요청  
request('주소', (error, response, body) => { .. });


// post
const option = {
    url: '',
    method: 'POST',
    headers: { .. },
    form: {
        key : ''
    }
};

request.post(option, (error, response, body) => { .. });
request.post(option, { formData: {..} }, (error, response, body) => { .. });


// json
const option = {
    url: '',
    method: 'POST',
    headers: { .. },
    body: { .. },
    json: true
};

request.post(option, (error, response, body) => { ... });


// 기본 설정
let req = request.defaults({
    headers: { .. }
});

req.('주소', (error, response, body) => { .. });
```
