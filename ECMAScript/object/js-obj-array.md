# JS Array

https://tc39.es/ecma262/#sec-array-objects


```js
// 리터럴
[];

// 전역 함수
Array();

// 생성자
new Array();
```


속성 | 설명
---|---
length | 배열의 길이 반환


**메소드**
- [Array.from()](#arrayfrom)
- [Array.isArray()](#arrayisarray)
- [Array.of()](#arrayof)
- [Array.prototype.concat()](#arrayprototypeconcat)
- [Array.prototype.copyWithin()](#arrayprototypecopywithin)
- [Array.prototype.entries()](#arrayprototypeentries)
- [Array.prototype.every()](#arrayprototypeevery)
- [Array.prototype.fill()](#arrayprototypefill)
- [Array.prototype.filter()](#arrayprototypefilter)
- [Array.prototype.find()](#arrayprototypefind)
- [Array.prototype.findIndex()](#arrayprototypefindindex)
- [Array.prototype.flat()](#arrayprototypeflat)
- [Array.prototype.flatMap()](#arrayprototypeflatmap)
- [Array.prototype.forEach()](#arrayprototypeforeach)
- [Array.prototype.includes()](#arrayprototypeincludes)
- [Array.prototype.indexOf()](#arrayprototypeindexof)
- [Array.prototype.join()](#arrayprototypejoin)
- [Array.prototype.key()](#arrayprototypekeys)
- Array.prototype.lastIndexOf()
- [Array.prototype.map()](#arrayprototypemap)
- [Array.prototype.pop()](#arrayprototypepop)
- [Array.prototype.push()](#arrayprototypepush)
- [Array.prototype.reduce()](#arrayprototypereduce)
- [Array.prototype.reduceRight()](#arrayprototypereduceright)
- [Array.prototype.reverse()](#arrayprototypereverse)
- [Array.prototype.shift()](#arrayprototypeshift)
- [Array.prototype.slice()](#arrayprototypeslice)
- [Array.prototype.some()](#arrayprototypesome)
- [Array.prototype.sort()](#arrayprototypesort)
- [Array.prototype.splice()](#arrayprototypesplice)
- Array.prototype.toLocaleString()
- Array.prototype.toSource()
- Array.prototype.toString()
- [Array.prototype.unshift()](#arrayprototypeunshift)
- [Array.prototype.values()](#arrayprototypevalues)



## Array.from()
: 유사 배열 객체나 이터러블 객체를 배열로 반환    

```js
function fn(){
    return Array.from(arguments);
}

var arr = fn(1,2,3,4,5);
(arr.toString() === '1,2,3,4,5') == true


var arr = Array.from('string');
(arr.toString() === 's,t,r,i,n,g') == true


var arr = Array.from( [1,2,3,4,5], ( x, y ) => y = x * 2 );
(arr.toString() === '2,4,6,8,10') == true
```



## Array.isArray()
: 아규먼트가 배열인지 여부 반환

```js
Array.isArray([]) == true
Array.isArray(Array()) == true
Array.isArray(Array.of()) == true
Array.isArray(new Array()) == true
Array.isArray(Array.prototype) == true
```



## Array.of()
: 주어진 값을 요소로 갖는 배열 반환

> Array.of(...args)

```js
var arr = Array.of(5);
(arr[0] === 5) == true
(arr[1] === undefined) == true
```



## Array.prototype.concat()
: 배열에 주어진 아규먼트를 연결한 새 배열 반환    

> [].concat(...args)

```js
var arr = [1,2,3].concat(4);
(arr.toString() === '1,2,3,4') == true


var arr = [1,2,3].concat(['a','b','c']);
(arr.toString() === '1,2,3,a,b,c') == true


var arr = [1,2,3].concat(['a','b','c'], '가','나','다');
(arr.toString() === '1,2,3,a,b,c,가,나,다') == true
```



## Array.prototype.copyWithin()
: 대상이 되는 요소에 주어진 시작 인덱스에 해당하는 요소를 할당    
: 요소가 추가되지 않으므로 배열의 길이는 바뀌지 않음    

> [].copyWithin(target, start[, end])

- target : 대상될 요소의 인덱스
- start : 할당될 시작 요소의 인덱스

```js
var arr = [1,2,3,4,5];
arr.copyWithin(0, 4);
(arr.toString() === '5,2,3,4,5') == true

var arr = [1,2,3,4,5];
arr.copyWithin(-1, 0);
(arr.toString() === '1,2,3,4,1') == true
```



## Array.prototype.entries()
: 배열의 인덱스와 요소를 키/값으로 하는 새 이터레이터 객체 반환

```js
var arr = ['a','b','c'];
var iterator = arr.entries();

for(var [key, value] of iterator){
    console.log(key, value);
}
```



## Array.prototype.every()
: 주어진 콜백을 배열 요소에 적용하고 모두 참이면 참 반환   
: 빈 배열을 호출하면 무조건 참 반환

> [].every(callback[, thisArg])

- callback : 3개(element, index, array)의 아규먼트를 갖고 boolean을 반환하는 함수
- thisArg : callback 실행시 this로 사용하는 값  

```js
var result = [].every( (el) => { return true } );
result == true

var arr = [2,4,6,8,10];
arr.every( el => (el % 2) === 0 ) == true
```



## Array.prototype.fill()
: 배열에 주어진 값을 시작 인덱스부터 마지막 인덱스까지 할당   
: 시작 인덱스와 마지막 인덱스의 기본 값은 0  

> [].fill(value[, start[, end]])

```js
var arr = [1,2,3,4,5];
arr.fill(1, 1, 4);
(arr.toString() === '1,1,1,1,5') == true


var arr = [1,2,3,4,5];
arr.fill(1, 3);
(arr.toString() === '1,2,3,1,1') == true


var arr = [1,2,3,4,5];
arr.fill(1);
(arr.toString() === '1,1,1,1,1') == true


// 배열 길이를 변화시키지 않음
var arr = [];
arr.fill(undefined, 0, 5);
(arr.toString() === '') == true
```



## Array.prototype.filter()
: 주어진 콜백을 배열 요소에 적용하고 그 결과를 요소로 갖는 새 배열 반환   

> [].filter(callback[, thisArg])

- callback : 3개(currentValue, index, array)의 아규먼트를 갖고 boolean을 반환하는 함수
- thisArg : callback 실행시 this로 사용하는 값  

```js
var arr = [1,2,3,4,5];
var newArr = arr.filter( x => x > 3 );
(newArr.toString() === '4,5') == true
```



## Array.prototype.find()
: 주어진 함수를 배열 요소에 적용하고 이를 만족하는 첫 요소 반환   
: 만족하는 요소가 없는 경우 undefined 반환  

> [].find(predicate[, thisArg])

- predicate : 3개(element, index, array)의 아규먼트를 갖고 boolean을 반환하는 함수
- thisArg : predicate 실행시 this로 사용하는 값  

```js
var arr = [1,2,3,4,5];
var result = arr.find( x => (x % 2) == 0 );
(result === 2) == true
```



## Array.prototype.findIndex()
: 주어진 함수를 배열 요소에 적용하고 이를 만족하는 첫 요소의 인덱스 반환

```js
var arr = [1,2,3,4,5];
var result = arr.findIndex( x => (x % 2) == 0 );
(result === 1) == true
```



## Array.prototype.flat()
: 중첩된 배열을 주어진 깊이만큼 flat한 배열로 만들고 이를 반환    
: 배열에 구멍이 있을 경우 메움    

> [].flat([depth])

```js
var arr = [[1],[[2]],[[[3]]]];
var newArr = arr.flat(3);
(newArr.toString() === '1,2,3') == true


var arr = [1, ,,, 5];
var newArr = arr.flat();
(newArr.toString() === '1,5') == true
```



## Array.prototype.flatMap()
: 주어진 함수를 배열 요소에 적용하고 이 값을 요소로 갖는 새 배열 반환   

> [].flatMap(mapperFunction[, thisArg])

```js
var arr = [1,2,3,[4],[[5]]];
var newArr = arr.flatMap( x => x * 2 );
(newArr.toString() === '2,4,6,8,10') == true


var a = [1, 2, 3];
var b = ['a','b','c'];
var arr = a.flatMap( (a, x) => [a, b[x]] );
(arr.toString() === '1,a,2,b,3,c') == true
```



## Array.prototype.forEach()
: 주어진 콜백을 배열 요소에 적용      

> [].forEach(callback[, thisArg])

```js
var arr = [1,2,3,4,5];
arr.forEach( x => console.log(x) );

var arr = [1,2,3,4,5];
arr.forEach( (value, i) => arr[i] = value * 2 );
(arr.toString() === '2,4,6,8,10') == true
```


**forEach() vs map()**
```js
var arr = [1,2,3,4,5];
var newArr = arr.forEach( x => x * 2 );
(newArr === undefined) == true


// 결과를 새 배열로 반환
var arr = [1,2,3,4,5];
var newArr = arr.map( x => x * 2 );
(newArr.toString() === '2,4,6,8,10') == true
```



## Array.prototype.includes()
: 배열에 주어진 값이 요소로 존재하면 참 반환

> [].includes(searchElement[, fromIndex])

- fromIndex : 요소를 검색할 시작 인덱스 지정

```js
var arr = [1,2,3,4,5];
var result = arr.includes(1);
result === true


var arr = [1,2,3,4,5];
var result = arr.includes(1, 5);
result === false
```



## Array.prototype.indexOf()
: 배열에 주어진 값이 요소로 존재하면 해당 인덱스 반환  

> [].indexOf(searchElement[, fromIndex])  
> [].lastIndexOf(searchElement[, fromIndex])

```js
// 가장 작은 인덱스 반환
var arr = [1,1,1,1,1];
(arr.indexOf(1) === 0) == true
```



## Array.prototype.join()
: 배열의 모든 요소를 하나의 문자열로 만들고 이를 반환   
: 구분자를 생략하면 콤마가 기본 구분자로 삽입됨

> [].join(separator)

```js
var arr = [1,2,3,4,5];
var result = arr.join();
(result === '1,2,3,4,5') == true

var result = arr.join('');
(result === '12345') == true
```



## Array.prototype.keys()
: 배열의 인덱스를 키로 하는 새 이터레이터 객체 반환

```js
var arr = [,,,,,];
var iterator = arr.keys();

for(var key of iterator){
    console.log(key);
}
```



## Array.prototype.map()
: 주어진 콜백을 배열 요소에 적용하고 그 결과를 요소로 갖는 새 배열 반환  

> [].map(callback[, thisArg])

```js
var arr = [1,2,3,4,5];
var newArr = arr.map(x => x * 2);
(newArr.toString() === '2,4,6,8,10') == true
```



## Array.prototype.pop()
: 배열에서 마지막 요소를 제거하고 해당 요소 반환

```js
var arr = [1,2,3,4,5];
var result = arr.pop();
(arr.toString() === '1,2,3,4') == true
(result === 5) == true
```



## Array.prototype.push()
: 주어진 값을 배열의 마지막 요소로 추가하고 바뀐 배열의 길이 반환  

> [].push(...args)

```js
var arr = [];
var length = arr.push(1,2,3);
(arr.toString() === '1,2,3') == true
(length === 3) == true
```



## Array.prototype.reduce()
: 주어진 콜백을 배열 요소에 적용하고 이를 하나의 결과로 반환  
: 요소를 왼쪽부터 두 개씩 묶어 함수 실행   

> [].reduce(callback[, initialValue])

- callback : 4개(previouseValue, currentValue, index, array)의 아규먼트를 갖는 함수
- initialValue : 첫번째 인수로 사용될 값

```js
var arr = [1,2,3,4,5];
var result = arr.reduce( (x, y) => x + y );
(result === 15) == true

var arr = [1,2,3,4,5];
var result = arr.reduce( (x, y) => { return x + y }, 10);
(result === 25) == true

var arr = ['a','b','c','d','e'];
var result = arr.reduce( (x, y) => x + y );
(result === 'abcde') == true
```



## Array.prototype.reduceRight()
: 주어진 콜백을 배열 요소에 적용하고 이를 하나의 결과로 반환    
: 요소를 오른쪽부터 두 개씩 묶어 함수 실행   

```js
var arr = ['a','b','c','d','e'];
var result = arr.reduceRight( (x, y) => x + y );
(result === 'edcba') == true
```



## Array.prototype.reverse()
: 배열의 요소 순서 반전

```js
var arr = [1,2,3,4,5];
arr.reverse();
(arr.toString() === '5,4,3,2,1') == true
```



## Array.prototype.shift()
: 배열의 첫번째 요소를 제거하고 해당 요소 반환    
: unshift()와 함께 사용해 큐를 구현할 수 있음    

```js
var arr = ['a','b','c','d','e'];
var result = arr.shift();
(result === 'a') == true
(arr.toString() === 'b,c,d,e') == true
```



## Array.prototype.slice()
: 주어진 시작 인덱스에서 종료 인덱스 범위에 해당하는 요소를 갖는 새 배열 반환  

> [].slice(start, end)

```js
var arr = ['a','b','c','d','e'];

var newArr = arr.slice(0);
(newArr.toString() === 'a,b,c,d,e') == true

var newArr = arr.slice(0, 2);
(newArr.toString() === 'a,b') == true
```



## Array.prototype.some()
: 주어진 콜백을 배열 요소에 적용하고 하나라도 통과하면 참 반환   
: 빈 배열에 적용하면 무조건 거짓 반환  

> [].some(callback[, thisArg])

- callback : 3개(element, index, array)의 아큐먼트를 갖고 boolean을 반환하는 함수

```js
var arr = [];
arr.some( x => x < 3 ) == false

var arr = [1,2,3,4,5];
arr.some( x => x < 5 ) == true
arr.some( x => x > 5 ) == false
```



## Array.prototype.sort()
: 주어진 함수를 기준으로 배열의 요소를 정렬   
: 주어진 함수가 없다면 배열의 요소를 유니코드 값을 기준으로 정렬   

> [].sort(comparefn)

```js
var arr = [5,4,3,2,1];
arr.sort();
(arr.toString() === '1,2,3,4,5') == true


var arr = [111,22,3];
arr.sort( (x, y) => x - y );
(arr.toString() === '3,22,111') == true


// 주의
var arr = ['a',111,'b',22,'c',3];
arr.sort();
(arr.toString() === '111,22,3,a,b,c') == true
```



## Array.prototype.splice()
: 배열에 새 요소를 추가하거나 기존 요소를 교체하거나 제거         
: 기존 요소를 교체하거나 제거하는 경우 해당 요소를 새 배열로 반환   

> [].splice(start, deleteCount, ...args)

```js
var arr = [];
arr.splice(0, 0, 'a','b','c','d','e');
(arr.toString() === 'a,b,c,d,e') == true


var arr = [];
arr.splice(0, 0, 'a');
arr.splice(1, 0, 'b');
arr.splice(2, 0, 'c');
(arr.toString() === 'a,b,c') == true


var arr = [1,2,3,4,5];
arr.splice(0, 0, 'a');
arr.splice(1, 0, 'b');
arr.splice(2, 0, 'c');
(arr.toString() === 'a,b,c,1,2,3,4,5') == true


// 요소 제거
var arr = [1,2,3,4,5];
var result = arr.splice(3, 1);
(result.toString() === '4') == true

var arr = [1,2,3,4,5];
var result = arr.splice(3);
(result.toString() === '4,5') == true


// 요소 제거하거고 새 요소 추가  
var arr = [1,2,3,4,5];
var result = arr.splice(3, 4, 'a', 'b');
(arr.toString() === '1,2,3,a,b') == true
(result.toString() === '4,5') == true
```



## Array.prototype.unshift()
: 주어진 값을 배열의 첫번째 요소로 추가하고 바뀐 배열의 길이 반환     
: shift()와 함께 사용하면 큐를 구현할 수 있음   

> [].unshift(...args)

```js
var arr = ['c','d','e'];
arr.unshift('a','b');
(arr.toString() === 'a,b,c,d,e') == true
```



## Array.prototype.values()
: 배열의 요소를 값으로 하는 새 이터레이터 객체 반환

```js
var arr = ['a','b','c','d','e'];
var iterator = arr.values();

for(var value of iterator){
    console.log(value);
}
```



[top](#)
