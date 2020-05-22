# JS Number

```js
// 전역 함수
Number();

// 생성자
new Number();


var num1 = Number(1);
var num2 = new Number(2);

typeof num1 === 'number'
typeof num2 === 'object'

num1 instanceof Number === false
num2 instanceof Number === true
```


프로퍼티 | 설명
---|---
EPSILON (ES6)     | 머신 입실론 정의   
MAX_SAFE_INTEGER  | 표현 가능한 가장 큰 수
MAX_VALUE         | 표현 가능한 가장 큰 수로 이보다 더 큰 값은 Infinity
MIN_SAFE_INTEGER  | 표현 가능한 가장 작은 수
MIN_VALUE         | 표현 가능한 가장 작은 수 이보다 작은 값은 -Infinity
NEGATIVE_INFINITY | -Infinity
NaN               | NaN
POSITIVE_INFINITY | Infinity


- [Number.isNaN()](#numberisnan)
- Number.isFinite()
- [Number.isInteger](#numberisinteger)
- Number.isSafeInteger()
- Number.parseFloat()
- Number.parseInt()
- Number.prototype.toExponential()
- [Number.prototype.toFixed()](#numberprototypetofixed)
- [Number.prototype.toPrecision()](#numberprototypetoprecision)
- [Number.prototype.toString()](#numberprototypetostring)
- Number.prototype.valueOf()



## Number.isNaN()
: 데이터 타입 변환 후 숫자 타입에 한해 NaN 여부 반환     
! 전역 메소드 isNaN()과 유사한 기능이나 차이 주의    

```js
this.isNaN() === true
this.isNaN(undefined) === true
this.isNaN(NaN) === true
this.isNaN('100원') === true
this.isNaN({}) === true
this.isNaN(new Date('')) === true
this.isNaN(new Number(0/0)) === true

this.isNaN(null) === false
this.isNaN(Infinity) === false
this.isNaN(true) === false
this.isNaN(false) === false
this.isNaN([]) === false
this.isNaN(new Date()) === false


// Number() === 0
// Number(null) === 0

Number.isNaN(NaN) == true

Number.isNaN() === false
Number.isNaN(undefined) === false
Number.isNaN(null) === false
Number.isNaN(Infinity) === false
Number.isNaN(true) === false
Number.isNaN(false) === false
Number.isNaN('100원') === false
Number.isNaN({}) === false
Number.isNaN([]) === false
Number.isNaN(new Date('')) === false
Number.isNaN(new Number(0/0)) === false
```



## Number.isInteger()
: 값이 정수인지 판별  

```js
Number.isInteger(1) === true
Number.isInteger(1.1) === false
Number.isInteger('1') === false
```



## Number.prototype.toFixed()
: 숫자를 고정 소수점 형식으로 반환   

```js
var num = 123.456789;

num.toFixed(0) === '123'
num.toFixed(1) === '123.5'
num.toFixed(5) === '123.45679'
```



## Number.prototype.toPrecision()

```js
var num = 123.456789;

num.toPrecision(1) === '1e+2'
num.toPrecision(3) === '123'
num.toPrecision(5) === '123.46'
num.toPrecision(6) === '123.457'
```


## Number.prototype.toString()
: Object.prototype.toString() 오버라이드    
: 숫자를 문자열로 반환  

```js
var str = (0).toString();
(typeof str === 'string') == true


// 진법 변환
var num = 100;
num.toString() === '100'
num.toString(2) === '1100100'
num.toString(8) === '144'
num.toString(10) === '100'
num.toString(16) === '64'
```



[top](#)
