# nuxt-express

- [vue-cli](#vue-cli)
- [npx](#npx)



## vue-cli

``` bash
$ vue init nuxt-community/express-template nuxt-express
$ cd nuxt-express
$ npm install
$ npm start


# 구조
nuxt-express/
├── api/              # express 설정 및 라우터 관련 파일  
├── assets/            
├── components/      
├── ...        
```



## npx

``` bash
# 1. 프로젝트 생성
$ npx create-nuxt-app nuxt-express
$ cd nuxt-express

$ npm install
$ npm install express



# 2. 폴더 생성 후 express 설정 추가
nuxt-express/
├── api/              # express 설정 및 라우터 관련 파일  
├── assets/            
├── components/      
├── ...

## api/index.js
const express = require('express');
const app = express();
...


# 3. nuxt 설정 파일에 추가      
serverMiddleware : ['~/api/index.js'],


# 4. package.json 스크립트 수정
"start": "nuxt build && nuxt start",


# 5. 실행
$ npm start
## http://localhost:3000/api/user
```
