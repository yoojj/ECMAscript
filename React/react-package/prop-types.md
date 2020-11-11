# prop-types

```bash
# https://www.npmjs.com/package/prop-types
$ npm install prop-types
```

ex.
```js
import PropTypes from 'prop-types';

class CustomComponent extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>{ this.props.key }</div>
        );
    }
}

CustomComponent.defaultProps = {
    key: 'value'
}

CustomComponent.propTypes = {
    key: PropTypes.string
}
```

- PropTypes.bool
- PropTypes.number
- PropTypes.string
- PropTypes.symbol
- PropTypes.object
- PropTypes.array
- PropTypes.func
- PropTypes.element
- PropTypes.node
- PropTypes.instanceOf()
- PropTypes.oneOf()
- PropTypes.arrayOf()
- PropTypes.objectOf()
- PropTypes.shape()



[top](#)
