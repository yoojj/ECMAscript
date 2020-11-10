# JSX
JavaScript XML   
: E4X(ECMAScript for XML--ECMA-357) 영향 받음   
: 리액트 컴포넌트에서 사용할 리액트 객체 트리를 작성하기 위한 문법 체계    
: html과 유사한 마크업을 지원하지만 html 명세를 완벽하게 따르지 않음      
: 템플릿 언어가 아니며 조건문과 제어문 사용 불가능          
: 트랜스파일러를 통해 ReactElement로 변환됨   


JSX 명세    
https://facebook.github.io/jsx/  

JSX 문법 확인  
https://babeljs.io/repl/  


```js
<JSXElementName JSXAttributes="JSXAttributeValue" JSXAttributes={AssignmentExpression}>
    JSXChildren
</JSXElementName>
```


**JSXElement vs ReactElement**
```js
const jsx = <div className="some-class"><p>text</p></div>

const el = React.createElement('div', { className:'some-class' },
    React.createElement('p', null, `text`)
);
```



## JSX 문법

**표현식**
```js
const text = '';
const jsx = <div><h1>{ text }</h1></div>;
```


**충돌 우려가 있는 키워드 사용 불가**
```js
const css = {};
const jsx = <form className={ css }>
    <label htmlFor="someId"></label>

    {/* xml 형식이므로 단일 태그를 닫아야함 */}
    <input type="text" id="someId" />
</form>;
```


**html 명세에 없는 속성 사용**
```js
// react v16이전까지는 data-* 사용
const jsx = <div data-custom-attribute=""></div>;


// react v16부터 사용자 지정 속성 가능
const jsx = <div customAttribute=""></div>;
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


const props = {};
<CustomComponent { ...props } />
```


**삼항 연산자**
```js
const jsx = <div> { 조건? 'True' : 'False' } </div>;
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



[top](#)
