# JS Module
: 전역 네임스페이스 오염 등 문제점 보완 및 서버 사이드 환경에서 사용하기 위해 기능을 파일 단위로 모듈화하는 개발 방식 등장   
: ES2015 이전에는 모듈 정의를 위한 문법적 지원이 없어 모듈 정의 패턴과 포맷 사용     
: ES2015 이후 문법 지원     


- 모듈 패턴
    - [즉시 실행 함수 표현식](#즉시-실행-함수-표현식)
    - [노출식 모듈 패턴](#노출식-모듈-패턴)
- [모듈 포맷](#모듈-포맷)
    - [CommonJS](#commonjs)
    - [AMD](#amd)        
    - [UMD](#umd)
    - [ES Module](#es-module)



## 즉시 실행 함수 표현식
Immediately Invoked Function Expression   
: 함수 정의 후 바로 실행되는 함수 표현식      
: 런타임시 구문을 해석하기 때문에 외부에서 접근이 제한됨   


```js
(표현식);
(함수 표현식)(함수 호출);


(function(){ .. })();
(() => { .. })();


// function 키워드 앞에 일항 연산자를 붙여 함수 표현식으로 만들어 사용  
-(function() { .. })();

+(function() { .. })()

~(function() { .. })();

!(function() { .. })();


// 더글라스 클락포트 권장 표기법
(function() { .. }());
```



## 노출식 모듈 패턴

```js
const Module = (function(){

    // private 변수
    let _num = 0;

    // public 변수
    let num = 100;

    return {
        num : num,
        increase() { return ++_num; },
        decrease() { return --_num; },
    }

})();


// 사용 방법1
Module.increase();


// 사용 방법2
const module = new Module();
module.increase();
```



## 모듈 포맷
= 모듈 시스템   
: 모듈 포맷으로 작성된 모듈을 해석-실행하기 위해 해당 모듈 포맷 명세를 구현한 모듈 로더가 필요   
: 브라우저에서 모듈 포맷으로 작성된 모듈을 사용하기 위해 모듈 번들러 필요    
: ESM 모듈 포맷을 지원하는 브라우저 경우 스크립트 태그에 type='module' 속성으로 사용 가능   


**모듈 로더** (런타임 실행)         
: 모듈 로드 및 종속성 관리  

- SystemJS
- RequireJS


**모듈 번들러** (빌드타임 실행)   
: 모듈 로드 및 종속성 관리  
: 브라우저에서 실행 가능 하도록 모든 모듈을 단일 파일로 만듬     

- webpack
- parcel
- rollup
- ...


**모듈 포맷 종류**  
- [CommonJS](#commonjs)
- [AMD](#amd)        
- [UMD](#umd)
- [ES Module](#es-module)


모듈 포맷 | API | 특징
---|---|---
CJS | module.exports, exports, require | 서버 사이드 중심 모듈 표준, 동기
AMD | defind         | 클라이언트 중심 모듈 표준, 비동기
UMD | module.exports | 범용 모듈 정의
ESM | export, import | CommonJS + AMD, 비동기  



### CommonJS
= ServerJS  
: 서버 사이드 중심 표준 모듈 명세 제정  
: 동기식으로 작동하여 브라우저에서 사용시 문제   


**원칙**
1. 모듈 자신만의 독립적인 실행 영역 존재  
2. 모듈 정의에는 exports 객체 사용
3. 모듈 사용에는 require 함수 사용


```js
// module.exports
module.exports = { .. }

const obj = {};
module.exports.obj = obj;


// export
// : module.exports 참조  
const obj = {};
exports.obj = obj;


// require
const module = require('./example');
```



### AMD
Asynchronous Module Definition  
: 클라이언트 사이드 중심 표준 모듈 명세 제정    
: 비동기식 모듈 정의  



### UMD
Universal Module Definition  
: 만능 모듈 정의  
: 모듈 로더가 없어도 실행 가능  




### ES Module
: ES6 부터 표준으로 지원하는 모듈 포맷   


**export**

- default export
- named export

```js
// 1. default export
export default function(){ .. }
export default function func(){ .. }
export default class {}

// 1. default export
function func() { .. }
export default { func }

// 1. default export
const obj = {};
function func() { .. }
export { obj, func as default }


// 2. named export
export function func() { .. }

// 2. named export
const obj = {};
function func() { .. }
export { obj, func }
```


**import**

- static import
- dynamic import  

```js
// 1. static import
import { func } from './example.js'
func();

import { func as f } from './example.js'
f();

import * as module from './example.js'
module.func();


// 2. dynamic import  
// : 조건부로 모듈 import 가능
const module = './example.js'
import(module).them( (module) => {..});

import( 조건 ? './example.js' : './example2.js').then( .. );
```



[top](#)
