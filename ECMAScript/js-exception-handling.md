# JS Exception Handling
: Runtime Error 발생시 [Error](./object/js-obj-error.md) 객체를 통해 처리   

- [throw](#throw)
- [try catch](#try-catch)
- [사용자 정의 예외](#사용자-정의-예외)

오류 | 시점 | 설명
---|---|---
Syntax Error  | 컴파일 | 구문 분석 오류로 문법이 유효하지 않을 경우  
Runtime Error | 런타임 | 실행 중 발생하는 오류로 문법적으로 문제가 없음
Logical Error | 런타임 | 코드에 논리적으로 문제가 있을 경우   



## throw
: 반드시 처리해야 할 예외를 일으킴    
: throw 문 이후 문장은 실행되지 않음    

```js
var result;

if(true){
    var a = 1;
    var b = 2;
    throw '예외 발생';
    result = a + b;
}

(result === undefined) == true
```



## try catch

> try { } catch(exception) { }  
> try { } finally { }  
> try { } catch(exception) { } finally { }

```js
try {
    // 예외 가능성이 있는 문장
} catch(){
    // 예외가 발생할 경우 실행될 문장
} finally {
    // 예외와 관련없이 무조건 실행할 문장
}


try {
    var obj;
    obj.num = 0;
} catch(e){
    console.log('[error] ' + e.message);
}


try {
    var obj;
    if(obj === undefined)
        throw Error('undefined error');
} catch(e){
    console.log('[error] ' + e.message);
}
```



## 사용자 정의 예외

```js
// ES5
function UserDefinedException (message, ...args){
    this.name = this.constructor.name;
    this.message = message;
    this.args = args;
};


// ES6
class UserDefinedException extends Error {
    constructor(message, ...args) {
        super();
        this.name = this.constructor.name;
        this.message = message;
        this.args = args;
    }
}


// ex.
function add(x, y){
    if(!Number.isInteger(x) && !Number.isInteger(y)){
        throw new UserDefinedException('숫자만 입력하세요.');
    }
    return x + y;
}
```



[top](#)
