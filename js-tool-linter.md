# JS Linter
: 코드의 문법, 코딩 컨벤션 등을 검사하는 도구  


**종류**
- [eslint](#eslint)
- jslint
- jshint -- jslint 확장


**style guide**    
- https://github.com/airbnb/javascript  
- https://github.com/google/eslint-config-google



## eslint


```bash
$ npm install eslint eslint-loader --save-dev

# 린트 환경 설정
$ ./node_modules/.bin/eslint --init

# 실행
$ ./node_modules/.bin/eslint [파일 | 디렉토리]

# 스크립트 추가
{
  "scripts" : {
    "lint" : "eslint js"
  }
}
```


**exlint rule**   
https://eslint.org/docs/rules/


**.eslintrc.js**   
```js
module.exports = {

    // https://eslint.org/docs/user-guide/configuring#specifying-environments
    'env' : {
        'browser' : true,
        'es6' : true,
        'node' : true,
    },

    'extends' : 'eslint:recommended',

    'plugins' : [ ],

    'rules' : {
        'indent' : [ 'error', 4 ],
        'quotes' : [ 'error', 'single' ],
        'semi' : [ 'error', 'always' ]
    }

}
```


**.eslintrc.json**
```json
{
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "indent": [ "error", 4 ],
        "quotes": [ "error", "single" ],
        "semi": [ "error", "always" ]
    }
}
```


**.eslintrc.yml**
```yaml
env:
  browser: true
  es6: true
  node: true

extends: 'eslint:recommended'

parserOptions:
  sourceType: module

rules:
  indent:
    - error
    - 4
  quotes:
    - error
    - single
  semi:
    - error
    - always
```



[top](#)
