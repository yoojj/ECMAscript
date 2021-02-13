 # ECMAScript  
: 멀티 패러다임 언어 (명령형, 함수형, 객체기반-지향형)     
&nbsp; - 객체 기반 : 내장된 객체 사용    
&nbsp; - 객체 지향 : 객체를 정의해 사용      
: 프로토타입 기반 언어   
: 데이터 타입을 명시적으로 선언하지 않는 동적 타입 언어     
: 싱글 스레드 기반 언어이나 Web Workers을 통해 멀티 스레드 가능        


- [Variable](./js-variable.md)
- [Keyword](./js-keyword.md)
- [Operator](./js-operator.md)
- [Expression](./js-expression.md)
- [Statement](./js-statement.md)
- [Exception](./js-exception-handling.md)
- [Data Type](./js-data-type.md)
    - [Primitive](./js-data-type.md#primitive)
    - [Object](./js-data-type-object.md)
        - [Native Object List](./object/)
- [Coercion & Conversion](./js-coercion-conversion.md)
- [Array](./js-array.md)
- [Function](./js-function.md)
    - [Function List](./js-function-list.md)
- [Execution Context](./js-execution-context.md)
    - [Scope](./js-scope.md)
    - [Closure](./js-closure.md)
- [Object-Oriented JavaScript](./oojs.md)
- [Functional Reactive Programming](./frp.md)
- [Performance & Optimization](./js-performance-optimization.md)
- [Testing & Debugging](./js-testing-debugging.md)



**영향받은 언어**  
  
언어 | 영향
---|---
리스프     | 변수 스코프
C, 자바    | 문법, 데이터 타입, 객체 관계
셀프       | 프로토타입 기반 객체, 상속
AWK       | 속성 반복, 함수 선언
오크       | 함수
하이퍼토크  | 이벤트
스키마     | 일급 함수, 클로저  
펄, 파이썬  | 문자열, 배열, 정규 표현식



## JS Identifier
: 변수, 함수, 프로퍼티 구분 및 사용을 위해 문자, 숫자, 기호로 만든 이름              
: 식별자의 첫 글자는 문자와 언더스코어 및 달러 기호만 사용 가능    
: 예약어와 특별한 값은 변수와 함수 식별자로 사용 불가    
! [내장 객체](./object#native-object) 명은 식별자로 사용 가능

**특별한 값**  
- [undefined](./js-data-type.md#undefined)
- [null](./js-data-type.md#null)
- [NaN](./js-data-type.md#nan)
- [Infinity](./js-data-type.md#infinity)

**식별자로 사용 불가능한 리터럴**   
- true
- false


```js
// 주의
var Date = 0;
var date = new Date(); // Date is not a constructor
```



## JS Semicolon   
: 문장의 끝을 구분하는 문장 구분자 (자바에서는 문장 종결자)        
: 세미콜론을 사용하지 않을 경우 특정 상황에서 소스 코드 토큰 스트림에 의해 세미콜론 자동 삽입   

```js
// 문장으로 끝날 경우 세미콜론 사용
var arr = [1,2,3];
var func = function(){  };

do{  } while(true);


// 블록에는 사용하지 않으나 사용해도 별도로 인식하여 에러가 나지 않음
if(true){ }
function func(){ }
```


**자동 세미콜론 삽입 (ASI)**
1. 소스 코드를 좌측에서 우측으로 파싱시 문제가 되는 허용하지 않는 토큰을 발견하면 자동 삽입
2. 소스 코드를 좌측에서 우측으로 파싱시 토큰의 입력 스트림 끝에 도달하면 자동 삽입
3. 소스 코드를 좌측에서 우측으로 파싱시 ++, --, continue, break, return, yield, module 키워드를 만나면 자동 삽입

```js
// 1. 세미콜론 자동 삽입
var arr = [1,2,3] // ;

// 2. 세미콜론 자동 삽입
console.log('세미콜론') // ;

// 3. 세미콜론 자동 삽입
var func = function(){
    return // ;
}


// 세미콜론 자동 삽입으로 인한 오류
var sum = ( a, b ) => {
    return // ;
    {
        result: a + b
    }
};

var result = sum(1,2);
console.log(result)


// 모든 줄바꿈에 세미콜론 자동 삽입 아님
var num
num
=
10
console.log(num)


// 한 행에 여러 문장을 사용할 경우 세미콜론 사용 필수
var a, b, c
a = 1; b = 2; c = 3;

for( ; ; ){ }
```



## JS Strict Mode
: JS를 보다 명확하게 실행하기 위해 ES5 부터 도입   

- 변수를 선언해야 사용 가능
- 8진수 리터럴 사용 불가
- 스코프 최상단에 함수 선언
- 일반 함수에서 this는 undefined
- arguments 사용 제한  
- eval() 안에서 변수, 함수 선언 불가
- with 문 사용 불가
- ...


**use strict**   
: literal expression     
: 엄격 모드 실행을 위해 삽입하는 문자열    

```js
<script>
    'use strict';
</script>


function fn(){
    'use strict';

    // 블록에서 선언하면 오류
    // { function f(){} }

    // 함수 표현식으로 우회 가능
    {
        var f = function(){ .. };
    }

}
```



## JS Hashbang Comment
: JS 엔진을 지정하기 위한 주석   
: 서버 측에서 실행되는 코드에 사용  

> #!/경로/엔진

```js
#!/경로/env node
export {};
```



## JS Engine
: 코드 실행시 코드를 두 번 해석  
: 처음 코드 해석시 컴파일러에 의해 안정성 검사와 코드 최적화 수행  
: 이후 엔진(컴파일러나 인터프리터)에 의해 코드 실행    

https://github.com/yoojj/Web/tree/master/Browser/js-engine



### Hoisting
: 컴파일시 선언문(var, let, const, function, function*, class, import)의 메모리 할당을 우선시 함      
: 모든 선언문은 해당 스코프 최상단으로 끌어 올려짐  
: 여러 선언문이 존재한다면 함수가 먼저 호이스팅 됨      
: let, const, class 선언문은 호이스팅 후 초기화되지 않은 상태를 유지(TDZ) 함      

```js
// 선언문
fn();
function fn(){ return '가능'; }


// 표현식
fn('불가능'); // Cannot access 'func' before initialization
var fn = function(str){ return str; };
```



### TDZ
Temporal Dead Zone
: 변수 선언문과 할당문 사이           
: TDZ에 존재하는 변수는 선언되었지만 초기화되지 않은 상태를 유지    
: let, const, class 선언문은 TDZ에 의해 제약을 받음      

```js
// var 변수는 호이스팅 후 undefined 타입으로 초기화 됨
console.log(a); // = undefined

// let, const 변수는 호이스팅 후 초기화되지 않은 상태로 참조시 오류    
console.log(b); // = Cannot access 'b' before initialization

var a = 0;
let b = 1;


let c; // undefined 타입으로 초기화됨
(c === undefined) == true
```



[top](#)
