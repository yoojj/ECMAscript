# React Lifecycle
: 컴포넌트 라이프 사이클 메소드 제공하고 이를 재정의해 컴포넌트 제어  
: 버전에 따라 지원 중단한 메소드가 있으며 프리픽스를 붙여 사용    


- [Mounting](#mountung)
- [Updating](#updating)
- [Unmounting](#unmounting)
- [Error](#error)



## Mounting
: 컴포넌트가 생성되어 DOM에 마운트시 호출되는 메소드들   

createClass | Component | react v16.3
:--:|:--:|:--:
getDefaultProps<br>getInitialState | constructor | constructor
componentWillMount | componentWillMount | getDerivedStateFromProps
render | render | render
componentDidMount |  componentDidMount | componentDidMount


### getDefaultProps()
: 컴포넌트 인스턴스 생성하는 시점에서 한 번 호출되는 메소드  
: 모든 인스턴스가 공유하는 state 정의  

```js
const CustomComponent = React.createClass({
    getDefaultProps: function(){
        return {
            key: 'value'
        }
    }
});
```  


### getInitialState()
: 컴포넌트 인스턴스 생성마다 호출되는 메소드  
: 개별 인스턴스의 state 초기화  


### constructor()
: 컴포넌트 생성시 호출되는 생성자 메소드  
: state 초기화와 메소드 바인딩을 위해 사용     

```js
class CustomComponent extends React.Component {
    constructor(){
        super();
        this.state = { key: 'value' }
        this.fn = this.fn.bind(this);
    }

    fn(){
        this.setState();
    }
}
```


### componentWillMount()
: 컴포넌트가 DOM에 마운트되기 전에 호출되는 메소드   
: 프리픽스를 붙여 사용 UNSAFE_componentWillMount()   


### getDerivedStateFromProps()  
: v16.3에 추가된 메소드    
: 컴포넌트 초기화 후 DOM에 마운트되기 전에 호출되는 메소드   
: state를 갱신하기 위해 사용   
: props와 state 동기화 가능   
: v16.4 이후 업데이트에도(props, setState(), forceUpdate()) 호출됨   

```js
class CustomComponent extends React.Component {
    constructor(){
        super();
        this.state = { key: '' }
    }

    static getDerivedStateFromProps(props, state){
        if(props.key != state.key){
            return {
                key: props.key
            };
        }
        return null;
    }
}
```


### render()  
: 가상 DOM(리액트 엘리먼트, 컴포넌트)을 반환하는 메소드   
: 클래스 컴포넌트인 경우 필수로 구현하는 메소드          
: 숫자와 문자를 반환시 DOM에 텍스트 노드로 렌더링됨   
: boolean이나 null 반환시 DOM에 아무것도 렌더링되지 않음   

```js
class CustomComponent extends React.Component {
    render(){
        return null;
    }
}
```


### componentDidMount()
: 컴포넌트가 DOM에 마운트된 직후 호출되는 메소드    
: DOM 접근 가능  
: 라이브러리, 네트워크 등을 외부 API를 사용하기에 적합      

```js
class CustomComponent extends React.Component {
    fn(){
        setTimeout(() => {});
    }

    componentDidMount(){
        this.fn();
    }
}
```



## Updating
: 컴포넌트의 속성이 변경되거나 상위 컴포넌트가 리렌더링될 때 호출되는 메소드들  

react v16.3 이전 | react v16.3 이후
:--:|:--:
componentWillReceiveProps | getDerivedStateFromProps
shouldComponentUpdate | shouldComponentUpdate
componentWillUpdate | x
render | render
  x | getSnapshotBeforeUpdate
componentDidUpdate | componentDidUpdate


### componentWillReceiveProps()
: 상위 컴포넌트의 props 변경시 호출되는 메소드   
: 프리픽스를 붙여 사용 UNSAFE_componentWillReceiveProps()


### getDerivedStateFromProps()
: 컴포넌트 초기화 후 DOM에 마운트되기 전에 호출되는 메소드로 업데이트 직후에도 호출됨   
: props 변경시 state를 갱신하기 위해 사용   


### shouldComponentUpdate()
: 컴포넌트의 속성이 변경되어 리렌더링이 발생하기 직전에 호출되는 메소드   
: 기본으로 true를 반환하고 fasle를 반환하면 업데이트가 종료됨    
: 컴포넌트의 성능 최적화를 위해 사용  

```js
class CustomComponent extends React.Component {
    cunstructor(){
        super();
        this.state = {
            key: ''
        }
    }

    shouldComponentUpdate(props, state){
        return this.state.key != state.key;
    }
}
```


### componentWillUpdate()
: shouldComponentUpdate()에서 true 반환시 호출되는 메소드  
: 프리픽스를 붙여 사용 UNSAFE_componentWillUpdate


### getSnapshotBeforeUpdate()
: v16.3에 추가된 메소드    
: render() 메소드 호출 후 DOM을 업데이트할 때 호출되는 메소드      


### componentDidUpdate
: 컴포넌트 업데이트 직후 호출되는 메소드   
: DOM 조작을 위해 사용하기 적합   
: getSnapshotBeforeUpdate() 메소드의 반환 값을 세번째 인자로 받음   

```js
class CustomComponent extends React.Component {
    getSnapshotBeforeUpdate(prevProps, prevState) {
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(snapshot !== null) {}
    }
}
```



## Unmounting  
: DOM에서 컴포넌트 제거될 때 호출되는 메소드들


### componentWillUnmount()
: 컴포넌트가 DOM에서 제거되기 직전에 호출되는 메소드



## Error
: 오류가 발생할 경우 호출되는 메소드들


### getDerivedStateFromError()

```js
class CustomComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            hasError: false
        };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }
}
```


### componentDidCatch()

```js
class CustomComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            hasError: false,
            error: null,
        };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.log(info.componentStack);
        this.setState({
            error: error
        });
    }
}
```


[top](#)
