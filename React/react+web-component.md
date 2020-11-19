# React and Web Component


**+ web component**      
https://github.com/yoojj/Web/blob/master/web-component.md


```html
<!-- 커스텀 엘리먼트 -->
<nav-global></nav-global>


<script>
// 웹 컴포넌트
class NavGlobal extends HTMLElement {

    // DOM 생성
    connectedCallback(){
        this.start();
    }

    // DOM 제거
    disconnectedCallback(){
        this.stop();
    }

}

customElements.define('nav-global', NavGlobal);


// 리액트 컴포넌트와 웹 컴포넌트
class CustomComponent extends React.Component{
    render(){
        return <NavGlobal></NavGlobal>;
    }
}
</script>
```



[top](#)
