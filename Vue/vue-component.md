# Vue Component

- [컴포넌트 등록](#컴포넌트-등록)
- [컴포넌트 생성](#컴포넌트-생성)
- 컴포넌트 통신
- 동적 컴포넌트
- 함수형 컴포넌트


```html
<div id="app">
    <v-component />
</div>

<script>
new Vue({

    el : app,

    components : {
        VComponent : {
            data : () => ({
                msg : 'component',
            }),
            template : '<p>{{ msg }}</p>',
        }
    },


});
</script>
```



## 컴포넌트 등록

```js
// 전역 등록
Vue.component(GlobalComponentName, {});
Vue.component('global-component-name', {});


// 지역 등록
new Vue({
    components : {  
        LocalComponentName : {},
        'local-component-name' : {},
    }
});
```



## 컴포넌트 생성  

**string template**

```js
new Vue({
    components : {
        'component-name' : {
            template : '',
        }
    }
})
```


**variable template**

```js
var Component = {
    template : '',
};

new Vue({
    components : {
        'component-name' : Component
    }
});
```



**x-template**

```html
<div id="app">
    <script type="text/x-template" id="component-name">
        <p>{{ msg }}</p>
    </script>
</div>



<script>
new Vue({

    el : app,

    data : () => ({
        msg : 'component',
    }),

    template : '#component-name',

});
</script>
```


**inline-template**

```html
<div id="app">
    <component-name inline-template>
        <p>{{ msg }}</p>
    </component-name>
</div>

<script>
new Vue({

    el : app,

    components : {
        'component-name' : {
            data : () => ({
                msg : 'component',
            }),
        },
    },
});
</script>
```


**JSX**

```html
<div id="app">
    <component-name></component-name>
</div>

<script>
new Vue({

    el : app,

    components : {
        'component-name' : {
            render(createElement) {
                return createElement('p', 'component');
            }
        },
    },
});
</script>
```


**SFC**   
: single file component   
: 컴파일 필요  

```html
<!-- component.vue -->
<template>
    <div>
        <p>컴포넌트</p>
    </div>
</template>

<style scoped>
</style>

<script>
export default {
    name : 'component-name',
}
</script>
```
