# Compile to JavaScript

**언어**   
- [TypeScript](./TypeScript/)
- [PureScript](#purescript)
- [Dart](#dart)
- [Go](#go)
- Haxe
- Reason
- Rust
- [Nim](#nim)
- Scala
- Kotlin
- Clojure
- ...



## PureScript
: ML, Haskell에 영향받은 함수형 언어  

```bash
# 컴파일러와 빌드 툴 설치   
$ npm install purescript pulp -g

# PureScript는 bower 레지스트리를 통해 패키지 사용  
$ npm install bower -g

# 프로젝트 생성
$ mkdir example
$ cd example
$ pulp init
```

**pulp**  
: PureScript 빌드 툴   



## Dart   
: 객체 지향 언어   
: dart2js 컴파일러를 통해 dart 코드를 JS 코드로 컴파일해 브라우저에서 동작    

- Dart Native : Dart VM + JIT 컴파일러 + AOT 컴파일러  
- Dart Web : dart2js 컴파일러



## Go
: gopherjs를 통해 JS 코드로 컴파일   



## Nim  
: 다중 패러다임 언어   
: 프로 시저를 사용하는 프로 시저 언어      
: nim 컴파일러를 통해 C, C++, JS로 컴파일   

https://nim-lang.org/


```bash
$ nim js -o:example.js example.nim
```



[top](#)
