# JS Transpiler
= source-to-source compiler    
: 최신 버전 문법으로 작성된 코드를 브라우저에서 지원하는 버전의 문법으로 변환하는 도구    
: JSX, CoffeeScript, TypeScript 등으로 작성된 코드를 JS 코드로 변환하는 도구     


**종류**
- [babel](#babel)
- traceur
- termi



## babel
: 초기 ES6 코드를 ES5 코드로 변환하는 컴파일러로 시작해 발전한 도구  
: 폴리필과 플러그인을 통해 여러 기능을 지원하는 범용 트랜스컴파일러   

- [babel-standalone](#babel-standalone)
- [babel-cli](#babel-cli)
- [babel config file](#babel-config-file)



### babel-standalone

```html
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>

<script type="text/babel"> .. </script>
<script type="text/babel" src="*.js"></script>
<script type="text/babel" data-presets="" data-plugins=""></script>
```



### babel-cli
: 7버전 부터 npm scope 패키지로 변경    

- bable 7 : @babel/core
- babel 6 : babel-core


```bash
# 설치
$ npm install @babel/core @babel/cli

# 프리셋 설치
$ npm install @babel/preset-env

# 바벨 설정 파일 생성
## babel.config.js
```



### babel config file
: 바벨 설정 파일

- bable 7 : babel.config.js
- babel 6 : .babelrc


**babel.config.js**

```js
module.exports = {
    plugins : [],
    presets : [],
}
```



#### preset
: 미리 설정한 플러그인 모음  

**preset list**  
https://babeljs.io/docs/en/presets


```js
module.exports = {
    presets : [
        '@babel/preset-env',
        {
            targets: { ie: '지원할 버전 명시' },

            // 폴리필
            useBuiltIns : 'usage | entry | false'
        }
    ],
}
```
