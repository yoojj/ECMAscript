# JS Object
: 아무것도 상속받지 않은 기본 객체   
: JS의 모든 객체는 Object 객체에서 파생된 객체     

https://tc39.es/ecma262/#sec-object-objects


**메소드**
- [Object.assign()](#objectassign)
- [Object.create()](#objectcreate)
- [Object.defineProperty()](#objectdefineproperty)
- [Object.defineProperties()](#objectdefineproperties)
- [Object.entries()](#objectentries)
- [Object.freeze()](#objectfreeze)
- [Object.fromEntries()](#objectfromentries)
- [Object.getOwnPropertyDescriptor()](#objectgetownpropertydescriptor)
- [Object.getOwnPropertyNames()](#objectgetownpropertynames)
- [Object.getOwnPropertySymbols()](#objectgetownpropertysymbols)
- [Object.getPrototypeOf()](#objectgetprototypeof)
- [Object.is()](#objectis)
- [Object.isExtensible()](#objectisextensible)
- [Object.isFrozen()](#objectisfrozen)
- [Object.isSealed()](#objectissealed)
- [Object.keys()](#objectkeys)
- [Object.preventExtensions()](#objectpreventextensions)
- [Object.seal()](#objectseal)
- [Object.setPrototypeOf()](#objectsetprototypeof)
- [Object.values()](#objectvalues)



## Object.assign()
: 전달받은 객체의 프로퍼티를 대상 객체로 복사   

> Object.assign(target, ...sources)

```js
var a = { num: 0, str: 'a' };
var b = { num: 1, arr: [0,0,0], };

var obj = Object.assign({}, a, b);
(obj.num === 1) == true
(obj.arr.length === 3) == true

// 주의
var obj = Object.assign(a, b);
obj.num = 2;
(a.num === 2) == true
```



## Object.create()
: 전달 받은 프로퍼티를 지정된 프로토타입과 연결한 새 객체 반환    
: 내부적으로 Object.defineProperties() 함수를 통해 정의    

> Object.create(O, Properties)

```js
var obj = Object.create(Object.prototype, {
    key: {
        value: 0,           
        writable: false,
        configurable: false,
        enumerable: false,   
    },

    num: {
        value: 0,  
        writable: true,
        configurable: true,
    }
});

obj.key = 1;
(obj.key === 0) == true

obj.num = 1;
(obj.num === 1) == true


// 주의
var obj = Object.create(null);
(typeof obj === 'object') == true
(obj instanceof Object) == false

obj.constructor = Object;
(obj.constructor === Object) == true
```



## Object.defineProperty()
: 전달받은 객체의 프로퍼티를 수정하거나 새로운 프로퍼티를 정의해 추가     
: 프로퍼티에 옵션-설명자를 적용해 추가 설정을 함   

> Object.defineProperty(O, P, Attributes)

옵션 | 설명
---|---
value        | 초기 값
configurable | 삭제 여부로 기본 값은 false
writable     | 재할당 여부로 기본 값은 false
enumerable   | 열거 여부로 기본 값은 false
get          | 값을 읽는 메소드
set          | 값을 변경하는 메소드


```js
var obj = {};

Object.defineProperty(obj, 'key', {
  value: 'value',
  configurable: false,
  writable: false,
  enumerable: false,
});

(obj.key === 'value') == true


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

User.prototype.getName = function(){ return this.name };
User.prototype.setName = function(name){ this.name = name };

var user = new User('name');
user.PIN = 12345;
(user.PIN === 12345) == true
```



## Object.defineProperties()
: 전달받은 객체의 프로퍼티를 수정하거나 새 프로퍼티를 정의해 추가

>  Object.defineProperties(O, Properties)

```js
var obj = {};

Object.defineProperties(obj, {
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
: 전달받은 객체를 동결시켜 불변으로 만듬  

> Object.freeze(O)

```js
var obj = { a: 1, b: 2, c: 3, };
Object.freeze(obj);
```



## Object.entries()
: 전달받은 객체의 프로퍼티를 배열로 반환

> Object.entries(O)

```js
var obj = { a: 1, b: 2, c: 3, };
var entries = Object.entries(obj);
(entries.length === 3) == true
```



## Object.fromEntries()
: 키/값 쌍으로 이루어진 목록을 객체로 반환  

> Object.fromEntries(iterable)

```js
var entries = [
    ['a', 1],
    ['b', 2],
    ['c', 3]
];
var entries = new Map([ ['a', 1], ['b', 2], ['c', 3] ]);
var entries = Object.entries({ a: 1, b: 2, c: 3, });

var obj = Object.fromEntries(entries);
```



## Object.getOwnPropertyDescriptor()
: 전달받은 객체의 프로퍼티 설명자 반환  
> Object.getOwnPropertyDescriptor(O, P)

```js
var obj = { a: 1, b:2, c:3 };
var descriptors = Object.getOwnPropertyDescriptor(obj, 'a');
(descriptors.value === 1) == true
```



## Object.getOwnPropertyDescriptors()
: 전달받은 객체의 모든 프로퍼티 설명자 반환

> Object.getOwnPropertyDescriptors(O)

```js
var obj = { a: 1, b:2, c:3 };
var descriptors = Object.getOwnPropertyDescriptors(obj);
(descriptors.a.value === 1) == true
```



## Object.getOwnPropertyNames()

> Object.getOwnPropertyNames(O)

```js
```



## Object.getOwnPropertySymbols()

> Object.getOwnPropertySymbols(O)

```js
```



## Object.getPrototypeOf()

> Object.getPrototypeOf(O)

```js
```



## Object.is()
: 전달받은 두 값이 같은지 여부 반환

> Object.is(value1, value2)

```js
var a = {};
var b = a;
Object.is(a, b) == true
```



## Object.isExtensible()
: 전달받은 객체가 확장 가능한지 여부 반환   

> Object.isExtensible(O)

```js
var obj = {};
Object.isExtensible(obj) == true

Object.preventExtensions(obj);
Object.isExtensible(obj) == false
```



## Object.isFrozen()
: 전달받은 객체가 불변 상태인지 여부 반환

> Object.isFrozen(O)

```js
var obj = {};
Object.isFrozen(obj) == false

Object.freeze(obj);
Object.isFrozen(obj) == true
```



## Object.isSealed()
: 전달받은 객체가 잠금 상태인지 여부 반환

> Object.isSealed(O)

```js
var obj = { };
Object.isSealed(obj) == false

Object.seal(obj);
Object.isSealed(obj) == true
```



## Object.keys()
: 전달받은 객체의 열거 가능한 프로퍼티를 배열로 반환   

> Object.keys(O)

```js
var obj = { a: 1, b: 2, c: 3, };
var arr = Object.keys(obj);
(obj.toString() === 'a,b,c') == true


// enumerable 주의
var obj = Object.create(Object.prototype, {
    key: {
        value: 'value',           
        writable: false,
        configurable: false,
        enumerable: false,  
    },
});

obj.a = 1;
obj.b = 2;
obj.c = 3;

var arr = Object.keys(obj);

(obj.key === 'value') == true
(arr.toString() === 'a,b,c') == true
```



## Object.preventExtensions()
: 전달받은 객체에 프로퍼티 추가-확장을 불가능하게함        

> Object.preventExtensions(O)

```js
var obj = {};
Object.preventExtensions(obj);

obj.key = 'value';
(obj.key === undefined) == true
```



## Object.seal()
: 전달받은 객체에 프로퍼티를 추가하거나 제거하지 못하게 잠금 상태로 바꿈   

> Object.seal(O)

```js
var obj = {};
Object.seal(obj);

obj.key = 'value';
(obj.key === undefined) == true
```


**seal() vs freeze()**   
: seal() 메소드는 프로퍼티가 쓰기 가능하다면 값 변경 가능      
: freeze() 메소드는 프로퍼티 값 변경 불가능      



## Object.setPrototypeOf()

> Object.setPrototypeOf(O, proto)

```js
```



## Object.values()
: 전달받은 객체의 열거 가능한 프로퍼티 값들을 배열로 반환

> Object.values(O)

```js
var obj = { a: 1, b: 2, c: 3, };
var arr = Object.values(obj);
(arr.toString() === '1,2,3') == true


var obj = { a: 1, b: 2, c: 3,
    d: { key: 4 },
    e: { key: 5 },
};
var arr = Object.values(obj);
(arr[4].key === 5) == true
```




[top](#)
