# Vue Instance

- [Vue Instance Properties](#vue-instance-properties)
- [Vue Instance Methods](#vue-instance-methods)
- [Vue Lifecycle Hooks](./vue-lifecycle-hooks.md)


```js
const option = {
    data : {},
};

const vm = new Vue(option);



/* vue.js */
function Vue(options) {
    if("development" !== 'production' && !(this instanceof Vue)) {
        warn('Vue is a constructor and should be called with the `new` keyword');
    }
    this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);
```



## Vue Instance Properties

속성 | 설명
---|---
vm.$el          | vue 인스턴스가 관리하는 DOM 요소
vm.$data        | vue 인스턴스가 관찰하는 데이터
vm.$props       | 컴포넌트가 전달 받은 속성
vm.$options     | 현재 vue 인스턴스에 사용된 옵션
vm.$parent      | 현재 vue 인스턴스에 상위 인스턴스가 있으면 상위 인스턴스
vm.$root        | 현재 컴포넌트의 루트 인스턴스
vm.$children    | 현재 vue 인스턴스의 하위 인스턴스  
vm.$slots       |
vm.$scopedSlots |
vm.$refs        | DOM 요소나 하위 인스턴스에 등록된 속성
vm.$isServer    | 현재 vue 인스턴스가 실행중인지 여부 반환
vm.$attrs       |
vm.$listeners   |


```html
<div id="app">
    <child-component>
        <p>하위 컴포넌트</p>
    </child-component>
</div>


<script>
var child = {
    template : `<div><slot /></div>`,
};

new Vue({
    el : '#app',

    components : {
        'child-component' : child
    },

});
</script>
```



## Vue Instance Methods

**Data**

메소드 | 설명
---|---
vm.$watch()       | vue 인스턴스에서 표현식이나 계산된 함수 감시
vm.$set()         | 전역 Vue.set, vue 인스턴스의 속성 설정
vm.$delete()      | 전역 Vue.delete, vue 인스턴스의 속성 제거
vm.$get()         | 제거
vm.$add()         | 제거
vm.$eval()        | 제거
vm.$interpolate() | 제거
vm.$log()         | 제거



**Events**

메소드 | 설명
---|---
vm.$dispatch()  | 제거
vm.$broadcast() | 제거
vm.$emit()      | 현재 vue 인스턴스에서 이벤트 트리거
vm.$on()        | 현재 vue 인스턴스에서 정의된 이벤트 수신
vm.$once()      | 현재 vue 인스턴스에서 정의된 이벤트 한 번만 수신
vm.$off()       | 현재 vue 인스턴스에서 정의된 이벤트 수신 중지



**DOM**

메소드 | 설명
---|---
vm.$appendTo() | 제거
vm.$after()    | 제거
vm.$before()   | 제거
vm.$remove()   | 제거



**Lifecycle**

메소드 | 설명
---|---
vm.$mount()       | vue 인스턴스를 명시적으로 마운트하는 메소드
vm.$destroy()     | vue 인스턴스를 완전히 제거를 위한 메소드
vm.$forceUpdate() | vue 인스턴스를 다시 렌더링함
vm.$nextTick()    | DOM 업데이트 후 실행될 콜백을 연기하기 위한 메소드
vm.$addChild()    | 제거, 자식 인스턴스를 현재 인스턴스에 추가하는 메소드
vm.$compile()     | 제거, DOM 요소를 부분적으로 컴파일하는 메소드


```html
<div id="app"></div>

<script>
/* $mount() */
// : vue 인스턴스 생성시 el 속성이 없을 경우 수동으로 마운트
// : 마운트 지연을 위해 사용  
var vm = new Vue();

setTimeout(() => {
    vm.$mount('#app');
}, 3000);



/* $nextTick() */
// : DOM이 브라우저에 렌더링되지 않았는데 이때 DOM에 접근하면 오류
var vm = new Vue({
});
</script>
```



[top](#)
