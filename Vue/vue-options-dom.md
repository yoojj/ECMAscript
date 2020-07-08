# Vue Options DOM

- [Data](./vue-options-data.md)
- DOM
    - [el](#el)
    - [template](#template)
    - [render](#render)
    - [renderError](#rendererror)
- [Assets](./vue-options-assets.md)
- [Composition](./vue-options-composition.md)
- [Misc](./vue-options-misc.md)



## el
: vue 인스턴스와 연결될 DOM 요소를 지정하는 속성   

```html
<div id="app">
    <!-- vue 인스턴스 유효 범위 -->
</div>

<script>
    var vm = new Vue({
    el : '#app',
    el : app,
});

(vm.$el === document.getElementById('app')) == true


// 인스턴스 생성 후 마운트  
new Vue({
}).$mount('#app')
</script>
```



## template
: 마크업으로 사용될 문자열을 정의하는 속성   
: template 속성 사용시 el 속성과 마운트된 요소를 대체       
: template 속성에 정의된 요소는 render() 함수를 통해 가상 DOM으로 변환   

```html
<div id="app">
    <v-template></v-template>
</div>

<script>
new Vue({

    el : app,

    template : `<div id="template"></div>`,

});
</script>
```



## render
: VNode(가상 DOM Node)를 반환   
: pre-compile, compiler-included build   

```html
<div id="app">
</div>

<script>
var compiled = Vue.compile(`<p>{{ date }}</p>`);

new Vue({

    el : app,

    data() {
        return {
            date : new Date(),
        }
    },

    /*
    render(createElement) {
        var self = this;
        return createElement('p', {
            domProps: {
                innerText : 'date : ' + self.date,
            },
            attrs : {
                style : 'css-test'
            },
            style : {
                color: 'red',
            },
        });
    },
    */

    // vue 컴파일러에 의해 컴파일  
    render(createElement) {
        return compiled.render.call(this, createElement);
    },

});
</script>
```



## renderError
: render 속성에 오류가 발생할 경우 오류 출력을 위해 사용하는 속성   
: 개발 모드에서만 사용       

```html
<div id="app">
</div>

<script>
new Vue({

    el : app,

    render(createElement) {
        throw new Error('render');
    },

    renderError (createElement, error) {
        return createElement('pre', { style: { color: 'red' }}, error.stack);
    },

});
</script>
```



[top](#)
