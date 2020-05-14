# JS Type Coercion
: 암시적 데이터 타입 변환    
: 연산식에서 피연산자의 타입이 맞지 않을 경우 JS 엔진이 적절한 타입으로 강제-자동 변환함   

```js
// ToBoolean()
(true == 1) == true
(true === 1) == false

(false == 0) == true
(false === 0) == false

(true + true)  === 2
(true + false) === 1

(true | false) == 1
(true || false) === true

(1/true) === 1
(1/false) === Infinity


// ToNumber()
if(1) { console.log('true') }
if(-1) { console.log('true') } else { console.log('false') }
if(0) { console.log('true') } else { console.log('false') }

var temp = '1' && 1;
(typeof temp === 'number') == true

var temp = 1 && '1';
(typeof temp === 'string') == true

(1 > null) == true


// ToNumber(), ToString()
5 + 5 + 5   === 15
5 + 5 + '5' === '105'
'5' + 5 + 5 === '555'

'5' * '5' === 25
'5' * 5   === 25
('5') * 5 === 25

(2 > '1') == true


// ToString()
var temp = 'true';
(temp + temp) === 'truetrue'
```


**ToPrimitive(input)**  
: 객체를 프리미티브 타입으로 변환   

1. input이 값이면 그대로 반환
2. 그렇지 않다면 input은 객체이므로
    2-1. 숫자형일 경우 input.valueOf() 호출하여 결과가 값이면 그대로 반환
    2-2. 그렇지 않다면 input.toString() 호출하여 결과가 값이면 그대로 반환
    2-1. 문자형일 경우 input.toString() 호출하여 결과가 값이면 그대로 반환
    2-2. 그렇지 않다면 input.valueOf() 호출하여 결과가 값이면 그대로 반환
3. 그렇지 않다면 TypeError 반환

```js
const arr = [];
arr.valueOf()  // []
arr.toString() // ''


const obj = {};
obj.valueOf()  // {}
obj.toString() // [object Object]


[] + {}   // [object Object]
({} + []) // [object Object]
{} + [] == 0


var temp = ![];
(typeof temp) === 'boolean'

(![] + ![]) == 0

(+[] === 0) == true
(-[] === -0) == true
(+[]+[] === '0') == true

[1] + [2] + [3] === '123'
[1] * [2] * [3] === 6
```



# JS Conversion
= Explicit Type Coercion, Type Casting   
: 형변환 연산자 및 함수를 사용해 명시적으로 데이터 타입 변환    

- [Boolean](#boolean)
- [Number](#number)
- [String](#string)



## Boolean

```js
// false
Boolean()
Boolean(false)
Boolean(0)
Boolean('')
Boolean(null)
Boolean(undefined)
Boolean(NaN)

// ture
Boolean(true)
Boolean('0')
Boolean('true')
Boolean('false')
Boolean(function(){})
Boolean([])
Boolean({})


var temp = Boolean('true');
(temp + temp) === 2
```



## Number

- Number()
- Number.parseInt()
- Number.parseFloat()
- \+ 연산자



### Number()

```js
// NaN
Number(undefined)
Number(NaN)
Number('abc')
Number({})
Number(function(){})

// 0
Number(null)
Number(false)
Number([])
Number('')

// 1
Number(true)
Number(' ')

// true
Number(null) === Number(false)

// false
Number(undefined) === NaN
Number(undefined) === undefined
```



### parseInt()
: 수로 시작하는 문자열만 처리   
: radix는 2~36 사이의 진수  
: string에 따라 radix를 판단하므로 radix 값을 명시하는 것이 좋음

> parseInt(string, radix)

```js
let str = '1 2 3';
let num = parseInt(str);
(num === 1) == true

parseInt('1000', 2) === 8
parseInt('1000', 4) === 64
parseInt('1000', 8) === 512
```



### + 연산자
: 해당 연산자가 연산을 하지 않는다면 형을 강제 변환함

```js
let str = '10';
let num = +str;
(num === 10) == true

let num = 10;
let str = num + '';
(str === '10') == true
```



## String
: 값을 문자열로 변환

1. 숫자는 그대로 문자열로 변환  
2. 특별한 값은 그대로 문자열로 변환
3. 객체는 ToPrimitive 연산 과정을 거쳐 문자열로 변환  

```js
// Stirng()
var temp = String(1);
(typeof temp === 'string') == true

// toString()
var num = 1;
var temp = num.toString();
(typeof temp === 'string') == true
```



[top](#)
