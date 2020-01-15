# node process manager module

- [supervisor](#supervisor)
- nodemon
- [forever](#forever)
- [pm2](#pm2)
- strong-pm



## supervisor

```bash
# supervisor
$ sudo npm install supervisor -g

## 실행
$ supervisor 파일명
```



## forever

```bash
# 설치
$ sudo npm install forever -g

## 실행
$ forever start 파일명

## 종료
$ forever stop 번호

## 재실행
$ forever restart 번호

## 실행된 목록 확인
$ forever list
```



## pm2

- 인스턴스 관리
- 서버 백그라운드 실행
- 로드 밸런서 내장  
- 모니터링
- 클러스터 모드 지원



```bash
# 설치
$ sudo npm install pm2 -g

# 실행
$ pm2 start 파일명

## 이름 지정
$ pm2 start 파일명 --name "이름"

# 종료 -- 프로세스는 종료되지 않음
$ pm2 stop 번호

# 정보 확인
$ pm2 show

# 실행된 목록 확인
$ pm2 list

# 제거
$ pm2 delete 파일명 | 이름
$ pm2 kill 파일명 | 이름
```


**모니터링**

```bash
$ pm2 monit
```



**클러스터링**

```bash
$ pm2 start 파일명 -i 인스턴스 수

# CPU 코어 개수만큼 실행
$ pm2 start 파일명 -i 0

# 개수 수정
$ pm2 scale 파일명 숫자
```



[top](#)
