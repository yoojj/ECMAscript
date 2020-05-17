# JS Expression
: 결과-값을 명시적으로 반환     
: 표현식 결과를 변수, 상수, 프로퍼티에 할당해 사용         
: 표현식은 statement처럼 작동할 수 있음 (statement는 표현식처럼 작동할 수 없음)

**종류**   
- [리터럴 표현식](#리터럴-표현식)
- [배열 & 객체 리터럴 표현식](#배열--객체-리터럴-표현식)
- 연산자 표현식
    - [문자열 표현식](#문자열-표현식)
    - [산술 표현식](#산술-표현식)
    - [논리 표현식](#논리-표현식)
    - [할당 표현식](#할당-표현식)
    - [대입 표현식](#대입-표현식)
- [함수 표현식](#함수-표현식)
- [호출 표현식](#호출-표현식)
- [객체 표현식](#객체-표현식)
- [클래스 표현식 (ES6)](#클래스-표현식)
- [구조 분해 할당 (ES6)](#구조-분해-할당)



## 리터럴 표현식

```js
0
'0'
true
false
undefined
null
NaN
Infinity
this
```



## 배열 & 객체 리터럴 표현식

```js
[]
{}

// 초기화
[1, 2, 3]
{ a:1, b:2, c:3 }
```



## 문자열 표현식

```js
'string'
'str' + 'ing'
```



## 산술 표현식

```js
1 + 1

// statement
var i = 0;

// expression
++i;
++i;
```



## 논리 표현식

```js
1 > 0


true && true

true || false

!true
!false
```



## 할당 표현식  
: 할당 연산자를 통해 변수에 값을 할당하는 표현식

**Left Hand Side Expression**   
: 할당 표현식에서 왼쪽에 있는 표현식

```js
// 변수가 표현식  
num = 1;
str = 'string';

// 속성이 표현식
obj.key = 0;

// 배열의 요소가 표현식
arr[0] = 0;
```



## 함수 표현식

```js
function func(){ };
function(){ };
() => { };


// IIFE
(function(){
}());


// 부수 효과 주의
function add() {
    num = num + 1;
}
let num = 10;

add();
(num == 11) == true;

add();
(num == 12) == true;
```



## 호출 표현식
: 선언된 변수와 함수를 호출하여 실제로 실행    

```js
// statement
var num;

// expression
num
num + 1


// function declaration statement
function func(){ }

// function expression
func();
func( function(){} );

// named function expression
func( function f(){} );

```



## 객체 표현식

```js
new Object();


// statement
var obj;

// expression
obj = {};

obj = {
    a : 1,
    b : 2,
    c : { },
};


// es6
var a = 1;
var b = 2;
var c = {};

var obj = { a, b, c };
```



## 클래스 표현식

```js
// 익명 클래스 식
var C = class {
    constructor(args){
        this.args = args;
    }
};

var instance = new C();
```



## 구조 분해 할당
Destructuring Assignment    
: 데이터 전체나 일부를 한 번에 여러 변수에 할당   

```js
var [a, b, c] = [1, 2];
(a === 1) == true
(c === undefined) == true


var [a=0, b=0, c=0] = [1, 2];
(a === 1) == true
(c === 0) == true


var [a, b, ...args] = [1, 2, 3, 4, 5];
(args.toString() === '3,4,5') == true


// 함수
function func({a,b,c}){
    console.log( a, b, c );
}

func({a:1, b:2, c:3});
func({c:3, b:2, a:1});


// 객체
var obj = { a:1, b:2, c:3 };
var { a, b, c} = obj;
(a === 1) == true

obj.a = 11;
(a === 1) == true


// 프로퍼티 명을 바꿀 경우
var obj = { a:1, b:2, c:3 };
var { a:x, b:y, c:z } = obj;
(x === 1) == true
```



[top](#)
