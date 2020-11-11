# React Component
: ReactElement를 반환하는 클래스나 함수     
: UI를 구성하는 개별 단위를 재사용 목적으로 컴포넌트화    
: 컴포넌트끼리 결합하고 포함해 사용  
: 대문자로 작성된 컴포넌트는 custom 컴포넌트로 간주 (ReactComponent)   
: 소문자로 작성된 컴포넌트는 html 엘리먼트로 간주 (ReactElement)   
: 여는 태그와 닫는 태그로 자식 노드를 파악하므로 단일 태그 사용 불가   


- [컴포넌트 종류](#컴포넌트-종류)
    - [클래스 컴포넌트](#클래스-컴포넌트)  
    - [함수형 컴포넌트](#함수형-컴포넌트)  
- [컴포넌트 속성](#컴포넌트-속성)
- [컴포넌트 메소드](#컴포넌트-메소드)


```js
// ReactComponent
// : ReactElement를 반환
// : render() 메소드 구현
const CustomComponent = React.createClass();
class CustomComponent extends React.Component{}

ReactDOM.render(<CustomComponent />, document.getElementById('app'));


// ReactElement
// : 가상 DOM 요소를 표현하는 객체를 반환
// : 메소드나 프로토타입이 존재하지 않음
const el = React.createElement('태그', [{ 속성: '' }], [콘텐츠 | 하위 태그]);

ReactDOM.render(el, document.getElementById('app'));
```



## 컴포넌트 종류

### 클래스 컴포넌트

```js
/* react v15.5 폐기 */
const CustomComponent = React.createClass({
    getInitialState: function(){
        return { key: 'value' };
    },

    render: function(){
        return <div>{ this.state.key }</div>;
    }
});


class CustomComponent extends React.Component {
    constructor(){
        super();
        this.state = { key: 'value' }
    }

    render(){
        return <div>{ this.state.key }</div>;
    }
}
```


**PureComponent**  
: 상위 컴포넌트가 렌더링되면 하위 컴포넌트도 같이 렌더링되는 단점을 보완하기 위해 도입     

```js
/* react v15.3 */
class CustomPureComponent extends React.PureComponent {
    constructor(){
        super();
        this.state = { key: 'value' }
    }

    render(){
        return <div>{ this.state.key }</div>;
    }
}
```



### 함수형 컴포넌트   
: 라이프사이클 메소드 호출이 없음   

```js
function FunctionalComponent(props){
    return <div>{ props.key }</div>;
}


/* es6 */
const FunctionalComponent = (props) => {
    return <div>{ props.key }</div>;
}


/* react v16.8 */
import { useState } from 'react';

const FunctionalComponent = () => {

    const [key, setKey] = useState('value');
    const [obj, setValue] = useState({
        key: 'value',
    });

    return (
        <div>{ key }</div>
        <button onClick={ () => setKey(++key) }>add</button>

        <div>{ obj.key }</div>
    );

}
```



## 컴포넌트 속성  

**클래스 속성**
- displayName
- defaultProps

**인스턴스 속성**
- state
- props


### defaultProps
: props의 기본 값을 클래스 속성으로 정의   
: prop-types 라이브러리를 통해 타입 검사 가능    


```js
class CustomComponent extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>{ this.props.key }</div>
        );
    }
}

CustomComponent.defaultProps = {
    key: 'value'
}
```


### state  
: 컴포넌트의 정보를 갖고 있는 속성      
: 해당 데이터는 컴포넌트 내부에서만 사용하며 setState() 메소드를 통해 수정     
: setState() 메소드 사용시 컴포넌트를 리렌더링하고 비동기적으로 DOM을 업데이트함    

```js
class StateComponent extends React.Component {
    constructor(){
        super();
        this.state = { key: 'value' }
    }

    /*
    this.setState( (state, props) => ({
        key: state.key + props.key
    }));
    */

    add = () => {
        this.setState({ key: this.state.key + 1 });
    }

    render(){
        return (
            <div>{ this.state.key }</div>
            <button onClick={ this.add }>add</button>
        );
    }
}
```


### props
: 컴포넌트간 데이터를 주고 받기위해 사용하는 속성       
: 전달받은 데이터는 컴포넌트 내부에서 수정 불가  

```js
class AComponent extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>{ this.props.key }</div>
        );
    }
}

class BComponent extends React.Component {
    render(){
        return <AComponent key="props value" />;
    }
}
```


**+ Transform Class Properties Plugin**  
: 바벨 플러그인 transform-class-properties

```js
class CustomComponent extends React.Component {

    static defaultProps = {}

    static propTypes = {}

    state = { key: 'value' }

    fn(val) {
        this.setState({ key: this.state.key + val });
    }

    render(){
        return ();
    }

}
```



## 컴포넌트 메소드

- setState()
- forceUpdate()




[top](#)
