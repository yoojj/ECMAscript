# JS Error

```js
// 전역 함수
Error();

// 생성자
new Error();
```

속성 | 설명
---|---
name        | 오류 이름
message     | 오류에 대한 설명으로 브라우저에 따라 설명이 다를 수 있음  
description (비표준)  | 오류 설명  
fileName (비표준)     | 오류가 발생한 파일 경로
lineNumber (비표준)   | 파일에서 오류가 발생한 줄 번호
stack (비표준)        | 스택 추적



**하위 객체**

객체 | 설명
---|---
EvalError      | eval() 관련 에러
InternalError  | JS 엔진 내부에서 발생한 에러
RangeError     | 값이 없거나 유효하지 않는 값의 범위일 때 발생  
ReferenceError | 존재하지 않는 객체를 참조할 경우 발생  
SyntaxError    | 유효하지 않은 코드 해석시 발생
TypeError      | 피연산자 타입이 유효하지 않아 연산을 할 수 없는 경우 발생  
URIError       | URI 관련 전역 함수에 부적절한 파라미터가 사용될 경우 발생


```js
// RangeError
var arr = Array(-1); // Invalid array length

function loop(n){
    if(n > 0)
        loop(n+1);
}
loop(1); // Maximum call stack size exceeded


// ReferenceError
str.toString(); // str is not defined

method(); // method is not defined

function func(){
    var num = 0;
}
num; // num is not defined


// TypeError
var obj;
obj.num = 0; // Cannot set property 'num'

var arr;
arr.length // Cannot read property 'length'

this.method(); // this.method is not a function
```



## Error.prototype.toString()
: name과 message 반환

```js
var e = Error();
(e.toString() === 'Error') == true

var e = Error('test');
(e.toString() === 'Error: test') == true
```



[top](#)
