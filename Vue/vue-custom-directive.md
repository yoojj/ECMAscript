# Vue Custom Directive

- [내장 디렉티브](./vue-directive.md)
- [사용자 정의 디렉티브](./vue-custom-directive.md)



```js
// 전역 등록
Vue.directive('v-directive ', {
    bind(e, bind, node) {},
    insert(el, binding, vnode) {},
    update(el, binding, vnode, oldVnode) {},
    componentUpdated(el, binding,vnode, oldVnode) {},
});


// 지역 등록
new Vue({

    directives : {
        'v-directive' : {
            bind(el, binding, vnode) {
                // el : 디렉티브가 바인딩된 요소

                // binding : 요소에 바인딩된 데이터를 받음
                // 수식어 추가
                if (binding.modifiers['some']) {}

                // vnode : vue 컴파일러가 만든 버추얼 노드
            }
        }
    }

});
```


디렉티브 훅 | 설명
---|---
bind     | 디렉티브가 처음 요소에 바인딩 될 때 한 번만 호출
inserted | 바인딩된 요소가 부모 노드에 삽입될 경우 호출
update   | 포함된 컴포넌트가 업데이트된 경우 호출  
componentUpdated | 포함된 컴포넌트와 컴포넌트 자식들이 업데이트된 경우 호출  
unbind   | 디렉티브가 요소에서 언바인딩 될 때 한 번만 호출  



[top](#)
