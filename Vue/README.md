# Vue
: 사용자 인터페이스를 위한 JS 프레임워크     
: MVVM 아키텍처 패턴의 ViewModel에 해당
: 빠른 데이터 바인딩 목적    
: 단방향 및 양방향 데이터 바인딩 지원      



## Vue CDN

```html
<div id="vue">
    <p>{{ msg + msg }}</p>
    <p v-text="msg"></p>
</div>



<!--
<script type="module">
import Vue from 'https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.esm.browser.js'
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
# vue-cli 2
$ vue init webpack [프로젝트]

# vue-cli 3
$ vue create [프로젝트]
```



[top](#)
