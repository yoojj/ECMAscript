# JS Arguments

https://tc39.es/ecma262/#sec-arguments-exotic-objects


프로퍼티 | 설명
---|---
callee | 현재 실행 중인 함수
caller | 현재 실행 중인 함수를 호출한 함수
length | 함수에 전달된 인자 개수


ex.
```js
function fn(){
    return arguments;
}

var obj = fn(1,2,3,4,5);
(obj.callee.name === 'fn') == true
(obj instanceof Object) == true
(obj instanceof Array) == false


// 주의
var obj = function(){
    return arguments;
};

var num = function(){
    var arguments = 0;
    return arguments;
};

(typeof obj() === 'object') == true
(typeof num() === 'number') == true


// 매개 변수 개수 강제
function fn(x, y){
    if(arguments.length !== 2){
        throw new Error('오류');
    }
    return arguments;
}


// 배열로 변환
function fn(){
    return arguments;
}

var obj = fn(1,2,3,4,5);
var arr = Array.prototype.slice.call(obj);
(arr instanceof Array) === true
```



[top](#)
