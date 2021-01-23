# JSX
JavaScript XML   
: E4X(ECMAScript for XML)의 영향 받음    
: 리액트 컴포넌트에서 사용할 리액트 객체 트리를 작성하기 위한 문법 체계     
: HTML과 유사한 마크업을 지원하지만 HTML 명세를 완벽하게 따르지 않음        
: 템플릿 언어가 아니므로 조건문과 제어문 사용 불가능           
: 바벨같은 트랜스파일러를 통해 JS로 변환됨     


E4X    
https://www.ecma-international.org/publications-and-standards/standards/ecma-357/

JSX 명세    
https://facebook.github.io/jsx/  

JSX 문법 확인  
https://babeljs.io/repl/  


```js
<JSXElementName JSXAttributes="JSXAttributeValue" JSXAttributes={AssignmentExpression}>
    JSXChildren
</JSXElementName>
```


**JSX vs React.createElement()**
```js
const jsx = <div className="example"><p>text</p></div>

const el = React.createElement('div', { className: 'example' },
    React.createElement('p', null, `text`));
```


**new JSX Tranform**
```js
// v16
import React from 'react';

function CustomComponent() {
    return <div></div>;
    // return React.createElement('div');
    // : React.createElement() 메소드 호출
}


// v17
//import {jsx} from 'react/jsx-runtime';

function CustomComponent() {
    return <div></div>;
    // return jsx('div');
    // : jsx() 메소드를 기본으로 지원
}
```



## JSX 문법

**표현식**
```js
const text = 'string';
const jsx = <div><h1>{ text }</h1></div>;
```


**충돌 우려가 있는 키워드 사용 불가**
```js
const css = {};
const jsx = <form className={ css }>
    <label htmlFor="example"></label>

    {/* xml 형식이므로 단일 태그를 닫아야함 */}
    <input type="text" id="example" />
</form>;
```


**html 명세에 없는 속성 사용**
```js
// v16 이전은 data-* 사용
const jsx = <div data-custom-attribute=""></div>;


// v16 부터 사용자 지정 속성 사용 가능
const jsx = <div custom-attribute=""></div>;
```


**DOM 접근**  
```js
// this.refs.element
const jsx = <div ref="element"></div>

const input = <input type="text" ref={ (ref) => this.input.ref } />
```


**동적 속성**
```js
const css = {"border-color":'#999', "border-size":'5px'};
const css = {borderColor:'#999', borderThickness:'5px'};
const jsx = <div style={ css }></div>
```


**삼항 연산자**
```js
const jsx = <div> { 조건 ? 'True' : 'False' } </div>;
```


**논리곱 연산자**
```js
const jsx = <div className={ True && False }></div>;
```


**함수**
```js
function fn(){}

const jsx = <div><h1>{ fn() }</h1></div>;
```


**배열**
```js
const jsx = [<div></div>, <div></div>, <div></div>];
```



[top](#)
