# JS Math

https://tc39.es/ecma262/#sec-math-object


프로퍼티 | 설명
---|---
E       | 오일러 상수
LN10    | 10의 자연 로그
LN2     | 2의 자연 로그
LOG10E  | 밑이 10인 로그
LOG2E   | 밑이 2인 로그
PI      | 원주율
SQRT1_2 | 1/2 제곱근
SQRT2   | 2의 제곱근


ex.
```js
var e = Math.E;
(e === 2.7182818284590452354) == true

var pi = Math.PI;
(pi === 3.141592653589793) == true
```



메소드 | 설명
---|---
abs()    | 절대 값 반환
acos()   | 아크 코사인 구현의 근사값 반환
acosh()  |
asin()   |
asinh()  |
atan()   |
atanh()  |
atan2()  |
cbrt()   | 세제곱근 반환
ceil()   | 전달된 수를 큰 값(오른쪽)으로 반올림한 정수 반환
clz32()  |
cos()    |
cosh()   |
exp()    | 지수 함수
expm1()  |
floor()  | 전달된 수를 작은 값(왼쪽)으로 반올림한 정수 반환
fround() | 전달된 수를 single precision 포맷으로 표현 가능한 수 반환
hypot()  |
imul()   | 32비트 곱셈 결과 반환  
log()    | 로그 함수
log1p()  |
log10()  |
log2()   |
max()    | 전달된 수에서 가장 큰 수 반환
min()    | 전달된 수에서 가장 작은 수 반환
pow()    |
random() | 0 ~ 1 범위에서 난수를 생성하여 반환
round()  | 전달된 수를 가장 가까운 정수로 반올림하여 반환  
sign()   |
sin()    | 전달된 수의 사인 값 반환  
sinh()   |
sqrt()   | 전달된 수의 제곱근 반환  
tan()    | 전달된 수의 탄젠트 값 반환  
tanh()   |
trunc()  |


ex.
```js
(Math.ceil(0.1) === 1) == true
(Math.ceil(9.1) === 10) == true

(Math.ceil(-0.9) === 0) == true
(Math.ceil(-9.9) === -9) == true


(Math.floor(0.9) === 0) == true
(Math.floor(9.9) === 9) == true

(Math.ceil(-0.9) === -1) == true
(Math.ceil(-9.9) === -10) == true


(Math.imul(2, 3) === 6) == true
(Math.imul(1.1, 1.1) === 1) == true


(Math.round(0.4) === 0) == true
(Math.round(0.5) === 1) == true
```



[top](#)
