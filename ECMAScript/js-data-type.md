# JS Data Type
: 데이터의 형태에 따라 데이터 타입 분류      
: 6개 기본 데이터 타입을 제외한 모든 것은 객체로 취급   


데이터 타입 | 설명
---|---
[Primitive](#primitive) | 불변인 하나의 값, 프로퍼티가 없으며 대응하는 래퍼 객체 존재
[Object](./object/)     | 여러 프로퍼티를 갖는 일종의 컨테이너



**primitive vs object**

```JS
// primitive - 값을 비교
const num1 = 1;
const num2 = 1;
(num1 === num2) == true

const str1 = 'str';
const str2 = 'str';
(str1 === str2) == true


// object - 참조를 비교
const obj1 = {num:1};
const obj2 = {num:1};
(obj1 === obj2) == false

const str1 = new String('str');
const str2 = new String('str');
(str1 === str2) == false
```



# Primitive
: 불변인 하나의 값  
: 프로퍼티가 없으며 대응하는 [래퍼 객체](./object#래퍼-객체)를 이용해 프로퍼티 사용    
: undefined와 null은 래퍼 객체가 없음   


**종류**   
- [undefined](#undefined)
- [null](#null)
- [boolean](#boolean)
- [number](#number)
- [string](#string)
- [symbol (ES6)](#symbol)



## undefined
: [전역 객체](./object#global-object-api)의 프로퍼티      
: 변수를 선언하고 명시적으로 값을 할당하지 않으면 해당 변수에 undefined 할당        
: 제공되지 않은 매개 변수와 정의하지 않은 프로퍼티의 값   
: 함수의 경우 return을 명시하지 않을 경우 undefined를 리턴    

```js
// 안티패턴
let antiPattern = undefined;


(typeof undefined) === 'undefined'


let one;   
(typeof one) === 'undefined'

one = 1;
(typeof one) == 'number'

one = true;
(typeof one) == 'boolean'


const func = (function(){})();
(typeof func) === 'undefined'


function func(){
    // 전역 범위가 아닐 경우 식별자로 사용 가능
    let undefined = 0;
    return undefined;
}


// 체크
let num;
if(num === undefined){
    num = 0;
}


// void 연산자는 표현식 수행 후 undefined를 반환
let num;
(num === void 0) == true
```


**undeclared**   
: 선언되지 않은 변수를 사용하는 경우 지칭    
: 선언되지 않은 변수에 값을 할당하는 경우 전역 변수-전역 객체의 프로퍼티가 됨   

```js
zero += 1;  // 오류

typeof one; // 내부적으로 undeclared 변수이나 결과는 undefined를 반환  
(typeof one) === 'undefined'

two = 2;    // 전역 변수
(window.two === 2) == true
```



## null
: null 이라는 하나의 값으로 객체에만 사용     
: 객체 참조 해지를 위해 의도적으로 부여    

[The history of typeof null](http://2ality.com/2013/10/typeof-null.html)

```js
var obj = null;
(obj === null) == true
(typeof obj) == 'object'


// 설계 미스
(typeof null) == 'object'

// null 체크
Object.prototype.toString.call(null)


null == undefined  // true   의미는 같으나
null === undefined // false  타입이 일치하지 않음
```



## boolean
: 참 같은 값과 거짓 같은 값 존재   


**falsy value**  
- undefined
- null
- NaN
- false
- 0
- '', “” (빈 문자열)


**truthy value**   
- Infinity
- -Infinity
- true
- 0이 아닌 숫자
- 문자열
- function(){} (빈 함수)
- [] (빈 배열)
- {} (빈 객체)


``` js
function 확인(value) {
    if( value ){
        console.log('truthy');
    } else {
        console.log('falsy');
    }
}

// falsy
확인(undefined)
확인(null)
확인(NaN)
확인(false)
확인(0)
확인(-0)
확인('')

// truthy
확인(-Infinity)
확인(true)
확인(1)
확인(-1)
확인(' ')
확인('일')
확인('false')
확인([])
확인({})
확인(new Date)
확인(function(){})


(false == '') == true
(false === '') == false

(true == ' ') == true
(true === ' ') == false

// true가 1로 변환하여 비교 연산 수행
(true == '1') == true  
(true === '1') == false
```



## number
: 현재 지원하는 숫자 데이터 타입은 double 형태 하나          
: 모든 숫자는 64비트 부동 소수점 형태로 저장  

**숫자 타입에 속하는 특별한 값**
- -0
- NaN
- Infinity
- -Infinity

**NaN**     
: Not a Number    
: 정의할 수 없는 수치 결과에 대한 반환 값       
: NaN 자체는 숫자가 아니지만 숫자 타입에 속함        
: 0/0, Infinity/Infinity, Infinity*0, 'string'/number 경우 NaN 반환  


**Infinity**    
: 표현하지 못하는 범위의 수  


```js
(1 === 1.0) == true  
(0 === -0) == true
(1/0 === 1/-0) == false

(0.1 + 0.2) === 0.30000000000000004
(0.1 + 0.2 === 0.3) == false


// 설계 미스
// +0과 -0은 메모리 비트상 다름
(+0 === -0) == true

// ES6부터 메소드 지원
Object.is(+0, -0) == false


// 지수표기법
(123400000 === 1.234e8) == true


// typeof 연산자
let num1 = 1;
let num2 = Number(2);
let num3 = new Number(3);

(typeof num1 === 'number') == true
(typeof num2 === 'number') == true
(typeof num3 === 'object') == true


(typeof NaN === 'number') == true
(typeof Infinity === 'number') == true


// 숫자 리터럴에 함수를 호출할 경우 부동소수점 기호나 접근 연산자 기호를 구별하기 위해 아래처럼 사용
0..toString()
0 .toString()
0.0.toString()
(0).toString()


// NaN 설계 미스
(NaN === NaN) == false

// ES6부터 메소드 지원
Object.is(NaN, NaN) == true
Object.is(NaN === 0/0) == true
Object.is(NaN, Number.NaN) == true


// Infinity
(Infinity === +Infinity) == true
(Infinity === -Infinity) == false

Number.POSITIVE_INFINITY == 'Infinity'
Number.NEGATIVE_INFINITY == '-Infinity'
```



## string
: 문자열은 유사 배열로 취급하여 인덱스 접근자로 문자에 접근 가능 (배열은 가변, 문자열은 불변)

- 큰 따옴표
- 작은 따옴표
- 백틱 (ES6)  


```js
const str = 'stirng';
(str[2] === 'i') == true


// 문자열 자동 형변환
(1 + '100') == 1100
(2 * '100') == 200
('2' * '5') == 10
1 - '영') // NaN


/* 여러 줄 입력시 오류
let multiline =
'
first line
second line
';
*/

// 백틱으로 여러 줄 입력 가능
// 콘솔에서는 사용 불가  
let multiline =
`
first line
second line
`;
```


**Template literals**  

```js
const backtick = '백틱';
const result = `${backtick} 사용`;
```


**Tagged Template Literals**

```js
// 방법1
const myTag = (str, ...args) => {
    return str + args;
};

const name = 'ooo';
const result = myTag `이름은 ${name} 입니다.`;


// 방법2
const myTag = (str, func) => {
    return str + func();
};

const myFunction = () => {
    return '함수 사용';
};

const result = myTag `이렇게 ${ () => myFunction() }`;
```



## symbol          
: 심볼 반환    
: Symbol() 전역 함수로 생성하고 new 키워드 사용 불가               

```js
const symbol = Symbol('symbol description');


const s1 = Symbol();
const s2 = Symbol();

(s1 === s2) == false


const obj = {};

const symbol = Symbol();
obj[symbol] = '0';

obj[symbol] === '0'


const symbol = Symbol();

const obj = {
    key : 'value',
    [symbol]: '0',
};

// Object.keys()와 Object.getOwnPropertyNames()에 속하지 않음  
Object.getOwnPropertyNames(obj) == 'key'

// 심볼 확인
Object.getOwnPropertySymbols(obj)
```



[top](#)
