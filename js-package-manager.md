# JS Package Manager
: 레지스트리를 통해 패키지를 로컬 환경에 설치 및 패키지 의존성, 버전, 삭제 등을 관리하는 도구    


**패키지**   
: 하나 이상으로 구성된 모듈 집합   


**종류**  
- [NPM](#npm)
- [Yarn](#yarn)
- [Pnpm](#pnpm)
- [Bower](#bower)
- [JSPM](#jspm)
- Ender
- Jam
- Duo



## NPM
Node Package Manager   
: 전역과 로컬에 각각 패키지를 설치할 수 있으며 옵션으로 지정하지 않으면 로컬 모드로 설치    
: npm@5 부터 --save 옵션 기본 설정  


**npm registry**        
https://registry.npmjs.org   
https://npm.pkg.github.com  


```bash
# 버전 확인
$ npm --version

# 최신 버전 설치
$ npm install npm@latest -g

# 설정 확인
$ npm config list

# 패키지가 설치된 전역 경로 확인
$ npm root -g
```

**npm command**  
https://docs.npmjs.com/cli-documentation/cli  



### package.json
: 패키지 의존성 관리를 위한 매니페스트 파일      
: name과 version을 통해 고유성 판별  


```bash
# 파일 생성
$ npm init -y

# 패키지 설치 및 업데이트
$ npm view 패키지
$ npm install 패키지
$ npm update 패키지

# 패키지 확인
$ npm list
$ npm list installed
```


**package.json**

```json
{
    "name": "첫 글자로 . 과 _ 기호 사용 불가, 대문자 사용 불가, 214자 미만",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "lint": "",
      "unit": "",
      "dev": "",
      "start": "",
      "build": ""
    },
    "dependencies": {},
    "devDependencies": {},
    "engines": {
        "node": "^10.0.0",
        "npm": "^6.0.0"
    },
    "keywords": [],
    "bugs": {
        "url" : "",
        "email": ""
    },
    "author": "name <example@email.com> (https://example.com)",
    "author": {
        "name": "",
        "email": "",
        "url": ""

    },
    "contributors" : [],
    "license": ""
}
```


속성 | 설명
---|---
name         | 프로젝트나 패키지 이름
version      | 현재 패키지 버전으로 패키지 변경시 버전 변경
description  | 패키지 간략 설명
private      | 패키지 공개 여부  
main         | 패키지 진입점 명시  
scripts      | 스크립트 정의  
dependencies | 배포시 필요한 패키지 목록
devDependencies  | 개발 환경에만 필요한 패키지 목록
peerDependencies |
bundledDependencies  |
optionalDependencies |
os           | 실행될 운영체제 명시
engines      | 노드 버전 명시
browserslist | 지원 브라우저 명시, 도구에서 참조하여 폴리필 추가  
keywords     | 패키지 검색을 위해 관련 키워드 명시
homepage     | 프로젝트 홈페이지 주소
bugs         | 프로젝트 이슈가 보고될 홈페이지나 이메일 주소 명시  
author       | 패키지 작성자
contributors | 패키지 기여자
license      | 패키지 라이센스 명시


**패키지 버전 범위**

버전 | 설명
---|---
\*        | 모든 버전
latest    | 최신 버전
1.0.0     | 명시된 버전과 정확하게 일치
1.0.x     | 1.0.0 ~ 1.0.9 범위 버전   
\> 1.0.0  | 명시된 버전보다 높은 버전
\>= 1.0.0 | 명시된 버전과 같거나 높은 버전
< 1.0.0   | 명시된 버전보다 낮은 버전
<= 1.0.0  | 명시된 버전과 같거나 낮은 버전
~ 1.0.9   | 1.0.0 ~ 1.0.9 범위 버전
~ 1.0     | 1.0.0 ~ 1.0.9 범위 버전  
~ 0.1.0   | 0.1.0 ~ 0.1.9 범위 버전
^ 1.0.0   | 1.0.0 ~ 2.0 범위 버전
^ 1.0     | 1.0.0 ~ 2.0 범위 버전
^ 0.1.0   | 0.1.0 ~ 0.2.0 범위 버전
^ 0.0.1   | 0.0.0 ~ 0.0.1 범위 버전

https://docs.npmjs.com/files/package.json



#### package-lock.json
: npm@5 부터 추가된 패키지 잠금 파일    
: package-lock.json 파일에 명시된 버전으로 패키지 설치  

https://docs.npmjs.com/files/package-lock.json  


```bash
# 파일 생성
$ npm i
$ npm init
```

**package-lock.json**

```json
{
  "name": "",
  "version": "1.0.0",
  "lockfileVersion": 1,
  "requires": true,
}
```



### npx
: npm@5.2.0 부터 추가된 패키지 러너  
: 의존되는 패키지 최신 버전 자동 업데이트  

```bash
$ npx create-react-app
```



## Yarn
Yarn Package Manager   


**yarn registry**    
: npm과 bower 레지스트리 혼합 사용 가능   

https://registry.yarnpkg.com/


**프로세스**
```
resolving > fetching > linking
```


```bash
# 설치 및 버전 확인
$ npm install yarn -g
$ yarn -v

# yarn 업데이트
$ yarn self-update

# 레지스트리 설정 및 확인
$ yarn config set registry 레지스트리
$ yarn config get registry

# 오프라인 설정
$ yarn config set yarn-offline-mirror


# package.json
$ yarn init -y
$ yarn add 패키지
$ yarn remove 패키지
```


**yarn command**    
https://yarnpkg.com/lang/en/docs/cli/   


**구조**    
```
프로젝트/
├── node_modules/
├── package.json
└── yarn.lock
```


**yarn.lock**  
≒ npm-shrinkwrap.json    
: 의존성 추가, 업데이트, 삭제 등 핸들링을 위한 파일  
: add, remove, upgrade 명령어를 통해 업데이트  



## Pnpm
Performant Node Package Manager   
: 전역에 한 개의 패키지만 설치하고 이를 링크해 로컬에서 사용      


```bash
# 전역 설치 및 버전 확인
$ npm install pnpm -g
$ pnpm --version

# 패키지관련 명령어
$ pnpm install 패키지
$ pnpm update 패키지
$ pnpm uninstall 패키지

# 패키지가 설치되는 전역 경로 변경
$ pnpm config set pnpm-prefix 경로


# package.json 파일 생성
[프로젝트]$ pnpm init -y
```

**pnpm command**  
https://pnpm.js.org/en/cli/add


**구조**    
```
프로젝트/
├── node_modules/
├── package.json
└── pnpm-lock.yaml
```



### pnpx  
: npm의 npx와 동일한 기능을 하는 도구  

```bash
$ pnpx create-react-app
```



## Bower
: 플랫 디펜던시 트리 구조로 하나의 패키지 버전만 유지하여 충돌 방지    
: JS, html, css, 폰트, 이미지 등 최소한 리소스 로드가 목표     


```bash
# 전역 설치 및 버전 확인
$ npm install bower -g
$ bower -v

# 패키지관련 명령어
$ bower install  패키지#버전
$ bower updatw 패키지
$ bower uninstall 패키지

$ bower search 패키지
$ bower lookup 패키지
$ bower info 패키지

$ bower list


# bower.json 파일 생성
[프로젝트]$ bower init -y
```

**bower command**  
https://bower.io/docs/api/#commands


**구조**    
```
프로젝트/
├── bower_components/
└── bower.json
```



## JSPM

**jspm registry**  
https://dev.jspm.io/  


```bash
# 전역 설치 및 버전 확인
$ npm install jspm -g
$ jspm -v

# 패키지 설치
[프로젝트]$ jspm install npm:패키지
[프로젝트]$ jspm install github:패키지
```


**구조**     
```
프로젝트/
├── jspm_packages/
└── jspm.json
```


### JSPM CDN

```html
<script type="module">
import React from 'https://dev.jspm.io/react';
</script>
```



[top](#)
