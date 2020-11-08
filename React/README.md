# React
: 사용자 인터페이스를 위한 JS 라이브러리      
: DOM 연산 최소화 목적        
: 컴포넌트 개념을 이용해 관심사 분리     
: 웹 컴포넌트와 리액트 컴포넌트를 조합해 사용 가능  
: 클라이언트 사이드 렌더링과 서버 사이드 렌더링 모두 지원  

- React Install
    - React Fiber
- React Virtual DOM
- React Component
- JSX
- React Package


**CSR**   
Client Side Rendering    
- [create-react-app](./create-react-app/)
- react-starter-kit
- electron-quick-start


**SSR**  
Server Side Rendering    
- [Next](./next/)
- Razzle



페이스북에서 사용하는 XHP 프레임워크는 새로운 요청이 들어올 때마다 전체 페이지를 렌더링하는데 이 작업을 클라이언트 단에서 렌더링하기 위해 만든 JS 라이브러리로, 가상 DOM을 메모리 상에 먼저 렌더링하고(때문에 비브라우저 환경에서 사용 가능) 변경이 감지되면 브라우저에 DOM 갱신-리렌더링


**XHP 프레임워크**
```php
// 변수에 DOM 객체 담기
<?hh $div = <div>...</div>;


// 커스텀 태그
<?hh
class :fb:thing extends :x:element {
    protected function render(): XHPRoot{
        return <div>...</div>;
    }
}

// 커스텀 태그 사용
<fb:thing />
```


## React Install

```bash
$ mkdir app

$ npm init -y
$ npm install react react-dom
# npm install react@17.0.0 react-dom@17.0.0
```


**CDN**
```html
<div id="app"></div>

<!--
14버전부터 다양한 플랫폼 지원을 위해 react와 react-dom 패키지로 분리   
-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.6.1/react.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.6.1/react-dom.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script>

<!--
16버전부터 파이버 기반이며 개발용과 배포용으로 분리
-->
<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
<script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>


<script type="text/babel">
// 1. class 선언
// 2. 클래스-컴포넌트 명 정의
// 3. React.Component 상속
// 4. render() 메소드 컴포넌트 작성 -- JSX 사용 가능
// 5. ReactDOM의 render() 메소드를 이용해 컴포넌트 렌더링

class CustomComponent extends React.Component {
    render(){
        return (
            {/* react v16 */}
            <React.Fragment>...<React.Fragment>;

            {/* array */}
            [ <li>...</li> , <li>...</li> ];

            {/* string */}
            'text';

            {/* react v16.2 */}
            <>
                <h1 className="some-class"> react </h1>
                <h2>Today is { new Date() }</h2>
            </>
        );
    }
}

ReactDOM.render(<CustomComponent />, document.getElementById('app'));
</script>
```


[top](#)
