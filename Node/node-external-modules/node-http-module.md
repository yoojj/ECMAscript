# Node Http Request Module


- [request](#request)
- [axios](#axios)
    - faxios (https://github.com/lsabbagh/faxios)
- got
- needle
- superagent
- node-fetch (https://github.com/node-fetch/node-fetch)
- ...



## request
: 노드 내장 모듈인 http와 https 모듈을 래핑    


```bash
$ npm install request
```

```js
const request = require('request');


// get  
request('url', (error, response, body) => { .. });


// post
const option = {
    url : '',
    method : 'POST',
    headers : { .. },
    form : { .. }
};

request.post(option, (error, response, body) => { .. });
request.post(option, { formData : {..} }, (error, response, body) => { .. });


// json
const option = {
    url : '',
    method : 'POST',
    headers : { .. },
    body : { .. },
    json : true
};

request.post(option, (error, response, body) => { .. });


// 기본 설정
const req = request.defaults({
    headers : { .. }
});

req.('url', (error, response, body) => { .. });
```



## axios
: promise 기반 Http Request 모듈    
: 서버와 클라이언트 모두 지원   

! http 모듈과 request 모듈은 promise를 지원하지 않음  


```bash
$ npm install axios
```

```js
axios({
    url : 'url',
    method : 'POST',
    data : { .. },
    responseType : '',
});

axios.get('url', { .. }).then().catch();
axios.post('url', { .. }).then().catch();
```



[top](#)
