# Vue Router
: 라우팅 기능을 지원하는 라이브러리    
: 요정 URL에 따라 DOM을 변경   


태그 | 설명
---|---
router-link to="url" | url에 따라 컴포넌트 이동
router-view          | url에 따라 컴포넌트 표현  


```html
<div id="app">
    <nav>
        <router-link to="/">home</router-link>
        <router-link to="/page">page</router-link>
    </nav>
    <hr>

    <div>
        <router-view></router-view>
    </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
<script>
var home = {
    template : '<p>home</p>',
}

var page = {
    template : '<p>page</p>',
}

var router = new VueRouter({
    // history 모드
    // mode : 'history',
    
    routes : [
        { path: '/', component : home },
        { path: '/page', component : page },
    ],
});

new Vue({

    el : app,
    router

});
</script>
```
