# JS Object
: 아무것도 상속받지 않은 기본 내장 객체   
: JS의 모든 객체는 Object 객체에서 파생된 객체     

```js  
// 리터럴  
{};

// 전역 함수
Object();

// 생성자
new Object();

// 메소드
var o = Object.create(Object.prototype);


var o = {};
(o.constructor === Object) == true
(o.constructor.prototype === Object.prototype) == true
```


- [Object.assign()](#objectassign)
- [Object.create()](#objectcreate)
- [Object.defineProperty()](#objectdefineproperty)
- [Object.defineProperties()](#objectdefineproperties)
- [Object.freeze()](#objectfreeze)
- Object.getOwnPropertyDescriptor()
- Object.getPrototypeOf()
- Object.is()
- Object.isExtensible()
- Object.isFrozen()
- Object.isSealed()
- [Object.observe() (ES7)](#objectobserve)
- Object.preventExtensions()
- Object.seal()
- Object.setPrototypeOf()
- Object.values()




## Object.assign()
: 객체의 프로퍼티 복사   
: 프로퍼티가 동일하다면 덮어씌워짐

```js
var a = { num : 0, str : 'a' };
var b = { num : 1 };

var o = Object.assign({}, a);
(o.num === 0) == true

var o = Object.assign(a, b);
(o.num === 1) == true
(o.str === 'a') == true
```



## Object.create()
: 파라미터로 받은 객체의 프로토타입과 연결된 새 객체 반환    

옵션 | 설명
---|---
value        | 초기 값
writable     | 재할당 여부로 기본 값은 false
enumerable   | 열거 여부로 기본 값은 false
configurable | 삭제 여부로 기본 값은 false
get          | 값을 읽는 메소드
set          | 값을 변경하는 메소드

```js
var o = Object.create(Object.prototype, {
    key : {
        value: 0,           
        writable: false,
        configurable: false,
        enumerable: false,   
    },

    num : {
        value: 0,  
        writable: true,
        configurable: true,
    }
});

o.key = 1;
(o.key === 1) == false

o.num = 1;
(o.num === 1) == true


// 주의
var o = Object.create(null);
(typeof o === 'object') == true
(o instanceof Object) == false

o.constructor = Object;
(o.constructor === Object) == true
```


**Object.create() vs new operator**

```js

```



## Object.defineProperty()
: 객체의 기존 프로퍼티를 수정하거나 새 프로퍼티를 정의하고 객체 반환  

> Object.defineProperty(객체, 속성명, 정의)

옵션 | 설명
---|---
value        | 초기 값
writable     | 재할당 여부로 기본 값은 false
enumerable   | 열거 여부로 기본 값은 false
configurable | 삭제 여부로 기본 값은 false
get          | 값을 읽는 메소드
set          | 값을 변경하는 메소드


```js
var o = {};

Object.defineProperty(o, 'key', {
  value: 0,
  writable: false,
});

(o.key === 0) == true


function User(name){
    var PIN;
    this.name = name;

    Object.defineProperty(this, 'PIN', {
        get: function() { return PIN },
        set: function(pin) {
            if(typeof PIN === 'undefined'){
                PIN = pin;
            } else {
                throw new Error('변경 불가');
            }
        }
    });
}

User.prototype.getName = function(){ return this._name };
User.prototype.setName = function(name){ this._name = name };

var test = new User('이름');

test.PIN = 12345;
(test.PIN === 12345) == true

test.PIN = 0; // Error: 변경 불가
```



## Object.defineProperties()

```js
var o = {};

Object.defineProperties(o, {
    num : {
        value : 0,
    },
    str : {
        value : '',
        writable : true,
    },
});
```



## Object.freeze()
: 객체를 동결시켜 불변으로 만듬  

```js
var o = { num : 0 };

Object.freeze(o);
```





## Object.observe()  
: 객체의 변화를 비동기로 감시

> Object.observe(감시될객체, callback)

```js
```



## Object.prototype.toString()
: 객체를 나타내는 문자열 반환   
: 프리미티브 타입일 경우 값을 문자열로 변환하여 반환   
! Object 외 객체에서 해당 메소드 오버라이드 주의

```js
var num = 0;
(num.toString() === '0') == true

var o = {};
(o.toString() === '[object Object]') == true

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
Object.prototype.toString.call(/./) === '[object RegExp]'
```



[top](#)
