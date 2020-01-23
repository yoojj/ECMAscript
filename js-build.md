# JS Build

- [task runner](#task-runner)
    - grunt
    - [gulp](#gulp)
- [module bundler](#module-bundler)
    - [browserify](#browserify)
    - [webpack](#webpack)
    - [rollup](#rollup)
    - parcel



## task runner
: 전처리기로 작성된 css 컴파일, 코드 압축-최소화, 코드 난독화, 단위 테스트, 배포 등 반복 작업 자동화 도구   

**종류**   
- grunt
- [gulp](#gulp)



### gulp     

```bash
# 설치
$ npm install gulp-cli -g

# 1. 프로젝트 생성
$ mkdir example
$ cd exmaple
$ npm init -y
$ npm install gulp

# 2. 필요한 gulp 플러그인 설치
$ npm install gulp-uglify

# 3. gulpfile.js 파일 생성 후 태스크 정의
## 구조
example/
├── node_modules/
├── 개발/            
├── 배포/
├── gulpfile.js   
└── package.json     

# 4. 태스크 실행
$ gulp [task-name]
```


**gulpfile.js**   
: 빌드 과정 기술 파일

```js
const gulp = require('gulp');
const uglify = require('gulp-uglify');


// 걸프 실행시 기본으로 실행될 태스크  
gulp.task('default', function(){
    // 걸프 작업 작성
    console.log('gulp test');
});

gulp.task('js', function(){
    return gulp.src('./**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
});

// 여러 태스트 실행
gulp.task('default', ['task-name', 'task-name', 'task-name']);
```



## module bundler  
: 모듈 로드 및 종속성 관리 도구     
: 모듈 포맷 기반으로 작성된 모듈을 브라우저에서 사용하기 적합하도록 단일 파일로 변환      
: 도구에 따라 플러그인을 설치하여 태스크 러너 역할 수행   

**종류**  
- [browserify](#browserify)
- [webpack](#webpack)
- [rollup](#rollup)
- parcel



### browserify
: 모듈 번들러 + 태스크 러너      
: CommonJS 기반으로 작성된 모듈을 브라우저에서 사용할 경우 사용    
: node에서 사용하는 기능을 브라우저에서 사용 가능 하도록 [라이브러리](https://github.com/browserify/browserify-handbook#builtins) 제공

**플러그인**     
- watchify
- beefy
- exorcist


```bash
# 설치
$ npm install browserify -g

# 번들  
$ browserify [파일.js] --outfile [bundle.js]
$ browserify [파일.js] -o [bundle.js]

## index.html
<html>
    <script src="bundle.js"></script>
</html>
```



### webpack
: 모듈 번들러 + 모듈 러너 + 태스크 러너         
: CommonJS와 AMD 포맷을 지원하며 webpack4부터 트리 쉐이킹 및 ES Module 포맷 지원   
: 플러그인을 설치하여 코드 축소화, 국체화, HMR 등 작업 수행   

**Hot Module Replacement**   
: 웹팩으로 빌드한 결과물을 브라우저에서 새로고침없이 실시간 반영   


**기능**  
- Tree Shaking (https://webpack.js.org/guides/tree-shaking/)
- Code Spliting (https://webpack.js.org/guides/code-splitting/)
- Lazy loading (https://webpack.js.org/guides/lazy-loading/)
- Dev Server (https://webpack.js.org/configuration/dev-server/)


```bash
# 설치
$ npm install webpack webpack-cli -g

# 번들
$ webpack [엔트리파일.js] [bundle.js]  

# 웹팩 설정 파일 실행
$ webpack

## Loader 사용시 필요한 모듈 설치  
$ npm install style-loader css-loader file-loader
```


**webpack.config.js**  
: 웹팩 설정 파일   

```js
module.export = {
    // 개발용과 배포용 모드  
    mode: 'development | production',

    // 엔트리 파일을 기준으로 의존되는 모듈을 단일 파일로 번들    
    entry : '엔트리파일.js',
    context: __dirname + '/app',
    output : {
        path : __dirname + '/dist',
        filename : 'bundle.js',
    },

    // 로더를 통해 이미지, 웹폰트, css 등 관리   
    module : {
        rules : [],
    },

    plugins : [],
}
```



### rollup
: webpack과 비슷한 모듈 번들러      
: webpack 보다 빠르고 효율적인 코드 생성 목표       
: 사용하지 않는 코드를 제거하는 기능 지원 (트리 쉐이킹)    

**플러그인**  
- rollup-plugin-uglify
- rollup-plugin-commonjs
- ...


**출력 형식**  
- cjs
- amd
- umd
- es
- iife


```bash
# 설치
$ npm install rollup -g

# IIFE 패턴으로 번들  
$ rollup [파일.js] --o [bundle.js] --f iife

# CJS 포맷으로 변환
$ rollup [파일.js] --o [bundle.js] --f cjs

# rollup 설정 파일 실행
$ rollup -c
```


**rollup.config.js**   
: rollup 설정 파일  

```js
export default {
    input: '',
    output: {
        file: '',
        format: ''
    },
    plugins : [],
};
```


[top](#)
