# JS Object.prototype

- Object.prototype.hasOwnProperty()
- Object.prototype.isPrototypeOf()
- Object.prototype.propertyIsEnumerable()
- Object.prototype.toLocaleString()
- Object.prototype.toString()
- Object.prototype.valueOf()



## Object.prototype.hasOwnProperty()
: 상속되지 않은 고유의 프로퍼티가 있는지 여부 반환  


## Object.prototype.isPrototypeOf()
: 프로토타입 객체인지 여부 반환


## Object.prototype.propertyIsEnumerable()
열거가능한지 여부 반환


## Object.prototype.toLocaleString()
toString()을 호출


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



## Object.prototype.valueOf()
: 객체를 프리미티브 타입의 값으로 반환   


```js
var num = 0;
var str = '0';
var obj = new Object(0);

(num.valueOf() === 0) == true
(str.valueOf() === '0') == true
(obj.valueOf() === 0) == true


var o = {};
(o.valueOf() === o) == true
```


[top](#)
