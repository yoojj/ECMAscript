# Express
: 루비 시나트라 프레임워크 영향을 받아 만들어진 웹 프레임워크      

- [express directory structure](#express-directory-structure)
- [express middleware](#express-middleware)
- [express API](./express-api.md)


```bash
# 설치
$ sudo npm install express -g
$ sudo npm install express-generator -g

# 옵션 확인
$ express -h
$ express --help


# 프로젝트 생성
$ express example
$ cd example

## 템플릿 엔진 변경
$ express --ejs
$ express --hbs
$ express --pug
$ express --view [템플릿엔진]

## 템플릿 엔진 미사용
$ express --no-view


# 실행
$ npm install
$ npm start
```



## express directory structure

```bash
프로젝트/
├── bin/              # 서버 구동을 위한 설정 파일
├── public/           # 정적 파일     
├── routes/           # 라우팅 관련 파일
├── view/             # 템플릿 엔진 파일
├── app.js            # 환경 설정
└── package.json
```



## express middleware

- Application-level middleware
- Router-level middleware
- Error-handling middleware
- Built-in middleware
- Third-party middleware

https://expressjs.com/en/resources/middleware.html
https://expressjs.com/en/guide/using-middleware.html#middleware.application


모듈 | 설명
---|---
express-session | 클라이언트 세션 저장
morgan          | 클라이언트 HTTP 요청 정보 로깅
body-parser     | HTTP POST body 데이터 파싱  
cookie-parser   | 클라이언트 쿠키 정보에 접근해 json 형태로 파싱  


[top](#)
