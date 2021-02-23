# JS Variable  
: 데이터를 핸들링하기 위한 추상적 개념   
: 데이터에 레이블을 지정해 메모리에 저장하고 레이블을 통해 데이터 핸들링   


**변수명**   
: 데이터가 저장된 메모리 위치-주소와 매칭된 특정한 이름  

- 변수 : 논리적, 프로그램 언어 수준
- 메모리 위치 : 물리적, 하드웨어 수준   


**식별자**      
: 변수, 프로퍼티, 배열, 함수 등을 식별하기 위해 부여하는 이름   


```js
// 변수 선언 키워드
var

// 변수 선언 = 메모리 공간 확보
// : 변수 선언만으로는 변수 존재와 스코프만 결정되므로
//   undefined 타입으로 지정하여 해당 크기의 메모리 공간을 확보
var 식별자;

// 변수 선언 + 변수 초기화 (메모리에 최초로 값이나 표현식을 할당하는 경우)
var 식별자 = '값';

// 데이터 재할당 = 메모리 위치 변경  
식별자 = '새로운 값';


// 변수 선언 키워드를 사용하지 않을 경우 전역 객체의 프로퍼티가 됨
// 엄격 모드에서는 변수 선언 키워드 사용 필수
num = 0;
(window.num === 0) == true


// 전역 변수
var global = 0;
(window.global === 0) == true

// 암시적 전역 변수
impliedGlobal = 0;

// 전역 객체 프로퍼티  
window.windowGlobal = 0;

function fn(){
    // 지역 변수
    var local = 0;

    // 암시적 전역 변수
    impliedGlobal = 0;
}


// 변수 우선 순위
var str = '전역변수';

function fn(){
    var str = '지역변수';

    console.log('local:' + str);
    console.log('global:' + this.str);

    return str;
}

var result = fn();
(result === '지역변수') == true  
```


**variable vs property**   
- 변수 : 컨텍스트에 포함, 호이스팅됨  
- 프로퍼티 : 객체에 포함, 호이스팅되지 않음  

```js
// global context
var global = 0;

function fn(){
    // function context
    var local = 0;
    global = 1;
}

fn();
(global === 1) == true


// 호이스팅
console.log(a); // ReferenceError: a is not defined
a = 0;

console.log(b); // undefined
var b = 0;


// 프로퍼티 삭제
a = 0;
var b = 0;

(window.a === 0) == true
(window.b === 0) == true

delete a == true
delete b == false


// 주의
var a = 'A';
window[a] = 'B';

(a === 'A') == true
(window.a === 'A') == true
(window['a'] === 'A') == true

(window[a] === 'B') == true
```


https://javascriptweblog.wordpress.com/2010/08/09/variables-vs-properties-in-javascript/



## Variable Keyword

키워드 | 스코프 | 특징
---|---|---
[var](#var)           | 함수 스코프 | 재선언 가능, 재할당 가능
[let (ES6)](#let)     | 블록 스코프 | 재선언 불가, 재할당 가능
[const (ES6)](#const) | 블록 스코프 | 재선언 불가, 재할당 불가  



### var

```js
// 전역 스코프
var num = 0;

function fn(){
    console.log(num);
}


// 함수 스코프
function fn(){
    var num = 1;

    if(true){
        var str = '일';
        console.log(num);
    }

    console.log(str);
}


// 1. JS 엔진은 선언문을 함수 스코프 최상단으로 끌어 올려 메모리 할당을 우선시 함  
function fn(){
    // 2. 때문에 실행시 오류가 나지 않지만 값은 undefined를 반환  
    console.log(num);

    if(true){
        var num = 1;
    }
}
```



### let
: 현재 블록에만 존재하며 외부 스코프에 영향을 주지 않음    
: 식별자 선언시 초기화하지 않으면 undefined 값 할당

```js
function fn(){
    let num = 1;

    if(true){
        let str = '일';
        console.log(num);
    }

    //console.log(str); ReferenceError
}
```



### const
: 초기화 필수   
: 값-리터럴을 할당할 경우에는 불변으로 재할당 불가      
: 객체를 참조할 경우에는 참조 값이 불변이며 객체 자체는 가변    

```js
const obj = {str : ''};
obj.str = '수정';
obj.num = 0;
```


**객체를 불변으로 사용시**  
- Object.freeze()
- Object.seal()

```js
const obj = {str : ''};
Object.freeze(obj);
obj.str = '수정 불가';
obj.num = 0;


// 주의
const objA = {
    str : '',
    num : 1 ,
    objB : {
        str : '주의',
        num : 2
    }
};

Object.freeze(objA);
objA.objB.num = 0;
```



[top](#)
