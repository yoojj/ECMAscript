# JS Object Type
= Non-Primitive, Reference Type, Complex Type, Composite Data Type          
: 여러 프로퍼티를 갖을 수 있는 컨테이너        
: 키와 값을 쌍으로 순서없이 저장   


**일급 객체**   
: 언어 상에 제약이 없는 객체  
: 객체를 변수에 대입하거나 파라미터로 넘기거나 반환 값으로 사용하거나 연산에 사용하는데 제약이 없음  
: JS는 숫자, 문자, 함수 모두 일급 객체  


**분류**  
- [1.네이티브 객체](#1native-object)
- [2.호스트 객체](#2host-object)
- [3.전역 객체](#3global-object)
- [4.사용자 정의 객체](#4user-defined-object)



## 1. Native Object
= Built-in Object, Standard Object      
: 스펙에 정의된 기본 객체     
: 전역에서 사용 가능  



### Wrapper Object
: 프리미티브 값을 래핑하는 객체     

- [Boolean](./js-obj-boolean.md)
- [Number](./js-obj-number.md)
- [String](./js-obj-string.md)
- [Symbol](./js-obj-symbol.md)


**단계**    
1. 프리미티브 값에 프로퍼티나 메소드를 사용하는 경우
2. JS 엔진에 의해 값을 임시 객체로 변환해
3. 프로퍼티나 메소드를 사용한 뒤 임시 객체 제거      


```js
('str'.length === 3) == true


// 래퍼 객체 명시적 생성
var str = String('string');
(typeof str === 'string') == true

var str = new String('string');
(typeof str === 'object') == true
```



## 2. Host Object  
: 호스트 환경(실행 환경)에서 제공하는 객체  
: 해당 호스트에 특화된 객체로 명세에 정의되지 않음   



## 3. Global Object  
= 전역 객체, 루트 객체, 최상위 객체      
: 전역 프로퍼티, 전역 함수, 특별한 객체를 제외한 모든 객체들은 전역 객체의 자손    
: 전역 객체가 가장 먼저 생성므로 전역 객체의 프로퍼티 사용 가능  
: 전역 객체는 생성자가 없어 new 키워드로 생성 불가능      


환경 | 식별자 | 제공 객체
---|---|---
[node](https://nodejs.org/api/) | [global](https://nodejs.org/api/globals.html) | Built-in Object, http, fs, url 등
[browser](https://developer.mozilla.org/en-US/docs/Web/API) | [window](https://developer.mozilla.org/en-US/docs/Web/API/Window) | Built-in Object, BOM, DOM, XMLHttpRequest, Web API 등


#### Global Object API
: 호스트에 따라 다를 수 있음   

전역 프로퍼티 & 전역 함수 | 설명
---|---
NaN          | 정의할 수 없는 수치에 대한 값  
Infinity     | 표현하지 못하는 범위의 수에 대한 값   
undefined    | undefined 값  
null         | null 값
globalThis   | 전역 객체 반환  
eval()       | 주어진 문자열을 코드로 실행
parseInt()   | 문자열을 정수로 변환
parseFloat() | 문자열을 실수로 변환
isNaN()      | NaN 여부 반환
isFinite()   | 유한수인지 여부 반환
encodeURI()          | 제외 문자외에 URI에 들어있는 모든 문자 퍼센트 인코딩
encodeURIComponent() | 알파벳과 숫자외 URI에 들어있는 모든 문자 퍼센트 인코딩
decodeURI()          | encodeURI() 퍼센트 인코딩한 URI 디코딩
decodeURIComponent() | encodeURIComponent() 퍼센트 인코딩한 URI 디코딩

**제외 문자**  
```
;  :  /  =  ?  &
```



## 3. User Defined Object

- [팩토리 함수](#팩토리-함수)
- [생성자 함수](#생성자-함수)
- [prototype](#prototype)
- [class (ES6)](#class)


```js  
// 1. 리터럴  
// : 객체 리터럴로 생성된 객체는 Object.prototype을 상속 받음
var obj = {};

// 2. 전역 함수
var obj = Object();

// 3. 생성자
var obj = new Object();


// 프로퍼티 추가
obj.key;
obj['key'];

// 프로퍼티에 값 할당
obj.key = 'value';
obj['key'] = 'value';


// 메소드 추가
obj.method = function(){ };


// 객체에 프로퍼티가 있는지 확인
('key' in obj) == true

// 주의
var obj = { key : null };
(Boolean(obj.key) === false) == true


// 프로퍼티 제거
delete obj.key


// 객체 생성
var obj = {
    key : 'value',
    method : function(){ return thid.key },
};

(obj.key === 'value') == true


// ES6
var obj = {
    num : 1,
    // 메소드 단축
    method(num){ return obj.num + num },
};

(obj.method(2) === 3) == true
```



### 팩토리 함수  
: 객체를 반환하는 함수

```js
function User(name){
    return {
        name,
        getName() {
            return this.name;
        },
    }
}

var a = User('A');
(a.getName() === 'A') == true
```



### 생성자 함수
: new 연산자를 통해 객체를 생성하는 함수    
: 일반 함수에 new 연산자를 사용하면 생성자로 동작      
: 생성자 함수를 통해 만들어진 객체는 해당 생성자를 데이터 타입으로 갖음      

```js
var User = function(name){
    this._name = name;

    this.getName = function(){
        return this._name;
    };

    this.setName = function(name){
        this._name = name;
    };
};

var a = new User();
(a instanceof User) == true
a.setName('A');
(a.getName() === 'A') == true

var b = new User('B');
(b instanceof User) == true
(b.getName() === 'B') == true

var c = User();
(c instanceof User) == false


// new 강제
var User = function(name){
    if((this instanceof User) == false)
        return new User(name);
}

var c = User();
(c instanceof User) == true
```


**캡슐화**

```js
var User = function(name){
    if((this instanceof User) == false)
        return new User(name);

    // private
    var PIN = 12345;

    // public
    this._name = name;

    this.getPIN = function(){
        return PIN;
    };

    this.getName = function(){
        return this._name;
    };
}

var a = new User('A');

(a._name === 'A') == true
(a.PIN === undefined) == true

a.PIN = 0;
(a.getPIN() === 12345) == true
```



### prototype
: 동일한 기능을 하는 메소드를 공유하기 위한 특별한 객체    
: 생성자 함수로 만들어진 객체의 메소드는 객체 수 만큼 중복되어 생성되므로   
&nbsp; 생성자 함수에는 객체의 고유한 속성만 정의하고 동일한 속성이나 기능은 프로토타입 객체에 정의    

```js
var User = function(name){
    if((this instanceof User) == false)
        return new User(name);

    this._name = name;
}

// 공유될 메소드 정의
User.prototype.getName = function(){ return this._name };
User.prototype.setName = function(name){ this._name = name }
```



### class  
: ES6 부터 지원하는 키워드   

```js
// ES6 이전
var User = {
    init : function(name) {
        this._name = name;
        this.getName = function(){ return this._name };
        this.setName = function(name){ this._name = name };    
    }
}

var a = Object.create(User);
a.init('A');
(a.getName() === 'A') == true


// ES6 이후
class User {
    constructor(name){
        this._name = name;
    }
    get Name() {return this._name };
    set Name(name) { this._name = name };
}

var b = new User('B');
(b.Name === 'B') == true

b.Name = 'BBB';
(b.Name === 'BBB') == true
```



[top](#)
