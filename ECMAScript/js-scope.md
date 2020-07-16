# JS Scope
: 변수의 수명-유효 범위로 변수에 접근 여부 및 네임스페이스 사용과 관련      
: JS는 런타임에 변경되지 않는 정적 스코프    



## Lexical Scope
= 정적 스코프, 수사적 스코프    
<> Dynamic Scope    

: 렉싱 타임시 어휘 범위 결정    
: 변수, 함수를 어디에 작성했는지에 따라 유효 범위 결정   
: 변수, 함수 선언 위치에 따라 스코프가 달라지고 스코프에 따라 메모리 상주 주기 결정


**스코프 범위**   
- [Global Scope](global-scope)
- Local Scope
    - [Function Scope](#function-scope)
    - [Block Scope (ES6)](#block-scope)


**Nested Scope**   
= 스코프 체인, 스코프 버블   
: JS 엔진이 현재 스코프에서 해당하는 변수를 검색하고 발견하지 못했을 경우 상위 스코프를 탐색하여 최후에는 글로벌 스코프에 도달하고 글로벌 스코프에서도 찾지 못하면 검색을 멈추고, RHS 참조시 ReferenceError를 반환하고 LHS 참조시 (엄격 모드가 아닐 경우) 글로벌 스코프에 해당 변수 생성을 요청  

- LHS(left hand side)  ex. i = 0;
- RHS(right hand side)  ex. console.log(a);


**Variable Shadowing**    
: 내부 스코프의 변수와 외부 스코프 변수의 식별자가 같을 경우 외부에 있는 변수는 일시적으로 가려짐  
: 내부 스코프에서 외부 스코프에 존재하는 동일한 이름을 가진 변수를 참조할 수 없음   
: 글로벌 스코프에 존재하는 변수는 글로벌 객체를 통해 참조 가능  


키워드 | 유효 범위 | 호이스팅  
---|---|---
var        | function      | Declaration
let        | block         | Temporal Dead Zone
const      | block         | Temporal Dead Zone
function   | block         | Complete
class      | block         | Temporal Dead Zone
import     | module        | Complete


**scope vs context**    

- scope : 변수의 유효 범위  
- context : 함수가 실행되는 객체-환경     

```js
// context
var num = 0;

const obj = {
    num : 1,
    context : this.num,
    func : function(){
        return this.num
    }
};

(this.num === 0) == true  
(obj.context === 0) == true

const result = obj.func();
(result === 1) == true


// 화살표 함수 주의
var num = 0;
const obj = {
    num : 1,
    context : this.num,
    func : () => {
        return this.num
    }
};

const result = obj.func();
(result === 0) == true
```



### Global Scope   
: 스코프 체인에서 최상위에 존재하는 스코프   
: 프로그램 시작시 암시적으로 주어지는 스코프     
: 전역 스코프에서 변수 선언시 전역 변수가 되어 어디서든 접근 가능      
: 플랫폼에 따라 전역 객체가 다르므로 여러 환경에서 실행된다면 globalThis 키워드 사용  

- node - global
- browser - window
- web worker - self


```js
(this.Date === window.Date) == true

function isTrue(){
    console.log(Date === this.Date);
}

function isFalse(){
    var Date = {}
    console.log(Date === this.Date);
}
```



### Function Scope
: 함수 안에서 선언된 변수는 해당 함수 내에서만 유효 범위를 갖음  

**키워드**    
- var

```js
function func(){
    for(var num = 0 ; num < 5; num += 1); // 주의
    return num;
}

const result = func();
(result === 5) == true;
```



### Block Scope
: 가장 가까운 중괄호-block을 유효 범위로 지정     
: (화살표 함수를 제외한) 함수 스코프의 서브셋    

**키워드**    
- let
- const


```js
{ /* 외부 블록 */
    let x = 1;
    let y = 2;

    { /* 내부 블록 */
        let x = 0; // 변수 섀도우
        console.log('내부 ::', x, y);
    }

    console.log('외부 ::', x, y);
}
```



[top](#)
