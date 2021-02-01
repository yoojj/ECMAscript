# JS Object.prototype


프로퍼티 | 설명
---|---
constructor |
__proto__   |


**메소드**
- [Object.prototype.hasOwnProperty()](#objectprototypehasownproperty)
- [Object.prototype.isPrototypeOf()](#objectprototypeisprototypeof)
- [Object.prototype.propertyIsEnumerable()](#objectprototypepropertyisenumerable)
- [Object.prototype.toLocaleString()](#objectprototypetolocalestring)
- [Object.prototype.toString()](#objectprototypetostring)
- [Object.prototype.valueOf()](#objectprototypevalueof)



## Object.prototype.hasOwnProperty()
: 전달받은 프로퍼티가 해당 객체에 존재하는지 여부 반환    

> {}.hasOwnProperty(V)

```js
var obj = {};
obj.key = 'value';
obj.hasOwnProperty('key') == true
```



## Object.prototype.isPrototypeOf()
: 전달받은 객체가 해당 프로토타입 체인에 속하는지 여부 반환

> {}.isPrototypeOf(V)

```js
var User = function(){};
Function.prototype.isPrototypeOf(User) == true
Object.prototype.isPrototypeOf(User) == true

var user = new User();
User.prototype.isPrototypeOf(user) == true
Function.prototype.isPrototypeOf(user) == false
Object.prototype.isPrototypeOf(user) == true
```



## Object.prototype.propertyIsEnumerable()
: 전달받은 프로퍼티가 열거 가능하고 해당 객체에 속하는지 여부 반환

> {}.propertyIsEnumerable(V)

```js
var obj = { num: 0, str: 'string', };
obj.propertyIsEnumerable('num') == true


var obj = Object.create(Object.prototype, {
    num: {
        value: 0,           
        enumerable: false,   
    },
});
obj.propertyIsEnumerable('num') == false
```



## Object.prototype.toLocaleString()

> {}.toLocaleString([reserved1 [, reserved2]])

```js
var num = 123456789;
(num.toLocaleString('ko-KR') === '123,456,789') == true
(num.toLocaleString('en-US') === '123,456,789') == true
(num.toLocaleString('de-DE') === '123.456.789') == true


var date = new Date(Date.now());
date.toLocaleString('ko');
date.toLocaleString('en')
```



## Object.prototype.toString()
: 객체일 경우 객체를 나타내는 문자열 반환   
: 프리미티브 타입일 경우 값을 문자열로 변환하고 이를 반환   
! Object 외 객체에서 해당 메소드 오버라이드 주의

```js
var num = 0;
(num.toString() === '0') == true


var obj = {};
(obj.toString() === '[object Object]') == true


var user = {};
user[Symbol.toStringTag] = 'User';
(Object.prototype.toString.call(user) === '[object User]') == true


Object.prototype.toString.call(undefined) === '[object Undefined]'
Object.prototype.toString.call(null) === '[object Null]'
Object.prototype.toString.call(0) === '[object Number]'
Object.prototype.toString.call('') === '[object String]'
Object.prototype.toString.call({}) === '[object Object]'
Object.prototype.toString.call([]) === '[object Array]'
Object.prototype.toString.call( (x) => x ) === '[object Function]'
Object.prototype.toString.call( function(){} ) === '[object Function]'
Object.prototype.toString.call(/./) === '[object RegExp]'
```



## Object.prototype.valueOf()
: 객체일 경우 객체의 프리미티브 값 반환    
: 프리미티브 타입일 경우 값 반환    


```js
var num = 0;
var str = 'string';
var obj = new Object(1);

(num.valueOf() === 0) == true
(str.valueOf() === 'string') == true
(obj.valueOf() === 1) == true


var obj = {};
(obj.valueOf() === obj) == true
```



[top](#)
