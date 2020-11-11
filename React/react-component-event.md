# React Component Event


## mouse event

**onClick**
```js
function btnClick(e){
    e.preventDefault();
}

return (
    <>
        <button type="button" onClick={ btnClick }>click</button>
    </>
);
```



## form event

```js
const [text, setText] = React.useState('');

function formValid(invalidFields, fields, form){
}

function inputOn(e){
    setText(e.target.value)
}

function inputChange(e){
    setText(e.target.value)
}

function inputSubmit(e){
    e.preventDefault();
}

return (
    <form onInvalid={ formValid }>
        <input type="text" onInput={ inputOn } />
        <input type="text" onChange={ inputChange } />
        <input type="submit" onSubmit={ inputSubmit } />
        <button type="button" onReset={ btnReset}>reset</button>
    </form>
);
```



[top](#)
