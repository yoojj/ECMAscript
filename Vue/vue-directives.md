# Vue Directives

지시자 | 설명
---|---
v-text    | 요소의 textContent 업데이트
v-html    | 요소의 innerHTML 업데이트
v-once    | 요소나 컴포넌트를 한 번만 렌더링
v-pre     | 컴파일하지 않고 그대로 출력
v-show    | 요소가 렌더링이 된 상태에서 boolean 값에 따라 화면에 출력 여부 결정  
v-cloak   | 렌더링되기 전에는 요소를 숨기고 렌더링 후 v-cloak 속성이 제거되고 화면에 출력
v-bind    | 요소의 속성에 단방향으로 데이터 바인딩
v-model   | form 관련 요소와 컴포넌트에 양방향 데이터 바인딩
v-on      | 이벤트 핸들링
v-if      | vue 조건문
v-else    | vue 조건문
v-else-if | vue 조건문
v-for     | vue 반복문  
v-slot    | 기존 slot, slot-scope 속성 대체   
v-el      | 제거
v-ref     | 제거



## v-text, v-html

```html
<div id="app">

    <p v-text="text"></p>
    <p>{{ text }}</p>

    <div v-html="html"></div>

</div>

<script>
new Vue({

    el : app,

    data : () => ({
        text : 'text content',
        html : `<p style="color:red;">content</p>`,
    }),

});
</script>
```



## v-show, v-clock

```html
<div id="app">

    <p v-show="false">{{ show }}</p>

    <div v-coack>{{ clock }}</div>

</div>

<style>
div [v-clock] {display:none;}
</style>

<script>
new Vue({

    el : app,

    created() {
        setTimeout(() => {
            this.show = 'v-show';
            this.clock = 'v-clock';
        }, 1500);
    },

    data: () => ({
        show : '',
        clock : '',
    }),

});
</script>
```



## v-bind

```html
<div id="app">

    <img v-bind:src="img" v-bind:alt="alt" v-bind:title="title">
    <img :src="img" :alt="alt" :title="title">

    <p :style="style">bind</p>
    <p :style="[style, style2]">bind</p>

    <p :style="isActiveStyle ? 'color:red' : 'color:blue'">bind</p>
    <div :class="{wrap : isActiveStyle}">bind</div>

    <div :style="{display:['-webkit-box', '-ms-flexbox', 'flex']}">bind</div>

</div>

<script>
new Vue({

    el: app,

    data: () => ({

        img : 'https://via.placeholder.com/150',
        alt : 'image alt',
        title : 'image title',
        style : {
            fontSize : '30px',
            color : 'red',
        },
        style2 : {
            color : 'blue',
        },
        isActiveStyle : true,

    }),

});
</script>
```


수식어 | 설명
---|---
prop  |
camel |
sync  |



## v-model

```html
<div id="app">

    <input v-model="inputText" type="text">
    <p>{{ inputText }}</p>

    <div>
        <label for="checkbox">{{ inputCheckbox }}</label>
        <input type="checkbox" id="checkbox" v-model="inputCheckbox">
    </div>

    <div>
        <label for="true">true</label>
        <input type="radio" id="true" value="true" v-model="inputRadio">
        <label for="false">false</label>
        <input type="radio" id="false" value="false" v-model="inputRadio">
        <output name="radioResult" for="true false">{{ inputRadio }}</output>
    </div>

    <select id="selectOption" v-model="select">
        <option value="" disabled>select!</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
    </select>
    <output for="selectOption">{{ select }}</output>

    <div>
        <input type="text" v-model.lazy="modifier.lazy" placeholder="lazy">
        <p>{{ modifier.lazy }}</p>

        <input type="number" v-model.number="modifier.number">
        <p>{{ modifier.number }}</p>

        <input type="text" v-model.trim="modifier.trim" placeholder="trim">
        <p>{{ modifier.trim }}</p>
    </div>

</div>

<script>
new Vue({

    el: app,

    data: () => ({

        inputText : '',
        inputCheckbox : false,
        inputRadio : '',
        select : '',
        modifier : {
            trim : '',
            lazy : '',
            number : 0,
        }

    }),

});
</script>
```

수식어 | 설명
---|---
lazy   | change 이벤트 발생 후 동기화  
number | 입력된 데이터를 숫자 타입으로 변환
trim   | 입력한 데이터의 앞과 뒤 공백 제거



## v-on

```html
<div id="app">

    <div>
        <button type="button" id="btnCount" v-on:click="++count">count</button>
        <button type="button" v-on:click="countEvent">count</button>
        <button type="button" @click="countEvent">count</button>
        <output for="btnCount">{{ count }}</output>
        <button type="button" @click="countEventReset">count reset</button>
    </div>

    <button type="button" @click="btnAlert('실행', $event)">alert</button>

    <div>
        <input type="text" v-on:keydown="keyboardEvent($event)">
        <output>{{ keyboard }}</output>
    </div>

</div>

<script>
new Vue({

    el: app,

    data: () => ({
        count : 0,
        keyboard : '',
    }),

    methods : {
        countEvent() {
             ++this.count;
        },

        countEventReset() {
            this.count = 0;
        },

        btnAlert(val, e) {
            alert(val);
            console.log(e);
        },

        keyboardEvent(e) {
            this.keyboard = e.keyCode;
        },
    },

});
</script>
```


**이벤트 수식어**

수식어 | 설명
---|---
stop     | stopPropagation() 호출
prevent  | preventDefault() 호출
capture  | 캡처 모드에서 이벤트 리스너 추가  
self     | 이벤트 근원지가 해당 요소일 때 이벤트 실행  
once     | 이벤트 한 번만 실행  
native   |
passive  | 이벤트 취소 불가  


**마우스 이벤트 수식어**   
- left     
- middle   
- right


**키보드 이벤트 수식어**   
- ctrl
- alt
- shift
- meta
- enter
- tab
- delete
- esc
- space
- up
- down
- left
- right



## v-if

```html
<div id="app">

    <p v-if="isTrue">true</p>
    <p v-else>false</p>

</div>

<script>
new Vue({

    el: app,

    data: () => ({
        isTrue : true,
    }),

});
</script>
```



## v-slot

```html
<div id="app">

    <component-name :val="str">
        <template v-slot:test-slot>
            <span>slot!</span>
        </template>
    </component-name>

</div>

<script>
new Vue({

    el: app,

    data: () => ({
        str : 'string',
    }),

    components : {
        'component-name' : {
            props: ['val'],
            template : `
                <div>
                    <p v-text="val"></p>
                    <slot name="test-slot"></slot>
                </div>
            `,
        }
    },

});
</script>
```



[top](#)
