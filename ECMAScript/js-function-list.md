# JS Function list

- [내장 함수](#내장-함수)
- [익명 함수](#익명-함수)
- [동적 함수](#동적-함수)
- [중첩 함수](#중첩-함수)
- [헬퍼 함수](#헬퍼-함수)
- [재귀 함수](#재귀-함수)
- [고차 함수](#고차-함수)
- [클로저 함수](#클로저-함수)
- [커링 함수](#커링-함수)
- [동기 함수](#동기-함수)
- [비동기 함수](#비동기-함수)
- [콜백 함수](#콜백-함수)
- [바운드 함수](#바운드-함수)
- [화살표 함수 (ES6)](#화살표-함수-es6)
- [제너레이터 함수 (ES6)](#제너레이터-함수)
- promise (ES6)
- async & await(ES8)



## 내장 함수  
: 미리 정의된 함수

- [전역 함수](./object#global-object)
- 내장 객체의 함수들
- 호스트 객체의 함수들 -- ex. 입력 함수, 타이머 함수  



## 익명 함수
: 이름없는 함수로 변수나 객체의 속성을 통해 사용  
! 함수 호이스팅이 발생하지 않으므로 함수 호출전 선언 필수  

```js
var func = function(){ };


var result = (function(a, b){ return x+y })(1,2);
(result === 3) == true


function func(a){
    return function(b){
        return a + b;
    }
}

var result = func(1)(2);
(result === 3) == true
```



## 동적 함수
: 함수 생성자를 통해 동적으로 함수 생성  

> new Function('...args', 'function-body');

```js
var func = new Function('return 0');
var result = func();
(result === 0) == true


var func = new Function('a', 'b', 'return a+b');
var func = new Function('a, b', 'return a+b');
var result = func(1,2);
(result === 3) == true


var num = 0;
(new Function('console.log(`${num} : ${str}`)'))();
var str = 'A';
```



## 중첩 함수  
: 함수 내부에 정의되는 다른 함수  

```js
// 외부 함수 = 부모 함수
function outer(){

    var num = 0;

    // 내부 함수 = 자식 함수
    // : 외부 함수가 실행되기 전까지 내부 함수는 생성되지 않음  
    // : 외부 함수의 매개 변수와 지역 변수에 접근-참조 할 수 있음  
    function inner(){
        return num;
    }

    return inner();
}

(outer() === 0 ) true
// 외부 함수 종료시 내부 함수도 소멸됨
// 외부 함수가 사용되는 만큼 내부 함수가 생성되고 소멸됨


// 함수를 자주 사용한다면 중첩 구조로 사용하지 않는 것이 좋음
function outer(){
    return inner();
}

function inner(){ }
```



## 헬퍼 함수
: 다른 함수의 기능 일부를 수행하는 함수   
: 함수의 복잡성을 줄이기 위해 별도로 정의되는 함수     



## 재귀 함수
: 함수 블록 안에 자기 자신을 참조-호출       
: 제어가 없으면 무한히 반복하게 되므로 종료 조건 필요   
: ES6부터 꼬리 호출 최적화 지원

\+ [memoization](./JS-pattern/js-memoization.md)

```js
// 팩토리얼
var factorial = function(n){
    var result = 1;

    for(var i=1; i<=n ; ++i){
        result = result * i;
    }

    return result;
}


// 재귀를 이용한 팩토리얼
var factorial = function(n){
    if(n <= 0){
        return 1;
    } else {
        return (n * factorial(n-1));
    }
}
```


**Proper Tail Call**    
https://webkit.org/blog/6240/ecmascript-6-proper-tail-calls-in-webkit/



## 고차 함수
: 함수의 파라미터로 전달하는 함수    
: 함수의 결과-값으로 반환되는 함수   

\+ [first class function](./js-function.md#first-class-function)

```js  
function func(n){
    return n*n
};

var result = (f, num) => f(num);
(result(func, 10) === 100) == true
```



## 클로저 함수
: 내부 함수가 자신에게 없는 변수를 외부 함수에서 찾아 참조 함 -- 스코프 체인    
: 외부 함수 실행이 종료되어도 참조가 끊어지지 않을 경우 외부 함수의 변수에 접근 가능 -- 변수의 유효 범위 확장     
: 클로저 함수로 private variable-method 흉내내어 캡슐화와 은닉화 기능  

```JS
// 전역 변수 참조
var num = 1;

function A(){
	function B(){ return num }
    return B;
}

var test = A();
(test() === 1) == true

var test = A()();
(test === 1) == true


// 외부 함수의 지역 변수 참조
function A(){
    var num = 2;
	function B(){ return num }
    return B;
}

var test = A();
(test() === 2) == true


// 외부 함수의 매개 변수 참조
function func(num){
    return function(){
        return num++;
    }
}

var count = func(1);
count() === 1
count() === 2
count() === 3


// 지역 변수 이름이 동일할 경우 -- Variable Shadowing
function A(){
    var num = 0;

    function B() {
        var num = 100;
        console.log(num === 100);
        console.log(this.num === undefined);
    }

    B();
}


function A(){
    this.num = 0;

    function B() {
        var num = 100;
        console.log(num === 100);
        console.log(this.num === 0);
    }

    B();
}


function A(){
    var num = 0;

    function B() {
        this.num = 100;
        console.log(num === 0);
        console.log(this.num === 100);
    }

    B();
}


// 클로저를 이용한 캡슐화
function func(){
    this._num = 100;
    this._str = '';

    return {
        getNum : function(){ return _num },
        getStr : function(){ return _str },
        setStr : function(str){ _str = str }
    }
}

var test = func();
(test.getNum() === 100) == true


// 클로저 스코프 문제 주의  
var result = [];

for(var i=0; i<5; ++i){
    result.push(
        function(){ return i }
    );
}

(result[0]() === 5) == true
(result[4]() === 5) == true
```



## 커링 함수

```js
function A(a, b){
    return function B(c){
        return a + b + c;
    }
}

var result = A(1,2);
(result(3) === 6) == true
```



## 콜백 함수
: 함수를 파라미터로 전달하고 특정 시점에 호출하여 실행되는 함수   

```js
function func(num, callback){
    return num + callback();
}

(func(1, () => 1) === 2) == true
```



## 바운드 함수

```js
var obj = {
    key : 'value'
};

var bound = function() {
    console.log(this);
    return this.key;
};

var test = bound.bind(obj);
(test() === 'value') == true
```



## 화살표 함수 (ES6)  
: 함수 표현을 단순화 함     
: function 키워드 대신 화살표 기호를 사용해 함수 생성   
: new 연산자 사용이 불가능하여 인스턴스 생성 불가    
: agumensts 객체 사용이 불가능하며 대신 rest parameter 사용  
: this 주의, 화살표 함수는 this를 변경하지 않음     

```js
// 파라미터가 없을 경우
() => { };

// 파라미터가 하나면 괄호 생략 가능
param => { };

// funtion(param1, param2){  }
(param1, param2) => { };

// 디폴트 매개 변수 (ES6)
(param1=0, param2=0) => { };

// 나머지 매개 변수 (ES6)
(param1, param2, ...args) => { };


// 객체 반환
var obj = (a, b, c) => { return { a, b, c } };
var obj = (a, b, c) => ({ a, b, c });
```



## 제너레이터 함수
: [제너레이터](./object/js-obj-generator.md) 객체를 반환       
: 일반 함수가 값을 반환한다면 제너레이터 함수는 이터레이터 객체를 반환        
: 함수의 실행을 단계적으로 나누고 이를 제어 가능   
: function* 키워드로 선언하고 yield 문 사용   

```js
function* func(){
    yield 1;
    yield 2;
    yield 3;

    return 0;
}

for(var i of func()){
    console.log(i);
}

var generator = func();

var a = generator.next();
var b = generator.next();
var c = generator.next();

(a.value === 1) == true
(b.value === 2) == true
(c.value === 3) == true
```



[top](#)
