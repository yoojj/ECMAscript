# JS Operator
: 피연산자의 연산을 수행하는 기호로 약 56개의 연산자 존재    
: 피연산자와 조합하여 표현식을 구성   
: 연산자는 값만 조작 가능하여 피연산자를 적절한 타입으로 강제 변환 함  
: 연산자 오버로드 불가능   


**피연산자**  
: 연산자의 작업-연산 대상으로 리터럴, 변수, 상수    
: 하나의 값이므로 하나의 표현식이 될 수 있음   

**연산**  
: 주어진 식을 계산하여 결과를 얻어내는 과정  
: 연산은 한 번에 한 번만 실행  


```js  
// 배열 병합이 아닌 배열을 문자열로 변환하여 연산
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const result = arr1 + arr2;
(result === '1,2,34,5,6') == true
```


분류 | 설명
---|---
대입 연산자 | variable identifier = expression
단항 연산자 | 피연산자 1개  ex. 부호 연산자
이항 연산자 | 피연산자 2개  ex. 산술 연산자, 비교 연산자, 논리 연산자
삼항 연산자 | 피연산자 3개  ex. 삼항 조건 연산자
다항 연산자 | 피연산자 n개  ex. 콤마 연산자  


**종류**  
- [대입 연산자](#대입-연산자)
- [산술 연산자](#산술-연산자)
	- [연결 연산자](#연결-연산자)
	- [부호 연산자](#부호-연산자)
	- [증감 연산자](#증감-연산자)
- [비트 연산자](#비트-연산자)
- [복합 대입 연산자](#복합-대입-연산자)
- [비교 연산자](#비교-연산자)
- [논리 연산자](#논리-연산자)
- 특수 연산자
	- [삼항 조건 연산자](#삼항-조건-연산자)
	- [쉼표 연산자](#쉼표-연산자)
	- [void 연산자](#void-연산자)
- [typeof](#typeof-연산자)
- [객체 연산자](#객체 연산자)
- [spread 연산자 (ES6)](#spread-연산자)
- [optional chaining 연산자 (ES2020)](#optional-chaining-연산자)
- [null 병합 연산자(ES2020)](#null-병합-연산자)


## 대입 연산자       
= 할당 연산자   
: 연사자를 기준으로 우측 피연산자를 좌측 피연산자에 할당       
: 우측에는 리터럴, 변수, 표현식, 값을 반환하는 함수 호출문 가능    

```js
var x = 1;
var y = 2;
var z = 3;

x = y = z ;  
(x === 3) == true
```



## 산술 연산자

연산자 | 설명
---|---
\+  | 숫자일 경우 더하기 연산을 하고 문자일 경우 연결 연산자
\-  | 이항 연산일 경우 빼기 연산을 하고 단항 연산일 경우 부호 연산자
\*  | 곱셈
/   | 나누기
%   | 나누기 연산 후 나머지 값 반환  
** (ES7) | 우측 피연산자를 승수로 좌측 피연산자 거듭제곱
++  | 증감 연산자
--  | 감소 연산자


```js
(1 + true)  == 2
(1 - false) == 1

(Infinity * Infinity) === Infinity
(Infinity * -Infinity) === -Infinity

(5/3) == 1.6666666666666667
(5/0) === Infinity
(5/-0) === -Infinity
Object.is((0/0), NaN) == true

(2**3) === 8
```



### 연결 연산자
: 피연사자가 하나라도 문자열이면 덧셈 연산자가 연결 연산을 함      

연산자 | 설명
---|---
\+ | 1 + '문자열' + '연결'
+= | 좌변과 우변의 문자열을 연결하고 결과를 좌변에 대입



### 부호 연산자
: 피연산자의 부호를 반대로 함

```js
var num = 1;
var result = -num;
result === -1

var str = '1';
var result = -(-str);
result === 1
```



### 증감 연산자

- 전위 증감 연산자 : 값 증가 후 리턴
- 후위 증감 연산자 : 값 리턴 후 증가  

```js
var a = 50;
var b = ++a;

(a === 51) == true
(b === 51) == true


var a = 50;
var b = a++;

(a === 51) == true
(b === 50) == true


// 주의
var a = '50';
var b = a++;

(typeof a === 'number') == true
```



## 비트 연산자
: 피연산자는 32비트로 변환되어 연산 수행     

연산자 | 이름 | 설명
---|---|---
x & y      | AND | 두 피연산자의 비트가 1이면 1을 리턴하고 하나라도 0이면 0을 리턴
x &#124; y | OR  | 두 피연산자의 비트가 하나라도 1이면 1을 리턴하고 둘 다 0이면 0을 리턴
x ^ y      | XOR | 두 피연산자의 비트가 같은 자리에는 0을 다른 자리에는 1을 리턴  
~ x        | NOT | 피연산자의 비트 0을 1로 1을 0으로 바꿔 리턴
x << y     | 왼쪽 시프트 | x의 비트를 왼쪽으로 y 만큼 이동하며 왼쪽에 줄어드는 비트는 버리고 오른쪽은 0으로 채움
x >> y     | 오른쪽 시프트 |
x >>> y    | 부호없는 오른쪽 시프트 |


```js
(num).toString(2)
parseInt(num, 2)


// 비트 AND 연산
// 0001 & 0111 = 0001
(1 & 7) == 1


// 비트 OR 연산
// 0001 | 0111 = 0111
(1 | 7) == 7


// 비트 XOR 연산
// 0001 ^ 0111 = 0110
(1 ^ 7) == 6


// 비트 NOT 연산
// ~ 0111 = -1000
(~ 7) == -8


// 시프트 연산
(1 << 7) == 128 // 0001 + 0000000 = 10000000
(7 << 1) == 14  // 0111 + 0 = 1110

(1 >> 7) == 0  // 0001 - 1111111 = 0
(7 >> 1) == 3  // 0111 - 1 = 0011
```



## 복합 대입 연산자

연산자 | 설명 | 사용 | 의미
---|---|---|---
+=    | 덧셈 대입, 문자열 병합   | x += y | x = x + y
-=    | 뺄셈 대입   | x -= y | x = x - y
\*=   | 곱셈 대입   | x \*= y | x = x \* y
/=    | 나눗셈 대입 | x /= y | x = x / y
%=    | x를 y로 나눈 값의 나머지를 x에 대입  | x %= y | x = x % y
\**=  | 지수연산 대입  | x \**= y | x = x \** y
<<=   | x에 y만큼 왼쪽쪽으로 이동한 결과를 x에 부호 유지하며 대입  | x <<= y | x = x << y
\>>=  | x에 y만큼 오른쪽으로 이동한 결과를 x에 부호 유지하며 대입 | x \>>= y | x = x \>> y
\>>>= | x에 y만큼 오른쪽으로 이동한 결과를 x에 대입 | x \>>>= y | x = x \>>> y
&=    | 비트 AND 대입 | x &= y | x = x & y
&#124;=  | 비트 OR 대입  | x &#124;= y | x = x &#124; y
^=       | 비트 XOR 대입 | x ^= y | x = x ^ y



## 비교 연산자
≒ 관계 연산자 : 우측 피연산자와 좌측 피연산자간의 관계를 비교해 참 거짓 판별     
: 우측 피연산자와 좌측 피연산자의 값을 비교하여 그 결과를 논리형으로 리턴    

연산자 | 설명
---|---
==  | 동등 연산자 : 피연산자들의 타입이 다를 경우 같은 타입으로 자동 변환하고 값 일치 비교
=== | 일치 연산자 : 피연산자들의 타입이 다를 경우 거짓 반환하고 타입이 같을 경우 값 일치 비교
!=  | 비동등 연산자
!== | 불일치 연산자
\>  | 좌측 피연산자가 크면 참
<   | 우측 피연산자가 크면 참
\>= | 좌측 피연산자가 우측 피연산자와 같거나 크면 참  
<=  | 우측 피연산자가 좌측 피연산자와 같거나 크면 참


```js
(1 == '1') == true
(1 === '1') == false

var a = 'test'; // string
var b = new String('test'); // object
(a == b) == true
(a === b) == false

(['123'] == 123) == true
(['123'] === 123) == false

// NaN은 NaN을 포함하여 무엇과도 같지 않음  
(NaN === NaN) == false
(0/0 === 0/0) == false

(null === null) == true

null == undefined  // true   의미는 같으나
null === undefined // false  타입이 일치하지 않음


// 문자열 주의
('1' > 0) == true
('5' > '10') == true  // 문자열 앞자리로 판별 5 > 1
('b' > 'a') == true
('a' > 'A') == true
('가' > 'a') == true
```


**동등 연산자 규칙**   
0. undefined == null
1. 두 피연산자가 같은 타입이면 값이 일치하는지 비교
2. 두 피연산자가 문자열과 숫자면 문자열을 숫자로 바꾸고 일치하는지 비교
3. 두 피연산자가 불리언과 그외 값이면 불리언을 숫자로 바꾸고 일치하는지 비교
4. 두 피연산자가 객체와 그외 값이면 객체를 값으로 바꾸고 일치하는지 비교
5. 이외 비교 결과는 false

```js
('' == 0) == true
([] == 0) == true

('' == {}) == false
([] == {}) == false
```



## 논리 연산자  
: 결과에 따라 참 거짓을 반환하는 연산자  
: 피연산가 null, NaN, undefined일 경우에는 해당하는 값 반환    
: 쇼트 서킷 평가로 처음 피연산자로 결과를 판단할 수 있다면 다음 피연산자는 평가하지 않음

기호 | 연산자 | 설명
---|---|---
&&           | and 연산자, 논리곱    | 좌측 우측 모두 참이면 참 반환
&#124;&#124; | or 연산자, 논리합     | 좌측과 우측 중 하나만 참이면 참 반환
!            | not 연산자, 논리 부정 | 반대


```js
(false && true || true) == true
(false && (true || true)) == false

false && console.log('출력하지 않음');
true || console.log('출력하지 않음');


var a = function(){ return true; };
var b = function(){ return false; };
( a() && b() ) === false
( a() || b() ) === true


function f(){ return 'str'; };
var a = 'num' && f();
var b = 'num' || f();
(a === 'str') == true
(b === 'num') == true


// 디폴트 값
(function(num){ var i = num || 0; })();

// 디폴트 + 콜백
(function(f) { f && f(); })();


// not 연산자
(!null) == true
(!0) == true
(!'') == true


// double not 연산자
(!!null === false) == true
(!!0 === false) == true
(!!'' === false) == true

(!!{} === true) == true
(!!1 === true) == true
(!!' ' === true) == true
```



## 삼항 조건 연산자

> 조건 ? 참일 경우 반환 : 거짓일 경우 반환 ;

```js
var num = 5;
var result = (num % 2 == 0) ? '짝수' : '홀수';
```



## 쉼표 연산자
: 좌측부터 우측으로 연산하고 마지막 결과 반환    
: 연산자 우선 순위에서 가장 낮음    
: 배열이나 객체에 사용하는 쉼표와 다름   

```js
const result = (1+1, 2+2, 3+3);
(result === 6) == true


for(var a=0, b=5; a<b ; ++a){
	console.log(a += a);
}
(a == 7) == true


// 전위 연산의 부수 효과를 제거할 수 있음
var a = 50;
var b = a++;
var c = (a++, a);
(a === 52) == true
(b === 50) == true
(c === 52) == true
```



## void 연산자
: 표현식 실행 후 undefined 반환    
: undefined 반환이 필수인 경우 사용

```js
// undefined
void 0
void []
void {}

// IIFE 패턴에 사용 가능  
void function(){ .. }();


// 표현식 결과가 없을때 사용
function add(a,b){
	if( !Number.isInteger(a) || !Number.isInteger(b) ){
        return void console.log("오류!");
    } else {
        return a + b;
    }
}
```



## typeof 연산자
: 값과 객체를 구별하고 값일 경우 피연산자 타입을 문자열로 반환  

피연산자 | 결과
---|---
typeof 선언하지 않은 변수 | undefined
typeof undefined  | undefined
typeof null       | object
typeof ture/false | boolean
typeof 숫자        | number
typeof '문자'      | string           
typeof 함수        | function
typeof 함수()      | undefined
typeof []         | object
typeof {}         | object
typeof Symbol     | function
typeof Symbol()   | symbol


```js
var num = 0;
(typeof num === 'number') == true
(typeof typeof num === 'string') == true
```



## 객체 연산자

연산자 | 이름 | 설명
---|---|---
.   | 접근 연산자 | 객체와 객체 속성에 접근
[]  | 괄호 연산자 | 객체 속성에 접근  
()  | 그룹 연산자 | 연산자 우선 순위를 바꿈, 함수 호출
in  | 관계 연산자 | 객체에 해당 프로퍼티가 존재하면 참 반환  
new        | new 연산자 | 생성자를 호출하여 객체 인스턴스 반환  
instanceof | instanceof 연산자 | 프로토타입 체인 테스트 연산자
delete     | delete 연산자     | 객체의 프로퍼티 제거 연산자


```js
// in 연산자  
var str = new String('');
('length' in str) == true

const obj = {
	a : 1,
	b : 2,
}
('a' in obj) == true
('c' in obj) == false
```



## spread 연산자

\+ [rest parameter](./js-function.md#rest-parameter)

```js
// ES5 - Function.prototype.apply
function add(a, b){
    return a + b;
}

var arr = [1, 3];
var result = add.apply(null, arr);
(result === 4) == true


// ES6 - spread operator
function add(a, b){
    return a + b;
}

var arr = [1, 3];
var result =add(...arr);
(result === 4) == true
```


**배열**

```js
// ES5 - Array.prototype.push.apply
var arrNum = [1, 2, 3];
var arrStr = ['일', '이', '삼'];
Array.prototype.push.apply(arrStr, arrNum);
arrStr.length == 6

// ES6 - spread operator
var arrNum = [1, 2, 3];
var arrStr = ['일', '이', '삼', ...arrNum];
arrStr.length == 6


var str = 'string!';
var arr = [...str];
arr.length == 7
```


**객체**  

```js
var A = { key : 'value' };
var B = { A }
var C = { ...A }

A.key = '';

(A.key === '') == true
(B.A.key === '') == true
(C.key === 'value') == true
```



## null 병합 연산자
: 좌측 피연산자가 null이나 undefined일 경우 우측 피연산자를 반환하고 그렇지 않다면 좌측 피연산자 반환

```js
var num;
var result = num ?? 0;
(result === 0) == true
```


## optional chaining 연산자

```js
const A = {
	B : {
		key : 'value',
	},
};

// AND 연산자
const result = A && A.B && A.B.key;
result === 'value'

// 선택 체인 연산자
const result = A?.B?.key;
```



[top](#)
