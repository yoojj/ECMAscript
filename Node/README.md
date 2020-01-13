# Node
: [V8 엔진](../ECMAScript-Engine/V8.md) 기반 서버 측 자바스크립트 실행 환경          
: [CommonJS](../JS-Module.md#commonjs) + [ES Module](../JS-Module.md#es-module) 명세 구현     
: 단일 쓰레드 + 이벤트 루프 + 비동기 방식 + 논블로킹 특징   


- [node version manager](./node-version-manager.md)
- [node modules](#node-modules)
    - [내장 모듈 예](./node-built-in-modules/)
    - [외부 모듈 예](./node-external-modules/)
- [node api](./node-api/)



```bash
# 설치 및 확인
$ sudo yum install nodejs
$ node -v

# REPL
$ node
> .exit
```



## Node Module

**분류**   
- [내장 모듈](#built-in-modules)
- [외부 모듈](#external-modules)
- [로컬 모듈](#local-module)



## Built-in Modules
= 내장 모듈, 핵심 모듈, 기본 모듈   
: 기본으로 제공되어 설치할 필요없이 바로 사용하는 모듈    



## External Modules
= Third-party Modules   
: [패키지 매니저](../../JS-Package-Manager.md)를 통해 설치   



## Local Module
= 사용자 정의 모듈   

```bash
# 1. 폴더 생성
$ mkdir example
$ cd example

# 2. package.json 파일 생성
$ npm init -y

# 3. 모듈 작성
$ vi example.js

# 4. 모듈 등록
## 계정 생성
$ npm adduser

## 로그인
$ npm login

## 모듈 등록
$ npm publish
```
