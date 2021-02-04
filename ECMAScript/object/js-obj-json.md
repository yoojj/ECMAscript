# JS JSON

https://tc39.es/ecma262/#sec-json-object


**메소드**
- [JSON.parse()](#jsonparse)
- [JSON.stringify()](#jsonstringify)



## JSON.parse()
: 전달된 문자열을 JSON으로 파싱하여 JS 데이터로 반환  

> JSON.parse(text [, reviver])

```js
var json = `{
    "num" : 0,
    "str" : "string",
    "result" : true
}`;

var obj = JSON.parse(json);
(obj.num === 0) == true
```



## JSON.stringify()
: JS 데이터를 JSON 문자열로 직렬화하고 반환   

> JSON.stringify(value [, replacer [, space]])

```js
var obj = {
    num: 0,
    str: 'string',
    result: true,
};

var json = JSON.stringify(obj);
(json.toString() === '{"num":0,"str":"string","result":true}') == true
```



[top](#)
