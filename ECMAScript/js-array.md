# JS Array
: 인덱스가 있는 요소 집합       
: JS Array는 연속된 요소에 인덱스가 부여된 것이 아니고 요소와 인덱스를 연결 (Hashtable Object)            
: 요소가 없는 인덱스를 갖을 수 있음  
: 기능이 추가된 특수한 객체(Exotic Object)로 프로퍼티를 갖을 수 있음     


- [희소 배열](#희소-배열)
- [연관 배열](#연관-배열)
- [유사 배열](#유사-배열)
- [다차원 배열](#다차원-배열)
- [형식화 배열 (ES6)](#형식화-배열)



```js
// 1. 리터럴
var arr = [];

// 2. 전역 함수
var arr = Array();

// 3. 생성자
var arr = new Array();


// 요소 추가
var arr = [1];
arr.push(2);
arr.push(3);
(arr.toString() === '1,2,3') == true

var arr = [1];
arr.unshift(2);
arr.unshift(3);
(arr.toString() === '3,2,1') == true


// 요소 제거
var arr = [1, 2, 3, 4, 5];
arr.pop();
arr.pop();
(arr.toString() === '1,2,3') == true

var arr = [1, 2, 3, 4, 5];
arr.shift();
arr.shift();
(arr.toString() === '3,4,5') == true


// 요소 접근
var arr = ['a', 'b', 'c'];
(arr[0] === 'a') == true


// 마지막 쉼표 지원
// = trailing commas, final commas
var arr = [1, 2, 3,];


// 배열 확인
([].constructor === Array) == true   
([] instanceof Array) == true
Array.isArray([]) == true
```


**배열 복사**  

```js
var arr = [1, 2, 3, 4, 5];
var newArr = arr.slice();
(newArr.toString() === '1,2,3,4,5') == true

var arr = [1, 2, 3, 4, 5];
var newArr = arr.concat([]);
(newArr.toString() === '1,2,3,4,5') == true

// spread 연산자 사용
var arr = [1, 2, 3, 4, 5];
var newArr = [...arr];
(newArr.toString() === '1,2,3,4,5') == true
```


**배열 순회**  

```js
var arr = ['a', 'b', 'c'];

for(var i=0, len=arr.length ; i<len ; ++i){
    console.log(arr[i]);
};

for(var value of arr){
    console.log(value);
};

for(var index in arr){
    console.log(index, arr[index]);
};

var index = 0;
while(index < arr.length){
    console.log(arr[index]);
    index++;
}

arr.forEach(function (value, index, array) {
    console.log(index, value);
});

arr.map(function (value, index) {
    console.log(index, value);
});
```


**배열 삭제**  

```js
var arr = [1, 2, 3, 4, 5];
arr.length = 0;
(arr.length === 0) == true

// 빈 배열을 재할당하는 것이 더 좋음
var arr = [1, 2, 3, 4, 5];
arr = [];
(arr.length === 0) == true
```


**V8 배열 요소 타입**  
: 내부적으로 배열 요소를 약 20개 타입으로 구분  

https://v8.dev/blog/elements-kinds  
https://chromium.googlesource.com/v8/v8.git/+/master/src/elements-kind.cc  

```js
// PACKED_SMI_ELEMENTS
var arr = [1, 2, 3];

// PACKED_DOUBLE_ELEMENTS : 부동 소수점 혹은 SMI로 표현 불가능한 정수
var arr = [0.1, 0.2, 0.3];

// PACKED_ELEMENTS : 모든 값 저장, SMI과 DOUBLE에 비교하여 메모리 공간을 더 차지함
var arr = ['a', 'b', 'c'];
var arr = [1, 1.5, 'a'];

// HOLEY_ELEMENTS : 희소 배열 최적화를 위해 구분
var arr = [1, , , 5];


// 1. PACKED_SMI_ELEMENTS 타입
var arr = [1];

// 2. PACKED_DOUBLE_ELEMENTS 타입으로 변환됨
arr.push(1.5);

// 3. PACKED_ELEMENTS 타입으로 변환됨
arr.push('2');

// 4. HOLEY_ELEMENTS 타입으로 변환됨
arr[10] = 0;

// 5. DICTIONARY_ELEMENTS 타입으로 변환됨  
arr[10000] = 0;
```



## 희소 배열  
sparse array   
: 홀(인덱스에 대응하는 요소가 없는)이 있는 배열   
: 희소 배열인 경우 배열의 길이가 요소의 개수보다 큼   

**V8에서 희소 배열 처리를 위해 사용하는 배열 저장소**  
- linear storage
- hash table storage

```js
// 희소 배열
var arr = new Array(100);

var arr = [,,,];

var arr = [];
arr[100] = 0;


// 희소 배열 요소 확인
var arr = [,,,];
(arr[0] === undefined) == true
(arr.length === 3) == true
(arr.toString() === ',,') == true


// JS 엔진에 따라 최대 인덱스까지 메모리 할당 여부는 다름
var arr = new Array(100);

// V8은 희소 배열을 키와 값(100 : value)과 설명자를 쌍으로 저장 -- DICTIONARY_ELEMENTS
arr[100] = 'value';

(arr[0] === undefined) == true
arr.hasOwnProperty(0) == false
arr.hasOwnProperty(100) == true  


// 희소 배열 순회
var arr = [1 ,,,, 5];
for(var i in arr) {
    console.log(i);
}

(arr.length === 5) == true

// 홀 제거
var newArr = arr.filter( i => true );

for(var i in newArr) {
    console.log(i);
}

(newArr.length === 2) == true


// 1. 좋은 방법으로는 배열의 크기가 정확하지 않다면 배열의 크기를 미리 할당하지 말고
var arr = [];

// 2. 0번째 인덱스부터 연속적으로 사용해 크기를 늘릴 것  
arr[0] = 0;
```


**dense array, packed array**  
: 희소 배열 반대

```js
var arr = [undefined, undefined, undefined];
var arr = Array.apply(undefined, Array(3));
var arr = new Array(undefined, undefined, undefined);
```



## 연관 배열  
associative array  
: 문자열 키를 사용하는 배열   
: JS Array는 연관 배열을 지원하지 않지만 Array가 객체이므로 문자열 키를 사용할 수 있으나             
&nbsp; 문자열 키가 숫자형으로 변환이 불가능하면 배열의 인덱스에 영향을 미치지는 않음    

\+ Map   
https://github.com/yoojj/JS/blob/master/ECMAScript/object/js-obj-map.md


```js
var arr = [1, 2, 3, 4, 5];
(arr.length === 5) == true

arr.key = 'value';
arr['키'] = '값';

(arr.key === 'value') == true
(arr['키'] === '값') == true
(arr.length === 5) == true


var arr = [];
arr['0'] = 'a';
arr['1'] = 'b';
arr['2'] = 'c';

(arr.toString() === 'a,b,c') == true
(arr.length === 3) == true
```



## 유사 배열
: 배열이 아니나 배열처럼 사용 가능한 객체  

\+ Aguments   
https://github.com/yoojj/JS/blob/master/ECMAScript/object/js-obj-aguments.md

```js
var obj = {
    1: 'a',
    2: 'b',
    3: 'c',
};

for(var i in obj){
    console.log(obj[i]);
}
```



## 다차원 배열  
dimensional array   
: 기술적으로 다차원 배열을 지원하지 않으며 다차원 배열을 흉내내어 사용   
: 배열의 요소로 배열 사용   

```js
var arr = [
    [0, 'a','b','c'],
    [1, 'a','b','c'],
    [2, 'a','b','c'],
];

arr.push([3, 'a','b','c']);

for(var i=0, len = arr.length ; i<len ; ++i){
    arr[i][4] = 'd';
}

(arr[3].toString() === '3,a,b,c,d') == true
```



## 형식화 배열
typed array    
: JS Array를 다른 언어의 배열처럼 연속된 메모리 블록을 사용하기 위한 배열     
: Web API(audio, video, canvas, WebSocket, WebGL 등)의 바이너리 데이터를 효율적으로 처리하기 적합         

ex.

```js
var f64 = new Float64Array(8);
var f32 = new Float32Array(16);

var i32 = new Int32Array(16);
var i16 = new Int16Array(32);
var i8 = new Int8Array(64);

var u32 = new Uint32Array(16);
var u16 = new Uint16Array(32);
var u8 = new Uint8Array(64);
var pixels = new Uint8ClampedArray(64);
```

\+ https://2ality.com/2015/09/typed-arrays.html



[top](#)
