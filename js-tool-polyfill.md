# JS Polyfill
= shim, fallback   
: 하위 버전 브라우저에서 지원하지 않는 최신 기능을 구현하게 해주는 플러그인         


- js
    - [core-js](#core-js)
- html
    - [html5shiv](#html5shiv)
    - [webcomponent](#webcomponent)
- css
    - [prefixfree](#prefixfree)


**Modernizr**  
https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills



## core-js
: ECMAScript를 지원하는 폴리필

https://github.com/zloirock/core-js

```bash
$ npm install core-js@3

# .babelrc
'presets': [
    ['@babel/preset-env', {
        useBuiltIns: '',
        corejs: 3,
    }],
    ['@babel/transform-runtime', {
        corejs: 3,
    }],
],
```


## html5shiv
: IE8 이하에서 지원하지 않는 html5 태그를 사용하기 위한 폴리필

```html
<!--[if lt IE 9]>
	<script src="html5shiv.min.js"></script>
<![endif]-->
```



## webcomponent
: 웹 컴포넌트 사용을 위한 폴리필  

```bash
$ npm install @webcomponents/webcomponentsjs
```

```html
<script src="node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js"></script>
<script type="module" src="custom-component.js"></script>

<custom-component></custom-component>
```



## prefixfree
: 브라우저 별 적용하는 css 접두사를 생략하게 해주는 플러그인  

```html
<link rel="stylesheet" href="*.css">
<script src="prefixfree.min.js"> </script>
```



[top](#)
