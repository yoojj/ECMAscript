# JS Closure

1. 함수가 렉시컬 스코프(참조한 상위 스코프)를 기억
2. 함수를 렉시컬 스코프 밖에서 실행해도
3. 기억한 렉시컬 스코프에 접근 가능   


```js
var num = 0;

function outer(i){
    // 3. 상위 스코프에 해당 변수가 존재하므로 참조 -- RHS
    var num = i;

    function inner(){
        // 1. 현재 스코프에 해당 변수가 존재하지 않으므로
        // 2. 자신을 둘러싼 환경인 상위 스코프에 접근  
        return ++num;
    }

    return inner;
}


var result = outer(1);

// 4. inner 함수가 스코프 밖에서 실행  
// 5. inner 함수가 상위 스코프를 참조할 수 있음 == 클로저   
(result() == 2) == true
```



## Module Pattern

```js
var module = (function(){

    function private(){
        return 0;
    }

    function public(){
        return private();
    }

    return {
        public,
    }

})();

(module.public() === 0) == true
```


**Revealing Module Pattern**

```js
var module = (function(){

    var private = 0;
    var public = 1;

    function privateFunction(){
        return private;
    }

    function get(){
        return privateFunction();
    }

    function set(val){
        private = val;
    }

    return {
        public,
        get,
        set,
    }

})();

module.set(10);
(module.get() === 10) == true
```



## Curring Function
: 여러 인자를 받아 단일 호출로 실행되는 함수를    
&nbsp; 단일 인자만 받는 함수 여러개로 만들어 각각의 함수를 호출해 처리하는 함수     
: n개의 인자를 받는 함수가 있다면 n개의 함수로 처리됨      

```js
// 일반 함수
function add(a, b){
    return a + b;
}

(add(1,2) === 3) == true


// 커링 함수
function add(a) {
    return function(b){
            return a + b;
    }
}

(add(1)(2) === 3) == true
```



[top](#)
