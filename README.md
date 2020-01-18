# ECMA-262
: 벤더사 마다 다른 자바스크립트 언어를 표준화한 사양          
: 브라우저에 종속되지 않음 (브라우저, 서버, 네이티브 앱, 클라우드 서비스, IoT 등 사용)


- [ECMAScript](#ecmascript)
    - [Language](./ECMAScript/)
    - [Module](./js-module.md)
    - [Package Manager](./js-package-manager.md)
    - [Build (bundler)](./js-build.md)
    - [Lint](./js-lint.md)
    - [Transpiler](./js-transpiler.md)
    - [Polyfill](./js-polyfill.md)
- [CSJS](#csjs)
- [SSJS](#ssjs)
    - WSH
    - jaxer (https://github.com/aptana/Jaxer)
    - [node](./node/)
        - <s>io</s>
        - node-red (https://nodered.org)
        - nodeBots (http://nodebots.io)
    - deno (https://deno.land/)
- [AltJS](#altjs)
    - [TypeScript](./TypeScript/)
- [Framework](#framework)
- [Library](./JS-lib/)



벤더사 마다 다른 자바스크립트 언어로 인한 호환 문제로 넷스케이프에서 ECMA(기관)에 자바스크립트 표준을 제안하여 ECMA(기관)의 TC39라는 위원회에서 문법 표준화, 크로스 플랫폼, 벤더사 중립을 목적으로 표준 결정

- [ECMA 262](https://www.ecma-international.org/ecma-262/) -- Spec (코어)    
- [ECMA 402](https://ecma-international.org/publications/standards/Ecma-402.htm) -- Intl API
- [ECMA 404](https://ecma-international.org/publications/standards/Ecma-404.htm) -- Json
- [ECMA 408](https://ecma-international.org/publications/standards/Ecma-408.htm) -- Dart

ECMAScript 버전 (https://en.wikipedia.org/wiki/ECMAScript#Versions)  
ECMA 262 개정 확인 (http://www.ecma-international.org/publications/standards/Ecma-262-arch.htm)  
ECMA 262 명세 준수 테스트 (https://github.com/tc39/test262)

**Ecma-402 (EIA)**  
: 문자열, 숫자 형식, 날짜, 시간 등 국제화와 관련된 표준 API  



## ECMAScript
ECMAScript = JavaScript (Netscape) + Jscript (MS) + ...   
: ECMA-262 규격을 따르는 자바스크립트 언어 공식 명칭     


>넷스케이프 : 모카스크립트 → 라이브스크립트 → 자바스크립트   
마이크로소프트 : VB스크립트, J스크립트  

**모카스크립트**  
: 사용자와 동적 상호 작용, DOM 객체 제어 및 자바 애플릿 대체하기 위해 만든 최초 언어    


**ES.Next**  
: ES9 버전 이후 ES.Next 로 통칭  

> ES1 ~ ES3 (ES4 폐기) > ES5 > ES6(ES2015) > ES7(ES2016) ~ ES9(ES2018) > ES.Next   

ES6 -- ECMAScript 6th Edition   
ES2015 -- 2015년에 표준화 된 ES6


**ECMA-262 구현**   
- ActionScript
- JavaScript
- JScript
- ...



### CSJS
Client Side JavaScript    
: 클라이언트 측에서 실행되는 자바스크립트         
: html, css 등 클라이언트 측 컴포넌트 조작   
: Chrome, Firefox, Safari, Edge 같은 웹 브라우저는 자동 업데이트되는 에버그린 브라우저여서 ES 스펙 호환성이 높음  
: IE 경우 에버그린 브라우저가 아니기 때문에 트랜스파일러를 통해 ES5 코드로 변환 필요  

**호환성 확인**  
https://caniuse.com/  
https://kangax.github.io/compat-table/es6/



### SSJS
Server Side JavaScript  
: 서버 측에서 실행되는 자바스크립트      
: 클라이언트와 서버의 간격을 없애기 위해 만들어졌으며 파일시스템, 데이터베이스 등에 접근 가능    
: [Rhino](./ECMAScript-Engine/Rhino.md), [V8](./ECMAScript-Engine/V8.md), [SpiderMonkey](../ECMAScript-Engine/SpiderMonkey.md) 같은 독립적인 자바스크립트 엔진으로 해석    


**Rhino**  
: 최초 서버사이드 자바스크립트 엔진  


**구현**
- node
- MongoDB
- CouchDB
- ...

**SSJS list**  
https://en.wikipedia.org/wiki/List_of_server-side_JavaScript_implementations



### AltJS  
Alternative JS  (http://smurfpandey.github.io/altjs/)   
: 자바스크립트 단점을 보완하거나 해결한 도구 및 언어             
: 자바스크립트 코드로 컴파일해 브라우저에서 동작  

- [Dart](#dart)
- [PureScript](#purescript)
- [CoffeeScript](#coffeescript)
- [ClojureScript](#clojurescript)
- ...



#### Dart (구글)
: 자바스크립트 문법을 개선한 언어   
: 다트 가상머신 (SDK)  
: 동적 + 정적 타입 언어  
: 클래스 기반 객체지향 언어   


<s>AtScript (구글)</s>  
: Dart 일부 기능 포함하고 TypeScript를 확장한 언어  



#### PureScript
: ML, 하스켈에 영향받은 함수형 언어  



#### ClojureScript
: 리스프, 클로저에 영향받은 함수형 언어    
: 클로저는 JVM에서 실행되는 언어며 클로저스크립트는 JS VM에서 실행되는 언어    



#### JerryScript (삼성)
: IoT 디바이스를 위한 경량 엔진  
https://github.com/jerryscript-project/jerryscript



### Framework

**Web**
- [Backbone](./Backbone/) --템플릿엔진 x
- Angular --템플릿엔진 o, AOT compiler
- [Vue](./Vue/)
- [Aurelia](./Aurelia/)
- [Svelte](./Svelte/)
- Cycle
- Ember
- Ext


**Node**
- [Express](./Express/)
- [Koa2](./Koa/)
- Socket
- Nest
- Hapi
- Sails
- Meteor
- Derby
- LoopBack


**Cross-platform**
- [Electron](./Electron/)
- Ionic
- Flutter
- OpenUI5



### www

**pastebin & editor**   
- http://jsbin.com/
- https://jsfiddle.net/
- https://codepen.io/
- https://js.do/


**validator**  
- https://jshint.com/
- https://codebeautify.org/jsvalidate



[top](#)
