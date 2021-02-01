# JS Object
: 아무것도 상속받지 않은 기본 내장 객체   
: JS의 모든 객체는 Object 객체에서 파생된 객체     

https://tc39.es/ecma262/#sec-object-objects


**메소드**
- [Object.assign()](#objectassign)
- [Object.create()](#objectcreate)
- [Object.defineProperties()](#objectdefineproperties)
- [Object.defineProperty()](#objectdefineproperty)
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
: 전달받은 소스 객체의 프로퍼티를 대상 객체로 복사   

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



**Object.create() vs new operator**
```js

```



## Object.defineProperties()

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



## Object.defineProperty()
: 객체의 기존 프로퍼티를 수정하거나 새로운 프로퍼티를 정의한 객체 반환   
: 프로퍼티에 옵션을 적용하여 추가 설정을 함   

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

User.prototype.getName = function(){ return this._name };
User.prototype.setName = function(name){ this._name = name };

var test = new User('이름');

test.PIN = 12345;
(test.PIN === 12345) == true

test.PIN = 0; // Error: 변경 불가
```


## Object.freeze()
: 객체를 동결시켜 불변으로 만듬  

```js
var obj = { num : 0 };

Object.freeze(obj);
```



## Object.entries()

> Object.entries(O)

```js
```



## Object.fromEntries()

> Object.fromEntries (iterable)

```js
```



## Object.getOwnPropertyDescriptor()

> Object.getOwnPropertyDescriptor(O, P)
> Object.getOwnPropertyDescriptors(O)

```js
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

> Object.is(value1, value2)

```js
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
: 객체가 freeze-불변 상태인지 확인 여부 반환

> Object.isFrozen(O)

```js
var obj = { num: 0 };
Object.freeze(obj);

Object.isFrozen(obj) == true
```



## Object.isSealed()
: 객체가 seal-잠긴 상태인지 확인 여부 반환

> Object.isSealed(O)

```js
var obj = { num : 0 };
Object.seal(obj);

Object.isSealed(obj) == true
```



## Object.keys()
: 객체의 열거 가능한 프로퍼티를 배열로 반환   

> Object.keys (O)

```js
var obj = {
    a : 1,
    b : 2,
    c : 3,
};

(Object.keys(obj).toString() === 'a,b,c') == true


// 객체 자신의 멤버만 해당  
var o = Object.create(obj);
(o.a === 1) ==  true
(Object.keys(o).toString() === '') == true
```



## Object.preventExtensions()
: 객체에 프로퍼티 추가-확장을 금지함    

> Object.preventExtensions(O)

```js
var obj = {};
Object.preventExtensions(obj);

obj.key = 'value';
(obj.key === undefined) == true
```


## Object.seal()
: 전달받은 객체에 프로퍼티를 추가하거나 제거하지 못하게 잠김 상태로 바꿈   

> Object.seal(O)

```js
var obj = { num: 0 };
Object.seal(obj);

obj.key = 'value';
(obj.key === undefined) == true
```


**seal() vs freeze()**
```js
var obj1 = { key : 'value' };
var obj2 = { key : 'value' };

Object.seal(obj1);
Object.freeze(obj2);

obj1.key = '변경';
(obj1.key === '변경') == true

obj2.key = '변경';
(obj2.key === 'value') == true
```



## Object.setPrototypeOf()

> Object.setPrototypeOf (O, proto)

```js
```



## Object.values()
: 전달받은 객체의 값들을 배열로 반환

> Object.values(O)

```js
var obj = {
    a : 1,
    b : 2,
    c : 3,
};

(Object.values(obj).toString() === '1,2,3') == true


var obj = {
    a : 1,
    b : 2,
    c : 3,
    d : { key : 4 },
    e : { key : 5 },
};

var arr = Object.values(obj);
(arr[4].key === 5) == true
```




[top](#)
