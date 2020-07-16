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



[top](#)
