# Vue Lifecycle Hooks
vue 인스턴스는 정의된 초기화 단계를 거치는데 이를 라이프사이클이라고 하며         
이때 호출되는 특정 함수를 라이프사이클 훅이라고 함


**단계**
- [Creation](#creation) -- Initialization
- [Mounting](#mounting) -- DOM Insertion
- [Updating](#updating) -- Diff & Re-render
- [Destruction](#destruction) -- Teardown



## Creation  

- beforeCreate : vue 인스턴스 생성 전 호출
- created  : vue 인스턴스 생성 후 호출


**beforeCreate()**   
: vue 인스턴스 초기화 직후 호출   
: data, methods, computed, watch 등 속성과 이벤트에 접근 불가    


**created()**   
: vue 인스턴스 생성 직후 호출   
: data, methods, computed, watch 등 속성과 이벤트 접근 가능   
: 데이터 처리, 계산된 속성, 이벤트 등을 위해 사용   
: 마운트 직전이므로 DOM 접근 불가능      



## Mounting
: 초기 렌더링시 호출되는 메소드   
: SSR에서는 호출되지 않음     

- beforeMount : vue 인스턴스가 DOM에 마운트되기 직전 호출
- mounted : vue 인스턴스가 DOM에 마운트된 직후 호출


**beforeMount()**    
: vue 인스턴스가 DOM에 마운트되기 직전에 호출      
: 가상 DOM은 생성되었으나 실제 DOM에 연결되지 않은 상태      
: 마운트 직전이므로 DOM 접근 불가능       


**mounted()**    
: vue 인스턴스가 DOM에 마운트된 직후 호출   
: 가상 DOM의 내용이 실제 DOM에 마운트되고 template이 화면에 렌더링된 상태       
: data, computed, methods, watch 등 모든 속성에 접근이 가능   



## Updating
: 재 렌더링시 호출되는 메소드   
: SSR에서는 호출되지 않음     

- beforeUpdate : 데이터 변경, 가상 DOM 재 렌더링, 패치되기 전 호출    
- updated : 데이터 변경, 가상 DOM 재 렌더링, 패치된 후 호출    


**beforeUpdate()**   
: 데이터 변경, 가상 DOM 재 렌더링, 패치되기 전 호출     
: 데이터 변경전 이벤트처리에 사용하기 적합   


**updated()**   
: 데이터 변경, 가상 DOM 재 렌더링, 패치된 후 호출    
: 속성 변경 후 DOM에 접근이 필요한 경우 사용   



## Destruction

- beforeDestroy : Vue 인스턴스 파괴되기 직전 호출
- destroyed : Vue 인스턴스 파괴된 직후 호출



[top](#)
