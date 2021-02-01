# JS Map
: 키/값을 쌍으로 하는 컬렉션 객체   
: Object와 달리 요소의 삽입 순서 보장   

https://tc39.es/ecma262/#sec-map-objects


프로퍼티 | 설명
---|---
constructor |
size        | 요소 개수 반환


**메소드**
- Map.prototype.clear()
- Map.prototype.delete()
- Map.prototype.entries()
- Map.prototype.forEach()
- Map.prototype.get()
- Map.prototype.has()
- Map.prototype.set()
- Map.prototype.values()

ex.
```js
var map = new Map();

map.set('key', 'value');
(map.get('key') === 'value') == true

(map.size === 1) == true
map.has('key') == true
map.delete('key') ==  true
map.clear()
```



## Map.prototype.entries()
: Map 객체의 요소를 Iterator 객체로 반환   

```js
var map = new Map([
    ['a', 1], ['b', 2], ['c', 3]
]);

var iterator = map.entries();
(iterator.toString() === '[object Map Iterator]') == true
```



## Map.prototype.forEach()
: 주어진 콜백 함수를 Map 객체의 요소에 적용

> Map.prototype.forEach(callback [, thisArg])

```js
var map = new Map([
    ['a', 1], ['b', 2], ['c', 3]
]);

map.forEach( (value, key, map) => {
    console.log(`${key} : ${value}`);
});
```



## Map.prototype.values()
: Map 객체의 요소에 대한 값을 Iterator 객체로 반환   

```js
var map = new Map([
    ['a', 1], ['b', 2], ['c', 3]
]);

var iterator = map.values();
(iterator.toString() === '[object Map Iterator]') == true
```



[top](#)
