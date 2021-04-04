# JS Build    


- [Build](#build)
    - [snowpack](#snowpack)
- [Task Runner](#task-runner)
    - grunt
    - [gulp](#gulp)
- [Bundler](#bundler)
    - [browserify](#browserify)
    - [webpack](#webpack)
    - [rollup](#rollup)
    - parcel
    - esbuild
    - fuse-box



## Build
: 소스 코드를 플랫폼에서 실행 가능한 형태로 컴파일하기 위한 도구    
: 컴파일, 패키징, 테스트, 배포 등 기능 지원



### snowpack
: 기존 빌드 시스템 대안으로 만들어진 빌드 툴   
: 플러그인을 통해 번들 기능 지원   
: ES Module 기반으로 작성된 소스 코드를 개별 파일로 빌드하고 이를 플랫폼에 제공   
&nbsp; (최신 브라우저가 ES Module을 지원하므로)    
: 빌드된 파일은 캐싱되며 변경된 파일만 빌드됨   


```bash
$ npm install snowpack -g
$ npm install snowpack --save-dev

# package.json에 스크립트 추가
"scripts": {
  "start": "snowpack dev",
  "build": "snowpack build"
}

# snowpack 구성 파일 생성
$ snowpack init
```


플러그인 | 설명
---|---
plugin-dotenv       | env 파일의 환경 변수 로드
plugin-run-script   | snowpack CLI
plugin-build-script | CLI을 통해 파일 빌드

https://www.snowpack.dev/plugins


**snowpack.config**
```json
{
    "mount": {},
    "plugins": [],
    "routes": [],
    "optimize": []
}
```



## Task Runner
: 전처리기로 작성된 CSS 컴파일, 코드 압축-최소화, 코드 난독화, 단위 테스트, 빌드, 배포 등 반복 작업 자동화 도구   



### gulp     

```bash
$ npm install gulp-cli -g

# 1. 프로젝트 생성
$ mkdir example
$ cd exmaple
$ npm init -y
$ npm install gulp

# 2. 필요한 gulp 플러그인 설치
$ npm install gulp-uglify

# 3. gulpfile.js 파일 생성 후 태스크 정의
## gulpfile.js   

# 4. 태스크 실행
$ gulp [task-name]
```


**gulpfile.js**   
```js
var gulp = require('gulp');
var uglify = require('gulp-uglify');


// 걸프 실행시 기본으로 실행될 태스크  
gulp.task('default', function(){
    // 걸프 작업 작성
});

gulp.task('js', function(){
    return gulp.src('./**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
});

// 여러 태스트 실행
gulp.task('default', ['task-name', 'task-name', 'task-name']);
```



## Bundler  
: 모듈 로드 및 종속성 관리 도구     
: 모듈 포맷 기반으로 작성된 모듈을 브라우저에서 사용하기 적합하도록 단일 파일로 변환    
: 플러그인을 통해 태스크 러너 역할 수행 가능      



### browserify
: 모듈 번들러 + 태스크 러너      
: CommonJS 포맷으로 작성된 모듈을 브라우저에서 사용할 경우 사용          
: 노드에서 사용하는 기능을 브라우저에서 사용할 수 있도록 라이브러리 제공   
&nbsp; (https://github.com/browserify/browserify-handbook#builtins)


```bash
# 설치
$ npm install browserify -g

# 번들  
$ browserify [파일.js] --outfile [bundle.js]
$ browserify [파일.js] -o [bundle.js]

# index.html
<html>
    <script src="bundle.js"></script>
</html>
```



### webpack
: 모듈 번들러 + 모듈 러너 + 태스크 러너           
: CommonJS와 AMD 포맷을 지원하며 webpack4 부터 트리 쉐이킹 및 ES Module 포맷 지원   
: 플러그인을 통해 코드 최소화, 국체화, HMR 등 작업 수행   


- Tree Shaking (https://webpack.js.org/guides/tree-shaking/)
- Code Spliting (https://webpack.js.org/guides/code-splitting/)
- Lazy loading (https://webpack.js.org/guides/lazy-loading/)
- Dev Server (https://webpack.js.org/configuration/dev-server/)


```bash
$ npm install webpack webpack-cli webpack-dev-server -g

# 번들링
$ webpack [엔트리파일.js] [bundle.js]  


# package.json에 스크립트 추가
{
    "scripts": {
        # 개발용 설정 파일이 별도로 있는 경우 config 옵션 사용
        "bundle": "webpack --watch --config webpack.dev.config.js",
        "production": "webpack", # webpack.config.js 파일 실행

        # webpack-dev-server
        "bundle": "webpack-dev-server --mode=development",
    }
}
```


**webpack.config.js**   
- [webpack.loader](#webpackloader)
- [webpack.plugin](#webpackplugin)

```js
var webpack = require('webpack');

module.export = {
    mode: 'development | production | none',
    // development
    // : 개발용 모드로 소스맵 제공  

    // produntion
    // : 배포용 모드로 코드 압축화와 난독화 및 트리 쉐이킹 처리를 함


    // webpack-dev-server
    devServer: {
        inline: true,        
        hot: true,
        ...
    },


    // https://webpack.js.org/configuration/devtool/#devtool
    devtool: 'source-map',


    // 의존 관계를 파악하기 위한 진입점
    // 엔트리 파일을 기준으로 의존되는 모듈들을 단일 파일로 번들
    entry: 'index.js',


    // 번들 파일의 이름과 저장될 위치 지정
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
        publicPath: '/',
    },


    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.jsx'],
    },


    // https://webpack.js.org/concepts/loaders/
    // 웹팩 로더를 통해 다른 유형의 파일 처리
    module: {
        rules: [],
    },


    // https://webpack.js.org/concepts/plugins/
    // 난독화, 최적화 등 추가 기능을 위한 설정  
    plugins: [
        // 빌드한 결과물을 브라우저에서 새로고침없이 실시간 반영
        new webpack.HotModuleReplacementPlugin(),
    ],


    optimization: {
        // https://webpack.js.org/plugins/split-chunks-plugin/
        splitChunks: {},
    },
}
```



#### webpack.loader
: 웹팩은 js와 json 파일만 인식하나 웹팩 로더를 통해 다른 유형의 파일을 js로 변환해 번들 대상이 됨    

**loader list**  
https://webpack.js.org/loaders/


```bash
# 1. 로더 설치
$ npm install babel-loader style-loader css-loader file-loader
$ npm install mini-css-extract-plugin


# 2. 웹팩 환경 설정에 로더 추가
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

module: {
    rules: [
        {
            exclude: /node_modules/,
            test: /\.(js|jsx)$/,
            use: ['babel-loader', 'eslint-loader',]
        },
        {
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                'style-loader',
                'css-loader'
            ]
        },
        {
            test: /\.(gif|png|jpe?g|svg)$/i,
            test: /\.(woff|woff2|eot|ttf|otf|)$/,
            use: 'file-loader'
        },
    ]
},

plugins: [
    new MiniCssExtractPlugin(),
],
```



#### webpack.plugin
: 번들된 결과물에 난독화나 최적화 등 추가 기능을 위한 도구   
: 내장된 플러그인을 사용하거나 사용자 정의 플러그인 사용   

**plugin list**  
https://webpack.js.org/plugins/


```bash
# 1. 플러그인 설치
$ npm install clean-webpack-plugin html-webpack-plugin


# 2. 웹팩 환경 설정에 플러그인 추가
var CleanWebpackPlugin = require('clean-webpack-plugin');

plugins: [
    new CleanWebpackPlugin(['dist'])
]
```



### rollup
: webpack과 비슷한 모듈 번들러      
: webpack 보다 빠르고 효율적인 코드 생성 목표       
: 사용하지 않는 코드를 제거하는 기능 지원 (트리 쉐이킹)    


플러그인 | 설명
---|---
rollup-plugin-node-resolve |
rollup-plugin-babel      |
rollup-plugin-commonjs   |
rollup-plugin-html-entry |
rollup-plugin-postcss    |
rollup-plugin-uglify     |


**출력 형식**  
- cjs
- amd
- umd
- es
- iife


```bash
$ npm install rollup -g

## IIFE 패턴으로 번들  
$ rollup [파일.js] --o [bundle.js] --f iife

## CJS 포맷으로 변환
$ rollup [파일.js] --o [bundle.js] --f cjs

# rollup 설정 파일 실행
$ rollup -c
```


**rollup.config.js**   
```js
export default {
    input: '',
    output: {
        file: '',
        format: '',
        exports: '',
    },
    plugins: [],
};
```



[top](#)
