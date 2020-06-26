# Vue Global API

- [Vue.config](#vueconfig)
- [Vue.extend](#vueextend)
- [Vue.nextTick](#vuenexttick)
- [Vue.set](#vueset)
- [Vue.delete](#vuedelete)
- [Vue.directive](#vuedirective)
- [Vue.component](#vuecomponent)
- [Vue.filter](#vuefilter)
- [Vue.mixin](#vuemixin)
- [Vue.use](#vueuse)
- [Vue.compile](#vuecompile)
- [Vue.observable](#vueobservable)
- [Vue.version](#vueversion)



## Vue.config

속성 | 설명
---|---
silent          | 로그와 경고 출력 여부 지정
optionMergeStrategies |
devtools        |
errorHandler    |
warnHandler     |
ignoredElements |
keyCodes        |
performance     |
productionTip   |



## Vue.extend
: Vue 클래스를 상속해 하위 클래스 생성    

> Vue.extend({options})

```html
<div id="app">
    <p id="element"></p>
</div>

<script>

// 생성자 생성
var Some = Vue.extend({
    template : '<p>extend</p>',
});

// 인스턴스를 생성하고 요소에 마운트
new Some().$mount('#element');

</script>
```



## Vue.nextTick
: DOM 업데이트 후 실행될 콜백을 연기하기 위한 메소드

> Vue.nextTick([callback, context])

**+ Microtask**   

```html
<div id="app">
    <p>{{ value }}</p>
</div>

<script>
var vm = new Vue({

    el : '#app',

    data() {
        return {
            value : 0,
        }
    },

    created() {
        console.log(this.value === 0);
    },

    mounted() {
        console.log(this.value === 0);
    },

    updated() {
        console.log(this.value === 1);
    },

});

vm.value = 1;

Vue.nextTick(() => {
    vm.$el.textContent = 2;
});

</script>
```



## Vue.set
: 반응형 속성 추가

> Vue.set(object, key, value)

```html
<div id="app">
    <p>{{ object.value }}</p>
</div>

<script>
var vm = new Vue({

    el : '#app',

    data() {
        return {
            object : {}
        }
    },

});

Vue.set(vm.object, 'value', 1);

</script>
```



## Vue.delete
: 속성 삭제

> Vue.delete(object, key)

```html
<div id="app">
    <p>{{ object.value }}</p>
</div>

<script>
var vm = new Vue({

    el : '#app',

    data() {
        return {
            object : {}
        }
    },

});

Vue.set(vm.object, 'value', 0);

</script>
```



## Vue.directive
: 전역 디렉티브 등록

> Vue.directive(id, [definition])

[+ Vue Custom Directives](./vue-custom-directives.md)



## Vue.component
: 전역 컴포넌트 등록

> Vue.component(id, [definition])

[+ Vue Components](./vue-components.md)



## Vue.filter
: 전역 필터 등록

> Vue.filter(id, [definition])

[+ Vue Filters](./vue-filters.md)



## Vue.mixin
: 전역 믹스인 등록

> Vue.mixin({mixin})



## Vue.use
: 플러그인 등록

> Vue.use({plugin})

- 전역 속성이나 메소드  
- 전역 Assets (directives, filters, components)
- ...



## Vue.compile
: 주어진 템플릿 문자열을 렌더링 함수로 컴파일

> Vue.compile(`template`)

- render
- staticRenderFns

```html
<div id="app">
</div>

<script>
var some = Vue.compile('<p>{{ value }}</p>');

new Vue({

    el : '#app',

    data() {
        return {
            value : 0
        }
    },

    render : some.render

});
</script>
```



## Vue.observable

> Vue.observable({object})



## Vue.version
: 설치된 vue 버전을 문자열로 반환

> Vue.version



[top](#)
