# JS Transpiler
= transcompiler, source-to-source compiler

```
      파싱       변환    
code  -->  AST  --> code
```


**Convert JS to JS**  
: 최신 버전 문법으로 작성된 코드를 브라우저에서 지원하는 버전의 문법으로 변환하는 도구    

- [babel](#babel)
- traceur
- termi


**Compile to JavaScript**  
: 다른 언어로 작성된 코드를 컴파일러를 통해 JS 코드로 변환

- gopherjs -- go
- JSweet -- java
- ReasonML
- Scala.js
- ...



## babel
: 초기 ES6 코드를 ES5 코드로 변환하는 컴파일러로 시작해 발전한 도구  
: 폴리필과 플러그인을 통해 다양한 기능을 지원하는 범용 트랜스컴파일러   


**babel-standalone**

```html
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>

<script type="text/babel"></script>
<script type="text/babel" src="*.js"></script>
<script type="text/babel" data-presets="" data-plugins=""></script>
```


**babel-cli**   
: 7버전 부터 npm scope 패키지로 변경    

- bable 7 : @babel/core
- babel 6 : babel-core


```bash
$ npm install @babel/core
$ npm install @babel/cli @babel/preset-env --save-dev
```


**바벨 설정 파일**  

- bable 7 : babel.config.js
- babel 6 : .babelrc


**babel.config.js**
```js
module.exports = {
    plugins : [],
    presets : [],
}
```

**.babelrc**
```js
{
    'presets': [
        '@babel/preset-env'
    ],
}
```



### babel preset
: 미리 설정한 플러그인 모음  

**preset list**  
https://babeljs.io/docs/en/presets


```js
module.exports = {
    presets : [
        '@babel/preset-env',
        {
            targets: { ie: '지원할 버전 명시' },
            useBuiltIns : 'usage | entry | false'
        }
    ],
}
```



[top](#)
