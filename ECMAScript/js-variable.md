# JS Variable
: 데이터를 메모리에 저장하고 해당 데이터-메모리에 접근하기 위해 메모리 위치와 매칭되는 특정한 이름     
: 리터럴, 함수, 배열, 객체 등 모든 데이터 타입 저장 가능  


```js
// 변수 선언 키워드
var

// 변수 선언 = 메모리 공간 확보
// : 변수 선언만으로는 변수 존재와 스코프만 결정되므로 자동으로 undefined 타입으로 지정하여
//   메모리에 undefined 타입 크기를 확보  
var 식별자;

// 변수 선언 + 변수 초기화 (최초 한 번 할당)
// : 변수 선언 및 메모리에 값 할당
var 식별자 = '값';

// 변수 선언 키워드를 사용하지 않을 경우 전역 객체의 프로퍼티가 됨
// 엄격 모드에서는 불가  
zero = 0;
(window.zero === 0) == true


// 전역 변수
var global = 0;
(window.global === 0) == true

// 암시적 전역 변수
impliedGlobal = 0;

// 전역 객체 프로퍼티  
window.windowGlobal = 0;

// 지역 변수
function func(){
    var local = 0;
}


// 우선 순위
var str = '전역변수';

function func(){
    var str = '지역변수';

    console.log('local:' + str);
    console.log('global:' + this.str);

    return str;
}

var result = func();
(result === '지역변수') == true  
```


**variable vs property**

- 변수 - 컨텍스트에 포함, 호이스팅됨  
- 프로퍼티 - 객체에 포함, 호이스팅되지 않음  

```js
// 컨텍스트
var global = 0; // global context

function func(){
    var local = 0; // function context
    global = 1;
}

func();
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

(a == 'A') == true
(window.a === 'A') == true

(window[a] === 'B') == true
```

\+ https://javascriptweblog.wordpress.com/2010/08/09/variables-vs-properties-in-javascript/



## Variable Keyword

키워드 | 스코프
---|---
[var](#var)          | 함수 스코프
[let(ES6)](#let)     | 블록 스코프
[const(ES6)](#const) | 블록 스코프



### var

```js
function func(){
    var num = 1;

    if(true){
        var str = '일';
        console.log(num);
    }

    console.log(str);
}


// 1. 컴파일시 선언문을 함수 스코프 최상단으로 끌어 올려 메모리 할당을 우선시 함  
function func(){
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
function func(){
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
