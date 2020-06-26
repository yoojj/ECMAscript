# Vue Component

- [컴포넌트 등록](#컴포넌트-등록)
- [컴포넌트 생성](#컴포넌트-생성)
- [컴포넌트 통신](#컴포넌트-통신)



## 컴포넌트 등록

```js
// 전역 컴포넌트
Vue.component('global-component-name', {
    template : '',
});


// 지역 컴포넌트
var LocalComponent = {
    template : '',
};

new Vue({
    components : {
        'local-component-name' : LocalComponent
    }
});
```



## 컴포넌트 생성

**string template**

```js
new Vue({
    components : {
        'v-component' : {
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
        'v-component' : Component
    }
});
```


**x-template**

```html
<script type="text/x-template" id="v-component">
</script>

<script>
new Vue({
    template: '#v-component',
});
</script>
```


**inline-template**

```html
<v-component inline-template>
</v-component>

<script>
Vue.component('v-component', {
});
</script>
```


**JSX**

```js
Vue.component('v-component', {
    render(){
        // JSX
        return {
            <div>
                <p>컴포넌트</p>
            </div>
        }
    }
})
```


**SFC**   
: single file component

```html
<!-- v-component.vue -->
<template>
    <div>
        <p>컴포넌트</p>
    </div>
</template>

<style scoped>
</style>

<script>
export default {
    name : 'v-component',
}
</script>


<!-- 전역 등록 -->
<script>
import VComponent from './components/v-component.vue'

Vue.component(VComponent.name, VComponent);
</script>


<!-- 지역 등록 -->
<template>
    <div id="app">
        <v-component></v-component>
    </div>
</template>

<script>
import VComponent from './components/v-component.vue'

export default {
    name : 'app',
    components : {  
        VComponent
    }
}
</script>
```



## 컴포넌트 통신

- props : 부모 -> 자식
- events($emit) : 자식 -> 부모
- event bus
