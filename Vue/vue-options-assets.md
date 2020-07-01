# Vue Options Assets

- [Data](./vue-options-data.md)
- [DOM](./vue-options-dom.md)
- Assets
    - [directives](./vue-directives.md)
    - [components](./vue-components.md)
    - [filters](./vue-filters.md)
- [Composition](./vue-options-composition.md)
- [Misc](./vue-options-misc.md)



## directives
: vue 디렉티브 생성

```js
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



## components
: vue 컴포넌트 생성

```html
<div id="app">
    <component-name :val="str"></component-name>
</div>

<script>
new Vue({

    el: app,

    data: () => ({
        str : 'string',
    }),

    components : {
        'component-name' : {
            props: ['val'],
            template : '<p v-text="val"></p>',
        }
    },

});
</script>
```



## filters
: data 속성의 데이터를 직접 변경하지 않고 렌더링시 필터를 통해 데이터 형식만 바꿔 출력   
: 전역 필터와 지역 필터 이름이 같을 경우 지역 필터가 우선 순위가 더 높음

```html
<div id="app">

    <input v-bind:value="str | filter" readonly>
    <p v-bind:text-content.prop="str | filter"></p>
    <p>{{ str | filter }}</p>
    <p>{{ str }}</p>

</div>

<script>
new Vue({

    el: app,

    data: () => ({
        str : 'string',
    }),

    filters : {
        filter(val) {
            if(!val) return '';
            return val.toUpperCase();
        }
    },

});
</script>
```



[top](#)
