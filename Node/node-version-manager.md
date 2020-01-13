# Node Version Manager    
: 노드 버전 관리 도구   

- [nvm](#nvm)
    - nvm windows (https://github.com/coreybutler/nvm-windows)
- [n](#n)
- nava (https://github.com/isaacs/nave)
- fnm (https://github.com/Schniz/fnm)
- nvs (https://github.com/jasongin/nvs)
- nodist (https://github.com/marcelklehr/nodist)



## nvm  
! nvm을 사용할 경우 설치된 노드가 있다면 제거하고 nvm을 통해 재설치  

https://github.com/nvm-sh/nvm


**+ npm**  
: 자바스크립트 패키지 설치 도구   


```bash
# curl 이용해 설치
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash

## 노드 버전 확인
## https://github.com/nvm-sh/nvm/releases


# .bashrc 갱신
$ export NVM_DIR="${XDG_CONFIG_HOME/:-$HOME/.}nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"


# 설치 확인
$ command -v nvm
$ nvm --version

# 사용 가능한 노드 버전 확인 -- 저장소
$ nvm ls-remote

# 설치된 노드 버전 확인 -- 로컬  
$ nvm ls

# 최신 버전 설치
$ nvm install node

# 현재 사용중인 버전 확인
$ nvm current

# 경로
$ nvm which 버전

# 특정 버전 설치 및 사용
$ nvm install 10.10.0
$ nvm use 10.10.0

# 특정 버전 REPL
$ nvm run 버전
> .exit

# 기본 노드 버전 설정
$ nvm alias default 10.10.0
```



## n
https://github.com/tj/n


```bash
# npm을 통해 설치    
$ sudo npm install n -g

## npm이 없을 경우
$ curl -L https://git.io/n-install | bash


# 최신 버전 설치
$ sudo n latest
$ sudo n current

# 안정된 버전 설치
$ sudo n stable

# LTS 버전 설치
$ sudo n lts

# 특정 버전 설치
$ sudo n 버전

# 설치된 버전 확인
$ n ls

# 삭제
$ sudo n rm 버전
```
