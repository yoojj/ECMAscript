# Nuxt
: vue 기반 서버 사이드 렌더링 프레임워크    
: SPA, PWA, SSR, 정적 사이트 생성을 위해 사용   

**+ next**  
: react 기반 서버 사이드 렌더링 프레임워크  


- [nuxt command](#nuxt-command)
- [nuxt directory structure](#nuxt-directory-structure)



```bash
$ mkdir example
$ cd example

$ npm install nuxt


# package.json 파일 생성
$ npm init -y

## 스크립트 추가
"scripts": {
    "dev": "nuxt"
}


# pages 디렉토리 생성
$ mkdir pages

## pages/index.vue 파일 생성
<template>
    <h1>test</h1>
</template>


# 프로젝트 실행
$ npm run dev
```


**템플릿을 사용한 프로젝트 생성**

```bash
# vue-cli
$ npm i @vue/cli -g
$ npm i @vue/cli-init -g
$ vue init nuxt-community/starter-template example


# npx
$ npx create-nuxt-app example


# 실행
$ npm install
$ npm run dev
```


## nuxt command

```bash
# 개발 모드, Hot-reloading 상태로 실행
$ npm run dev


# webpack을 통해 프로덕션용으로 빌드
$ npm run build

## 프로덕션 모드 실행
$ npm start


# 정적 프로젝트 생성
$ npm run generate
```



## nuxt directory structure

```bash
example/
├── assets/            # SASS, JS 등 빌드 전 파일을 위한 디렉토리
├── components/        # vue 컴포넌트를 위한 디렉토리 -- 비동기 데이터 함수 사용 불가
├── layouts/           # 레이아웃을 위한 디렉토리
├── middleware/        # 미들웨어 디렉토리로 레이아웃이나 페이지 렌더링 전 실행될 기능 정의 가능
├── pages/             # vue view와 라우터를 위한 디렉토리 -- 필수
├── plugins/           # vue 앱 생성 전 실행될 JS 파일(상수, 전역 함수, 모듈 등)을 위한 디렉토리
├── static/            # 정적 파일을 위한 디렉토리
├── store/             # vuex를 위한 디렉토리   
├── nuxt.config.js     # nuxt 설정 정보 파일
└── package.json       # 프로젝트의 정보, 의존성 모듈, 스크립트 등이 포함된 파일
```

https://nuxtjs.org/guide/directory-structure/
https://ko.nuxtjs.org/guide/directory-structure/



[top](#)
