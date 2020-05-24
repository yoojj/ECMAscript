# JS JSON

**JSON**    
JavaScript Object Notation       
: 데이터 저장 및 전송을 위한 형식     


- [JSON.parse()](#jsonparse)
- [JSON.stringify()](#jsonstringify)



## JSON.parse()
: json 문자열을 파싱하여 js 값이나 객체로 변환

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
: js 값이나 객체를 json 문자열로 직렬화  

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
