# Vue Lifecycle Hooks
vue 인스턴스는 정의된 초기화 단계를 거치는데 이를 라이프사이클이라고 하며         
이때 호출되는 특정 함수를 라이프사이클 훅이라고 함


**단계**
- [Creation](#creation) -- Initialization
- [Mounting](#mounting) -- DOM Insertion
- [Updating](#updating) -- Diff & Re-render
- [Destruction](#destruction) -- Teardown


```js
/* vue.js */
var LIFECYCLE_HOOKS = [
    'beforeCreate',
    'created',
    'beforeMount',
    'mounted',
    'beforeUpdate',
    'updated',
    'beforeDestroy',
    'destroyed',
    'activated',
    'deactivated',
    'errorCaptured'
];
```



## Creation  

```
/* vue.js */
initLifecycle(vm);
initEvents(vm);
initRender(vm);
callHook(vm, 'beforeCreate');
initInjections(vm);
initState(vm);
initProvide(vm);
callHook(vm, 'created');

- beforeCreate : vue 인스턴스 생성 직전 호출
- created  : vue 인스턴스 생성 직후 호출
```

**beforeCreate()**   
: vue 인스턴스 초기화 직후 호출   
: data, methods 등 속성과 이벤트에 접근 불가    


**created()**   
: vue 인스턴스 생성 직후 호출   
: data, methods 등 속성과 이벤트 접근 가능   
: 마운트 직전이므로 template 속성에 정의된 요소에 접근 불가         
: 데이터 처리, 계산된 속성, 이벤트 등을 위해 사용    



## Mounting
: 초기 렌더링시 호출되는 메소드   
: SSR에서는 호출되지 않음     

```
- beforeMount : vue 인스턴스가 실제 DOM에 마운트되기 직전 호출
- mounted : vue 인스턴스가 실제 DOM에 마운트된 직후 호출
```


**beforeMount()**    
: vue 인스턴스가 실제 DOM에 마운트되기 직전에 호출       
: 가상 DOM은 생성되었으나 실제 DOM에 연결되지 않은 상태       
: 마운트 직전이므로 template 속성에 정의된 요소에 접근 불가             


**mounted()**    
: vue 인스턴스가 실제 DOM에 마운트된 직후 호출   
: 가상 DOM의 내용이 실제 DOM에 연결되고 template이 화면에 렌더링된 상태       
: template이 화면에 렌더링되었다는 보장이 없을 경우 $nextTick 사용   
: data, computed, methods, watch 등 모든 속성에 접근이 가능   



## Updating
: 여러 이유로 재 렌더링시 호출되는 메소드   
: SSR에서는 호출되지 않음     

```
- beforeUpdate : 데이터 변경, 가상 DOM 재 렌더링, 패치되기 전 호출    
- updated : 데이터 변경, 가상 DOM 재 렌더링, 패치된 후 호출    
```


**beforeUpdate()**   
: 데이터 변경, 가상 DOM 재 렌더링, 패치되기 전 호출     
: 데이터 변경전이므로 데이터 변경을 위한 로직을 사용하기 적합   


**updated()**   
: 데이터 변경, 가상 DOM 재 렌더링, 패치된 후 호출    
: 데이터 변경후이므로 데이터와 관련된 UI 처리나 로직에 사용하기 적합  



## Destruction

```
- beforeDestroy : vue 인스턴스 제거 직전 호출
- destroyed : vue 인스턴스 제거 직후 호출
```



[top](#)
