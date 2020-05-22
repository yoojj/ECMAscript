# JS String

```js
// 전역 함수
String();

// 생성자
new String();


var str1 = String('');
var str2 = new String('');

(typeof str1 === 'string') == true
(typeof str2 === 'object') == true
```


프로퍼티 | 설명
---|---
length | 문자열의 길이 반환


- [String.prototype.charAt()](#stringprototypecharat)
- [String.prototype.charCodeAt()](#stringprototypecharcodeat)
- [String.prototype.codePointAt()](#stringprototypecodepointat)
- [String.prototype.concat()](#stringprototypeconcat)
- [String.prototype.endsWith()](#stringprototypeendwith)
- [String.prototype.includes()](#stringprototypeincludes)
- [String.prototype.indexOf()](#stringprototypeindexof)
- [String.prototype.lastIndexOf()](#stringprototypelastindexof)
- [String.prototype.match()](#stringprototypematch)
- [String.prototype.normalize()](#stringprototypenormalize)
- [String.prototype.padEnd()](#stringprototypepadend)
- [String.prototype.padStart()](#stringprototypepadstart)
- [String.prototype.repeat()](#stringprototyperepeat)
- [String.prototype.replace()](#stringprototypereplace)
- [String.prototype.search()](#stringprototypesearch)
- [String.prototype.slice()](#stringprototypeslice)
- [String.prototype.split()](#stringprototypesplit)
- [String.prototype.startsWith()](#stringprototypestartswith)
- String.prototype.substr()
- String.prototype.substring()
- [String.prototype.toLowerCase()](#stringprototypelowercase)
- String.prototype.toString()
- [String.prototype.toUpperCase()](#stringprototypetouppercase)
- [String.prototype.trim()](#stringprototypetrim)
- String.prototype.valueOf()



## String.prototype.charAt()
: 문자열에서 주어진 인덱스에 위치하는 문자 반환    
: 인덱스 범위를 벗어날 경우 빈 문자열 반환

```js
var str = 'string';
(str.charAt(0) === 's') == true
(str.charAt(10) === '') == true
```



## String.prototype.charCodeAt()
: 문자열에서 주어진 인덱스에 위치하는 문자의 코드 반환    
: 인덱스 범위를 벗어날 경우 NaN 반환   

```js
var str = 'string';
(str.charCodeAt(0) === 115) == true
```



## String.prototype.codePointAt()
: 문자열에서 주어진 인덱스에 해당하는 문자의 코드 포인트 반환   
: 인덱스 범위를 벗어날 경우 undefined 반환   
! charCodeAt() 메소드와 동일한 기능이나 호출 형태가 다름   

```js
var str = 'string';
(str.codePointAt(0) === 115) == true
```



## String.prototype.concat()
: 문자열에 전달된 문자열을 연결하여 새 문자열 반환     
: + 연산자와 동일한 기능      

```js
var str = 'str'.concat('ing');
(str === 'string') == true


var a = 'a';
var b = 'b';
var c = 'c';

var str = a.concat(',', b, ',', c);
(str === 'a,b,c') == true
```



## String.prototype.endsWith()
: 문자열의 마지막 문자(열)와 주어진 문자(열)를 비교하여 참 거짓 반환  

```js
var str = 'string';
str.endsWith('string') == true
str.endsWith('g') == true


var str = 'st ri ng';
str.endsWith('ng') == true
str.endsWith('g') == true


var str = 's t r i n g';
str.endsWith('g') == true
```



## String.prototype.includes()
: 문자열에 주어진 문자가 포함되었는지 여부 반환

```js
var str = 'string';
str.includes('r') == true
```



## String.prototype.indexOf()
: 문자열에 주어진 문자와 처음으로 일치하는 요소의 인덱스 반환  
: 해당 문자가 문자열에 없을 경우 -1 반환   

```js
var str = 'abcabc';
(str.indexOf('a') === 0 ) == true
```



## String.prototype.lastIndexOf()
: 문자열에 주어진 문자를 뒤에서부터 찾아서 처음으로 일치하는 요소의 인덱스 반환   
: 해당 문자가 문자열에 없을 경우 -1 반환    

```js
var str = 'abcabc';
(str.lastIndexOf('a') === 3) == true
```


## String.prototype.match()
: 문자열에 주어진 정규식으로 검색하여 일치하는 문자를 배열로 반환   

```js
var str = 'string STRIGN string';
var result = str.match(/[A-Z]/g);
(result.toString() === 'S,T,R,I,G,N') == true
```



## String.prototype.normalize()
: 문자열을 유니코드 정규화 방식에 따라 정규화하여 반환  

- NFC 정규형 정준 결합 (Normalization Form Canonical Composition) -- windows, linux
- NFD 정규형 정준 분해 (Normalization Form Canonical Decomposition) -- mac
- NFKC 정규형 호환성 결합 (Normalization Form Compatibility Composition)
- NFKD 정규형 호환성 분해 (Normalization Form Compatibility Decomposition)

```js
var nfc = '\uAC01';
var nfd = '\u1100\u1161\u11A8';

(nfc.normalize('NFC') === '각') == true
(nfc.normalize('NFD') === nfd) == true

(nfc.normalize('NFD') === '각') == false
(nfc.normalize('NFD') === nfd.normalize('NFC')) == false   
```



## String.prototype.padEnd()
: 문자열에 주어진 문자를 우측 기준으로 주어진 인덱스만큼 채워 새 문자열 반환

```js
var str = '';
(str.padEnd(3, 'abc') === 'abc') == true
(str.padEnd(6, 'abc') === 'abcabc') == true

var str = 'abc';
(str.padEnd(6, '123') === 'abc123') == true
```



## String.prototype.padStart()
: 문자열에 주어진 문자를 좌측 기준으로 주어진 인덱스만큼 채워 새 문자열 반환

```js
var str = '';
(str.padStart(3, 'abc') === 'abc') == true

var str = 'abc';
(str.padStart(6, '123') === '123abc') == true
```



## String.prototype.repeat()
: 문자열에 주어진 횟수만큼 문자열을 반복한 새 문자열 반환  

```js
var str = 'a';
(str.repeat(5) === 'aaaaa') == true
```



## String.prototype.replace()
: 문자열에 주어진 문자를 검색해 일치하는 처음 문자를 교체한 새 문자열 반환    
: 패턴이나 정규식 검색 가능   

```js
var str = 'string';
(str.replace('s', 'S') === 'String') == true

var str = 'string';
var result = '';

result = str.replace(/[a-z]/g , (str) => str.toUpperCase() );
result = str.replace(/[a-z]/g , String.call.bind(str.toUpperCase) );
(result === 'STRING') == true
```



## String.prototype.search()
: 문자열에 주어진 정규식으로 검색해 일치하면 1 반환

```js
var str = 'string'
(str.search(/[^s]/) === 1) == true
```



## String.prototype.slice()
: 문자열에 주어진 인덱스에 해당하는 문자를 추출하여 새 문자열로 반환  

```js
var str = 'string';
(str.slice(3,6) === 'ing') == true
```



## String.prototype.split()
: 지정한 구분자를 이용해 문자열 분리하여 배열로 반환  

```js
var str = 's t r i n g';
var result = str.split(' ');

(result.toString() === 's,t,r,i,n,g') == true
```



## String.prototype.startsWith()
: 문자열에 지정한 문자와 인덱스가 일치하면 참 반환  

```js
var str = 'string';

str.startsWith('s', 0) == true
str.startsWith('st', 0) == true
str.startsWith('i', 3) == true
```



## String.prototype.toLowerCase()
: 문자열을 소문자로 바꾸고 반환

```js
var str = 'ABC';
(str.toLowerCase() === 'abc') == true
```



## String.prototype.toUpperCase()
: 문자열을 대문자로 바꾸고 반환  

```js
var str = 'abc'
(str.toUpperCase() === 'ABC') == true
```



## String.prototype.trim()
: 문자열의 양끝 공백을 제거하여 새 문자열 반환

```js
var str = '   string   ';
(str.trim() === 'string') == true


var str = '   s t r i n g   ';
(str.trim() === 's t r i n g') == true
```



[top](#)
