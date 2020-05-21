# JS Function
: [Function](./object/js-obj-function.md)의 인스턴스로 호출 가능한 객체      
: 객체의 정보 구조, 정보 은닉, 행위 등을 지정하고 재사용하기 위해 모듈화 함             
: JS에서 함수는 일급 객체로 취급하는 일급 함수      
: 오버로딩이 없어 함수명이 같을 경우 마지막으로 선언된 함수가 사용됨      

- [function parameter](#function-parameter)
    - [default parameter (ES6)](#default-parameter)
    - [rest parameter (ES6)](#rest-parameter)
- [function arguments](#function-arguments)
- [function return](#function-return)
- [function this](#function-this)
- [first class function](#first-class-function)
- [call by value vs call by reference](#call-by-value-vs-call-by-reference)



```js
function 함수명(parameter) {
    statement;
    return;
}

함수명(argument);


// 함수 선언문
// : JS 엔진은 함수 선언을 가장 먼저 호이스팅함
function func(){ }


// 함수 표현식
// 1. 무명 함수 표현식
var f = function(){ };

// 2. 기명 함수 표현식 -- 재귀적 호출을 위해 사용  
var f = function func(){ };

// 3. 무명 즉시 실행 함수
(function(){ })();

// 4. 기명 즉시 실행 함수
(function func(){ })();


// 함수 생성자
// : 함수 동적 정의시 사용
var func = new Function('a','b','return a+b');


// new + function -- 사용 주의
var obj = new function(){ };

(obj.constructor === Function) == false
(obj.constructor === Object) == false

typeof new Function() === 'function'
typeof new function(){} === 'object'
```



## function parameter     
= 매개 변수        
: 파라미터의 기본 값은 undefined   

```js
function func(a, b, c){
    console.log(`${a} : ${b} : ${c}`);
}

func();
func(1);
func(1, '2', [3]);


// 주의
function func(a, b){
    return a + b;
}

Object.is(NaN, func(1)) == true
```



### default parameter
: 파라미터의 기본 값 설정

```js
// ES6 이전  
function func(a, b, c){
    a = a || 0;
    b = (b == undefined) ? 1 : b;
    c = (typeof c == 'undefined') ? 2 : c;

    console.log(`${a} : ${b} : ${c}`);
}


// ES6
function func(a=0, b=1, c=2){
    console.log(`${a} : ${b} : ${c}`);
}


// 구조 분해 할당 (ES6) 적용 가능
function func([a, b, c] = [0, 1, 2]){
    console.log(`${a} : ${b} : ${c} `);
}


// 데이터 타입 주의
function func(num=0){
    return num;
}

(typeof func() === 'number') == true
(typeof func(undefined) === 'number') == true

(typeof func('1') === 'string') == true
(typeof func(null) === 'object') == true


// 이전 매개 변수 사용 가능
function func(a, b=a+1, c=b+1){
    console.log(`${a} : ${b} : ${c}`);
}
```



### rest parameter   
: [spread 연산자](./js-operator.md#spread-연산자)를 사용한 파라미터    
: 함수에 전달되는 값들이 rest 파라미터에 할당   
: rest 파라미터는 [Array](./object/js-obj-array.md)의 인스턴스인 이름없는 배열  

```js
function func(...args){
    return args;
}

Array.isArray(func(1,2,3)) == true


function func(...args){
    args.forEach((value, index) => {
        console.log(`${index} :: ${value}`);
    });
}

func(...('abc'));


// 구조 분해 할당 (ES6)
function func(...[a, b, c]){
    return [a, b, c];
}

var arr = func(1, 2, 3);
(arr[0] === 1) == true
```



## function arguments
: 가변 인자 함수일 경우 함수로 전달되는 모든 값을 담는 객체      
: 유사 배열 객체로 Array의 인스턴스 아님       
: 배열이 아니므로 length를 제외한 배열 관련 기능 사용 불가     

```js
function func(){
    return arguments;
}

var obj = func(1,2,3,4,5);

obj instanceof Array == false
Array.isArray(obj) == false
(obj.length === 5) == true


// 배열로 변환  
// ES6 이전
function func(){
    return [].slice.call(arguments);
}

var arr = func();
Array.isArray(arr) == true


// ES6
function func(){
    return Array.from(arguments);
}

function func(){
    return [...arguments];
}

var arr = func();
Array.isArray(arr) == true


// https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#3-managing-arguments
function doesntLeakArguments() {
    var args = [];
    for(var i = 0, len = arguments.length; i < len; ++i) {
        args.push(arguments[i]);
    }
    return args;
}

var arr = doesntLeakArguments();
Array.isArray(arr) == true
```



## function return
: 함수 실행을 종료하고 함수를 호출한 곳으로 수행한 결과 리턴  

```js
// return을 명시하지 않은 경우 undefined 반환
function func(){}
(func() === undefined) == true


// return 문을 만나면 함수 실행 종료
function func(a, b){
    return result;
    var result = a + b;
}

(func(1, 2) === undefined) == true


// return 문에 줄바꿈이 필요한 경우 괄호 사용  
function func(a, b, c){
    return (
        a + b + c
    );
}


// 결과 배열로 리턴
function func(a, b, c){
    return [a, b, c];
}

var arr = func(1, 2, 3);
(arr[2] === 3) == true  


// 결과 객체로 리턴
function func(a, b, c){
    return { a, b, c };
}

var obj = func(1, 2, 3);
(obj.b === 3) == true


// 함수 선언문 호이스팅 주의
var num = (function(){
    function f(){
        console.log('내부 함수 : 실행 안됨');
        return 1;
    }

    return f();

    function f(){
        // 함수명이 같을 경우 마지막에 선언된 함수가 실행  
        console.log('내부 함수 : 실행');
        return 2;
    }

})();

function f(){
    console.log('외부 함수 : 실행 안됨');
    return 0
}

(num === 2) == true
```



## function this  
: 현재 실행 문맥      
: 함수 호출 방식에 따라 달라짐     
: 화살표 함수에서 this 주의   

\+ Function.prototype.bind()
\+ [바운드 함수](#)


**함수**

```js
// var
var num = 0;

function func(){
    var num = 100;
    console.log(num === 100);

    // 함수 실행시 this는 전역 객체
    console.log(this.num === 0);
}


// let, 엄격 모드
let num = 0;

function func(){
    let num = 100;
    console.log(num === 100);
    console.log(this.num === undefined);
}
```


**메소드**

```js
var num = 0;
var obj = {
    num : 100,
    func : function() {
        console.log(num === 0);
        console.log(this.num === 100);
    }
};


// 화살표 함수 (ES6) 주의
var num = 0;
var obj = {
    num : 100,
    func : () => {
        console.log(num === 0);
        console.log(this.num === 0);
    }
};
```


**생성자**

```js
var num = 0;
var str = 'A';

function Class(){
    var num = 100;
    this.str = 'B';

    this.func = function(){
        console.log(num === 100);
        console.log(this.num === undefined);

        console.log(str === 'A');
        console.log(this.str ==='B');
    };
}

var c = new Class();
c.func();
```



## first class function  
: 함수를 리터럴-값으로 표현 가능    
: 함수를 변수와 배열에 할당 가능      
: 함수의 파라미터로 함수를 전달하고 반환 가능    


```js  
// 변수에 함수 할당
var func = function(num){ return num };
(typeof func(0) === 'number') == true
(func(0) === 0) == true


// 배열에 함수 할당
var arr = [];
arr[0] = func(0);
(arr[0] === 0) == true


// 함수를 파라미터로 전달
function func(f1, f2){
    return f1() + f2();
}

function num1(){ return 1 }
function num2(){ return 2 }

var result = func(num1, num2);
(result === 3) == true


// 함수 반환 = 고차 함수   
function func(a){
    return function(b){
        return a + b;
    }
}

var result = func(1)(2);
(result === 3) == true
```



## call by value vs call by reference

```js
// call by value
var num = 5;

function func(n){
    n += n;
    return n;
};

(num === 5) == true

(func(num) === 10) == true
(typeof func(num) === 'number') == true


// call by reference
var obj = {
    key : 'value'
};

function func(o){
    o.key = null;
    return o;
}

var test = func(obj);
(test[1].key === null) == true

(obj.key === null) == true
```



[top](#)
