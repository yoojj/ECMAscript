# React
: 사용자 인터페이스를 위한 JS 라이브러리      
: DOM 연산 최소화 목적        
: 컴포넌트 개념을 이용해 관심사 분리     
: 웹 컴포넌트와 리액트 컴포넌트를 조합해 사용 가능  
: 서버 사이드 렌더링과 클라이언트 사이드 렌더링 모두 지원  


**CSR**   
Client Side Rendering    
- [create-react-app](./create-react-app/)
- react-starter-kit
- electron-quick-start


**SSR**  
Single Page Application    
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



[top](#)
