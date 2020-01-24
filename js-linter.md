# JS Linter
: 코드의 문법, 코딩 컨벤션 등을 검사하는 도구  


**종류**
- [eslint](#eslint)
- jslint
- jshint



## eslint

```bash
# 프로젝트에 린트 설치
$ npm install eslint

# 린트 구성 설정
$ ./node_modules/.bin/eslint --init

# 실행
$ ./node_modules/.bin/eslint [파일 | 디렉토리]
```


**.eslintrc.js**   
: 린트 설정 파일   

```js
module.exports = {
    rules: {
    }
}
```
