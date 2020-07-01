# Vue Options Composition

- [Data](./vue-options-data.md)
- [Dom](./vue-options-dom.md)
- [Assets](./vue-options-assets.md)
- Composition
    - [parent](#parent)
    - [mixins](#mixins)
    - [extends](#extends)
    - [provide/inject](#provideinject)
- [Misc](./vue-options-misc.md)



## parent
: 상위 인스턴스 지정   

```html
<div id="app">
</div>

<script>
var vm = new Vue({

    name : 'parent',

    el : app,

    components : {
        child
    },

    created() {
        console.log(this.$children);
    }

});

var child = new Vue({

    name : 'child',

    parent : vm,

    created() {
        console.log(this.$parent);
        console.log(this.$parent.$options.name === 'parent');
    },

});
</script>
```



## mixins
: 공통 기능이나 재사용 가능한 기능을 분리해 믹스인으로 묶어 사용    

**mixins vs component(extends)**   
: 컴포넌트는 구조-레이아웃같은 html 요소의 재사용에 적합하며  
&nbsp; 믹스인은 비슷한 기능을 재사용하기에 적합    
: 두 속성의 속성이 중첩될 경우 해당 속성은 컴포넌트 속성을 우선 순위로 병합됨   

**mixins vs plugins**  
: 플러그인은 전역으로 사용될 기능을 묶기에 적합  


```html
<div id="app">
    {{ obj }}
</div>

<script>
var Mixin = {
    data : () => ({
        obj : {
            str : 'string',
        }
    }),

    created() {
        console.log('mixin created!');
        this.method();
    },

    methods : {
        method() {
            console.log('mixin method!');
        }
    },
};

var vm = new Vue({

    el : app,

    data : () => ({
        obj : {
            num : 'number',
        }
    }),

    mixins : [Mixin],

    created() {
        console.log('component created!');
        this.method();
    },

    methods : {
        method() {
            console.log('component method!');
        }
    },

});
</script>
```



## extends
: 컴포넌트 확장   

**extends vs mixins**    
: 컴포넌트 확장은 단일 상속만 가능하며 믹스인은 다중 상속 가능   


```html
<div id="app">
</div>

<script>
var Component = {
    data : () => ({
        obj : {
            str : 'string',
        }
    }),

    template : `
        <div>
            <p>{{ obj }}</p>
        </div>
    `,

    created() {
        console.log('component created!');
        this.method();
    },

    methods : {
        method() {
            console.log('component method!');
        }
    },
};

new Vue({

    el : app,

    data : () => ({
        obj : {
            num : 'number',
        }
    }),

    extends : Component,

    created() {
        console.log('created');
        this.method();
    },

    methods : {
        method() {
            console.log('method');
        }
    },
});
</script>
```



## provide/inject



[top](#)
