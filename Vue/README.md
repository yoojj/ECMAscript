# Vue
: 사용자 인터페이스를 위한 JS 프레임워크       
: 빠른 데이터 바인딩 목적      
: 단방향 및 양방향 데이터 바인딩 지원        
: Virtual DOM, Component, Reactivity 기반  

[+ Virtual DOM](../@etc/virtual-dom.md)   
[+ Web Component](https://github.com/yoojj/Web/blob/master/web-component.md)

**Reactivity**  
: 객체의 상태를 감시해 변경을 감지하고 객체의 변경이 감지되면 변경을 알려 자동으로 업데이트함        


- [Vue Global API](./vue-global-api.md)
- [Vue Instance](./vue-instance.md)
- Vue Options
    - [Vue Lifecycle Hooks](./vue-lifecycle-hooks.md)
    - [Vue Options API](./vue-options-api.md)
        - Assets
            - [Directives](./vue-directives.md)
            - [Components](./vue-components.md)
            - [Filters](./vue-filters.md)
- [Vue Library](./vue-lib/)
- Vue Framework
    - [Nuxt](./Nuxt/)
    - [Ream](./Ream/)
    - [Quasar](./Quasar/)
    - Weex



## Vue CDN

```html
<div id="vue">
    <p>{{ msg + msg }}</p>
    <p v-text="msg"></p>
</div>



<!--
<script type="module">
import Vue from 'https://cdn.jsdelivr.net/npm/vue/dist/vue.esm.browser.js'
</script>
-->

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
new Vue({

    el : '#vue',

    data : {
        msg : 'vue!',
    },

});
</script>
```



## Vue CLI

```bash
# 설치
$ sudo npm install vue vue-cli -g


# 생성
## vue-cli 2
$ vue init webpack [프로젝트]

## vue-cli 3
$ vue create [프로젝트]
```



[top](#)
