# Node
: 자바스크립트 실행 환경-플랫폼                    
: V8 엔진 기반이며 CommonJS 와 ES Module 명세 구현        
: 단일 스레드 + 이벤트 루프 + 비동기 방식 + 논블로킹 I/O     

- [node install](#node-install)
- [node version manager](./node-version-manager.md)
- [node architecture](./node-architecture.md)
- node components
    - [node api](./node-api/)
    - V8 Engine
    - Libuv
- [node modules](#node-modules)
    - [내장 모듈 예](./node-built-in-modules/)
    - [외부 모듈 예](./node-external-modules/)



## node install

```bash
# 설치 및 확인
$ sudo yum install nodejs
$ node -v

# REPL
$ node
> .exit
```



## node module

**종류**   
- [내장 모듈](#built-in-modules)
- [외부 모듈](#external-modules)
- [로컬 모듈](#local-module)



### built-in modules
= 내장 모듈, 핵심 모듈, 기본 모듈   
: 기본으로 제공되어 설치할 필요없이 바로 사용하는 모듈    



### external modules
= Third-party Modules   
: 패키지 매니저를 통해 설치하는 모듈     



### local module
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



## node module loading

- 코어 모듈 로딩
- 파일 모듈 로딩
- 폴더 모듈 로딩
