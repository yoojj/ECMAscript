# Vue
: 사용자 인터페이스를 위한 JS 프레임워크       
: 빠른 데이터 바인딩 목적      
: 단방향 및 양방향 데이터 바인딩 지원        
: Reactive, Virtual DOM, Component 기반  


**+ Reactive**          
: vue는 데이터 객체의 상태를 감시하고 변경이 감지되면 이를 컴포넌트에 알리고 View 업데이트    
https://github.com/yoojj/CS/blob/master/Program/Paradigm/reactive-programming.md

**+ Virtual DOM**     
: vue는 업데이트 된 가상 DOM을 이전 가상 DOM과 비교해 수정 된 부분만 화면에 렌더링     
https://github.com/yoojj/ECMAScript/blob/master/@etc/virtual-dom.md

**+ Web Component**      
https://github.com/yoojj/Web/blob/master/web-component.md


- [Vue Install](#vue-install)
- [Vue Instance](./vue-instance.md)
- [Vue Built-in Directives](./vue-directives.md)
- [Vue Component](./vue-component.md)
- [Vue Global API](./vue-global-api.md)
- Vue Options API
    - [Vue Lifecycle Hooks](./vue-lifecycle-hooks.md)
    - [Data](./vue-options-data.md)
    - [Dom](./vue-options-dom.md)
    - [Assets](./vue-options-assets.md)
    - [Composition](./vue-options-composition.md)
    - [Misc](./vue-options-misc.md)
- [Vue Composition API](./vue-composition.md)
- [Vue Library](./vue-lib/)
- Vue Framework
    - [Nuxt](./Nuxt/)
    - [Quasar](./Quasar/)
    - Ream
    - Weex -- 모바일



## Vue Install

**CDN**  

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


**CLI**

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
