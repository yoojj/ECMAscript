# JS Statement
: 어떤 동작-행동을 수행하는 명령 문장          
: 모든 문은 완료된 값(completion value)을 갖음  
: statement는 표현식처럼 작동할 수 없음 (표현식은 statement처럼 작동할 수 있음)

**종류**  
- [빈문](#빈문)
- [블록문](#블록문)
- [선언문](#선언문)
- [대입문](#대입문)
- [import&export 문(ES6)](#import--export-문)
- [표현식 문](#표현식-문)
- [제어문](#제어문)
    - [for of 문 (ES6)](#for-of-문)
    - [for await 문 (ES9)](#for-await-문)
- [흐름 제어문](#흐름-제어문)
- [throw](./js-exception-handling.md#throw)
- [try catch](./js-exception-handling.md#try-catch)
- [debugger](#debugger)
- <s>with 문</s>



**completion value**   
≠ return value  

```js
// 선언문
var x;
(x === undefined) == true

// 블록문은 마지막 실행문이나 표현식을 자신의 완료 값으로 반환
// 3 반환
{1, 2, 3}

// 4 반환
if(true){
    a = 1+1;
    b = 2+2;
}


// 완료된 값을 사용하고 싶은 경우
var num = eval('if(true){1+1}');
(num === 2) == true
```



## 빈문
empty statement   
: 실행할 문이 없음   

```js
var arr = [];
for(var i=0; i<5 ; arr[i++]=i);

(arr.toString() === '1,2,3,4,5') == true
```



## 블록문
= 복합문   
: 문을 중괄호로 묶어 하나의 단위로 그룹화함         
: let과 const로 선언된 변수는 해당 블록에서만 사용 가능        

```js
{
    // 블록 영역
}

{
    var num = 0;
    const str = '0';
}

console.log(num);
console.log(str); // str is not defined
```



## 선언문
: 모든 선언문은 JS 엔진에 의해 호이스팅 됨   
: let, const, class 선언문은 호이스팅되나 [초기화되지 않은 상태](./README.md#tdz)를 유지      


**변수 선언문**  

```js
var x;
let y;
const z = {};


// 호이스팅
console.log(a);
console.log(b); // Cannot access 'b' before initialization

var a = 1;
let b = 2;
```


**함수 선언문**    

```js
function func(){
}
```


**클래스 선언문**

```js
class Identifier {
    constructor(){
    }
}
```



## 대입문
= 할당문       
: 대입 연산자를 통해 변수에 값 할당  

```js
// 선언문
var x;
let y;

// 할당문
x = 0;

// 다중 할당문
x = y = 0;

// 조건 할당문
x = (y == 0) ? true : false;
```



## import & export 문
: 값, 함수, 객체를 내보내거나 가져오기 위해 사용  

```js
// 모듈을 내보냄
export default function func(){ .. }

// 모듈을 가져오는 구문   
import func from 'module.js';

// html
<script type="module">
import func from 'module.js';

func();
</script>
```



## 표현식 문
: statement로 작성 가능하면서 표현식으로도 작성 가능한 문

```js
var num = 1;
var result;

// statement
if(num === 1){
    result = true;
} else {
    result = false;
}

// expression statement
result = (num === 1) ? true : false ;
```



## 제어문

- 조건문
    - if
    - switch
- 반복문
    - for
    - forEach
    - for in
    - for of (ES6)
    - while
    - do while



### switch 문

```js
var num = 10;
switch(num % 2){
    case 0 :
        console.log('짝수');
    break;
    case 1 :
        console.log('홀수');
    break;
    default :
        console.log('오류');
}
```



### for 문

> for(초기식 ; 조건식 ; 종결식) { 실행문 }


```js
// 초기식 생략
var num = 0;
for( ; num <= 5 ; ++num){
    console.log(num);
}

// 조건식 생략  
for(var num = 0; ; ++num){
    console.log(num);
    if(num == 5) break;
}
```



### for in 문
: 객체 인덱스 순회    
: 객체의 mark된 프로퍼티를 제외한 키 순회  

> for(variable in object){ }

```js
for(var i in ['a','b','c']){
    console.log(i);
}


var obj = {
    a : 1,
    b : 2,
    c : 3,
};

for(var key in obj){
    console.log(`${key} :: ${obj[key]}`);
}
```


### for of 문
: 이터러블 객체 값 순회   

> for(variable of iterable){ }

```js
(Symbol.iterator in []) == true
(Symbol.iterator in new Array()) == true
(Symbol.iterator in new String()) == true

(Symbol.iterator in {}) == false
(Symbol.iterator in new Object()) == false


for(var value of [1, 2, 3]){
    console.log(value);
}


// 일반 객체
var obj = {
    a : 1,
    b : 2,
    c : 3,
};

for( var [key, value] of Object.entries(obj) ){
    console.log(`${key} :: ${value}`);
}


// 커스텀 이터러블
var obj = {
    i : 0,

    [Symbol.iterator]() {
        return this;
    },

    next(){
        if(this.i < 3) {
            return { value : this.i++, done : false }
        }

        return { value : undefined, done : true };
    }

}

var test = obj[Symbol.iterator]();
test.next();

for(var value of obj) {
    console.log(value);
}
```



### for await 문

> for await (variable of iterable) { }

```js
```



## 흐름 제어문
: 제어문의 실행 방식을 바꾸는 문장   

키워드 | 설명
---|---
return   | 함수 실행을 종료하고 함수를 호출한 곳으로 반환 값을 가지고 돌아감
break    | 조건문과 반복문 실행중 해당 문을 만나면 빠져나감  
contiune | 반복문 실행중 현재 실행문을 중단하고 다음 단계로 건너 뜀  



## debugger
: 코드에 중단 점 설정  
: 코드의 실행을 멈추고 디버깅 함수를 호출    

```js
debugger
함수();
```

**node**

```bash
> node debug 파일
```



[top](#)
