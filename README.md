# ECMA-262
: 벤더사 마다 다른 자바스크립트 언어를 표준화한 사양          
: 브라우저에 종속되지 않음 (브라우저, 서버, 네이티브 앱, 클라우드 서비스, IoT)


- [ECMAScript](#ecmascript)
    - [JS Language](./ECMAScript/)
    - [JS Module](./js-module.md)
- [CSJS](#csjs)
- [SSJS](#ssjs)
    - [node](./node/)
- [AltJS](#altjs)
- [Compile to JavaScript](#compile-to-javascript)
    - [TypeScript](./TypeScript/)
- JS Tool     
    - [JS Linter](./js-linter.md)
    - [JS Polyfill](./js-polyfill.md)
    - [JS Transpiler](./js-transpiler.md)
    - [JS Build](./js-build.md)
    - [JS Package Manager](./js-package-manager.md)
- [JS Framework](./JS-Framework/)
- [JS Library](./JS-lib/)
- [JS Pattern](./JS-pattern/)



벤더사 마다 다른 자바스크립트 언어로 인한 호환 문제로 넷스케이프에서 ECMA(기관)에 자바스크립트 표준을 제안하여 ECMA(기관)의 TC39라는 위원회에서 문법 표준화, 크로스 플랫폼, 벤더사 중립을 목적으로 표준 결정

- [ECMA 262](https://www.ecma-international.org/ecma-262/) -- Spec (코어)    
- [ECMA 402](https://ecma-international.org/publications/standards/Ecma-402.htm) -- Intl API
- [ECMA 404](https://ecma-international.org/publications/standards/Ecma-404.htm) -- Json
- [ECMA 408](https://ecma-international.org/publications/standards/Ecma-408.htm) -- Dart

**ECMA-262 구현**   
- ActionScript
- JavaScript
- JScript
- ECMAScript
- ...

ECMA 262 개정 확인 (http://www.ecma-international.org/publications/standards/Ecma-262-arch.htm)  
ECMA 262 명세 준수 테스트 (https://github.com/tc39/test262)


**Ecma-402 (EIA)**  
: 문자열, 숫자 형식, 날짜, 시간 등 국제화와 관련된 API  



## ECMAScript
ECMAScript = JavaScript (Netscape) + Jscript (MS) + ...   
: ECMA-262 규격을 따르는 자바스크립트 언어 공식 명칭     

>넷스케이프 : 모카스크립트 → 라이브스크립트 → 자바스크립트   
마이크로소프트 : VB스크립트, J스크립트  

**모카스크립트**  
: 사용자와 동적 상호 작용, DOM 객체 제어 및 자바 애플릿을 대체하기 위해 만든 최초 자바스크립트    



## ECMAScript Version

> ES1 ~ ES3 (ES4 폐기) > ES5 > ES6(ES2015) > ES7(ES2016) ~ ES10(ES2019)

ES6 : ECMAScript 6th Edition   
ES2015 : 2015년에 표준화 된 ES6


**ES.Next**  
: 현재 버전의 다음 버전-제안 단계-비표준 기능 지칭



### CSJS
Client Side JavaScript    
: 클라이언트 측에서 실행되는 자바스크립트       
: 브라우저, html, css 등 클라이언트 측 컴포넌트 조작   
: Chrome, Firefox, Safari, Edge 같은 브라우저는 자동으로 업데이트되는 에버그린 브라우저여서 ES 스펙 호환성이 높음  
: IE 경우 에버그린 브라우저가 아니기 때문에 최신 ES 문법 사용시 트랜스파일러를 통해 지원되는 문법으로 코드 변환 필요  

**호환성 확인**  
https://caniuse.com/  
https://kangax.github.io/compat-table/es6/



### SSJS
Server Side JavaScript  
: 서버 측에서 실행되는 자바스크립트      
: 클라이언트와 서버의 간격을 없애기 위해 만들어짐   
: Rhino, SpiderMonkey, V8 같은 독립적인 자바스크립트 엔진으로 실행  

**Rhino**  
: 최초 서버 사이드 환경에서 실행하기 위해 만들어진 자바스크립트 엔진   
: JS로 작성된 코드를 java 객체에 전달    


**SSJS solution**  
- [node](./node/)
    - <s>io</s>
- deno (https://deno.land/)
- MongoDB
- CouchDB
- WakandaDB
- ...

**SSJS solution list**  
https://en.wikipedia.org/wiki/List_of_server-side_JavaScript_implementations



### AltJS  
Alternative JS   
: JS 단점을 보완 및 해결한 도구나 언어             

**altjs list**  
http://smurfpandey.github.io/altjs/



### Compile to JavaScript

**언어**   
- [TypeScript](./TypeScript/)
- [PureScript](#purescript)
- [Dart](#dart)
- Reason
- Scala
- Kotlin
- Clojure
- ...



#### PureScript
: ML, Haskell에 영향받은 함수형 언어  

```bash
# 컴파일러와 빌드 툴 설치   
$ npm install purescript pulp -g

# PureScript는 bower 레지스트리를 통해 패키지 사용  
$ npm install bower -g

# 프로젝트 생성
$ mkdir example
$ cd example
$ pulp init

# 명령어
$ pulp build
$ pulp test
$ pulp repl
```

https://github.com/purescript/documentation



#### Dart (구글)     
: dart2js 컴파일러를 통해 dart 코드를 JS 코드로 컴파일해 브라우저에서 동작    

- Dart Native : Dart VM + JIT 컴파일러 + AOT 컴파일러  
- Dart Web : dart2js 컴파일러



[top](#)
