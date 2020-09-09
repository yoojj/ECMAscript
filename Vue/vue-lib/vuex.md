# Vuex
: flux 패턴을 구현한 상태 관리 라이브러리    
: 컴포넌트 간 공유되는 데이터를 단일 위치에 보관해 처리   
: 컴포넌트는 단일 위치를 통해 데이터에 접근하며 데이터 충돌 방지를 위해 데이터 복사본을 만들면 안됨   


구성 | 설명
---|---
state     | 데이터 상태로 데이터를 저장하는 객체  
getters   | 데이터 상태를 계산하는 객체
mutations | 데이터 상태를 변경하는 객체
actions   | 비동기 코드 실행하는 객체


ex.

```js
// vuex
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({

    state: {
        obj: null,
    },

    mutations: {
        setObj(state, data){
            state.obj = data;
        }
    },

    actions: {
        GET_OBJ({dispatch, commit, state}, data) {
            commit(setObj, data);
        }
    },

    getters: {
        getObj(state){
            return state.obj.toString();
        }
    },

});


// vue
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {

    computed: {
        getObj(){
            return this.$store.state.obj;
        },

        mapState({
            obj: state => state.obj,
        })
    },

}
```
