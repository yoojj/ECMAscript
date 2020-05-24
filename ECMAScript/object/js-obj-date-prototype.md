# JS Date.prototype


메소드 | 설명
---|---|---
getDate()            | 날짜를 숫자로 반환
getDay()             | 요일을 숫자로 반환
getFullYear()        | 년을 숫자로 반환
getHours()           | 시간의 시를 숫자로 반환
getMilliseconds()    | 시간의 밀리초를 숫자로 반환
getMinutes()         | 시간의 분을 숫자로 반환
getMonth()           | 월을 숫자로 반환
getSeconds()         | 시간의 초를 숫자로 반환
getTime()            | 유닉스 시간 반환  
getTimezoneOffset()  |
getUTCDate()         | UTC 기반 날짜를 숫자로 반환
getUTCDay()          | UTC 기반 요일을 숫자로 반환
getUTCFullYear()     | UTC 기반 년을 숫자로 반환
getUTCHours()        | UTC 기반 시간의 시를 숫자로 반환
getUTCMilliseconds() | UTC 기반 시간의 밀리초를 숫자로 반환
getUTCMinutes()      | UTC 기반 시간의 분을 숫자로 반환
getUTCMonth()        | UTC 기반 월을 숫자로 반환
getUTCSeconds()      | UTC 기반 시간의 초를 숫자로 반환
setDate()            | 날짜 지정
setFullYear()        | 년도 지정
setHours()           | 시간 지정
setMilliseconds()    | 밀리초 지정
setMinutes()         | 분 지정
setMonth()           | 월 지정
setSeconds()         | 초 지정
setTime()            | 유닉스 시간으로 시간 지정  
setUTCDate()         | UTC 기반 날짜 지정
setUTCFullYear()     | UTC 기반 년도 지정
setUTCHours()        | UTC 기반 시간 지정
setUTCMilliseconds() | UTC 기반 밀리초 지정
setUTCMinutes()      | UTC 기반 분 지정
setUTCMonth()        | UTC 기반 월 지정
setUTCSeconds()      | UTC 기반 초 지정
toDateString()       | 날짜를 문자열로 반환  
toISOString()        | ISO 형식의 날짜와 시간을 문자열로 반환
toJSON()             | 날짜와 시간을 문자열로 반환
toLocaleDateString() | os나 브라우저 타임존에 따른 날짜를 문자열로 반환  
toLocaleString()     | os나 브라우저 타임존에 따른 날짜와 시간을 문자열로 반환  
toLocaleTimeString() | os나 브라우저 타임존에 따른 시간을 문자열로 반환  
toString()           | 날짜와 시간을 문자열로 반환
toTimeString()       | 시간을 문자열로 반환
toUTCString()        | UTC 기반으로 날짜와 시간을 문자열로 반환  
valueOf()            | 시간 객체를 값으로 반환


**toDateString() vs toTimeString() vs toString()**

```js
var date = new Date('2020-12-25');

(date.toDateString() === 'Fri Dec 25 2020') == true
(date.toTimeString() === '09:00:00 GMT+0900 (한국 표준시)') == true
(date.toString() === 'Fri Dec 25 2020 09:00:00 GMT+0900 (한국 표준시)') == true
```


**toISOString() vs toUTCString() vs toString()**

```js
var date = new Date('2020-12-25');

(date.toISOString() === '2020-12-25T00:00:00.000Z') == true
(date.toUTCString() === 'Fri, 25 Dec 2020 00:00:00 GMT') == true
(date.toString() === 'Fri Dec 25 2020 09:00:00 GMT+0900 (한국 표준시)') == true
```


**toISOString() vs toJSON()**

```js
var date = new Date('2020-12-25');

(date.toISOString() === '2020-12-25T00:00:00.000Z') == true
(date.toJSON() === '2020-12-25T00:00:00.000Z') == true

(date.toISOString() === date.toJSON()) == true


// 유효하지 않은 날짜인 경우
var date = new Date('2020-25-25');

// Invalid Date, RangeError
// date.toISOString()
(date.toJSON() === null) == true
```


**toLocaleString() vs toString()**

```js
var date = new Date('2020-12-25');

date.toLocaleString('en') === '12/25/2020, 9:00:00 AM'
date.toLocaleString('ko') === '2020. 12. 25. 오전 9:00:00'

date.toLocaleString() === '2020. 12. 25. 오전 9:00:00'
date.toString() === 'Fri Dec 25 2020 09:00:00 GMT+0900 (한국 표준시)'
```


**getTime() vs valueOf()**

```js
var date = new Date('2020-12-25');

(date.getTime() === date.valueOf()) == true
```


[top](#)
