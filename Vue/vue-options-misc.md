# Vue Options Misc

- [Data](./vue-options-data.md)
- [Dom](./vue-options-dom.md)
- [Assets](./vue-options-assets.md)
- [Composition](./vue-options-composition.md)
- Misc
    - [name](#name)
    - [delimiters](#delimiters)
    - [functional](#functional)
    - model
    - inheritAttrs
    - comments



## name
: 컴포넌트 이름 등록

```html
<div id="app">
</div>

<script>
new Vue({

    name : 'vue',

    el : app,

    created() {
        console.log(this.$options.name === 'vue');
    },

});
</script>
```



## delimiters
: 구분 기호 설정

```html
<div id="app">
    <% obj %>
</div>

<script>
new Vue({

    el : app,

    delimiters : ['<%', '%>'],

    data() {
        return {
            obj : {
                str : 'string',
                num : 'number',
            }        
        }
    },

});
</script>
```



## functional
: 함수형 컴포넌트   
: data 속성과 컨텍스트 없음   

```html
<div id="app">
    <component-name v-bind:text-content.prop="obj"></component-name>
</div>

<script>
var child = {

    functional : true,

    render(createElement, context) {
        return createElement('p', JSON.stringify(context.data.domProps.textContent));
    },

};

new Vue({

    el : app,

    data() {
        return {
            obj : {
                str : 'string',
                num : 'number',
            }        
        }
    },

    components : {
        'component-name' : child,
    },

});
</script>


<!-- SFC -->
<template functional>
</template>

<script>
export default {}
</script>
```



[top](#)
