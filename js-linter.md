# JS Linter
: 코드의 문법, 코딩 컨벤션 등을 검사하는 도구  


**종류**
- [eslint](#eslint)
- jslint
- jshint


**style guide**    
- https://github.com/airbnb/javascript  
- https://github.com/google/eslint-config-google



## eslint

```bash
# 프로젝트에 린트 설치
## 필요한 플러그인 설치
$ npm install eslint



# 린트 환경 설정
$ ./node_modules/.bin/eslint --init

# 실행
$ ./node_modules/.bin/eslint [파일 | 디렉토리]
```


**.eslintrc.js**   
: 린트 설정 파일   

```js
module.exports = {

    "env" : {
        "browser" : true,
        "commonjs" : true,
        "node" : true,
    },

    "extends" : "",

    "plugins" : [ "" ],

    "rules" : {
        "indent" : [ "error", 4 ],
        "quotes" : [ "error", "single" ],
        "semi" : [ "error", "always" ]
    }

}
```


**AST**  
Abstract Syntax Tree    
: 코드를 트리 구조로 표현  
: eslint 규칙에 특정 코드에 대한 규칙을 설정하기 위해서 코드의 AST 필요  

https://astexplorer.net/



[top](#)
