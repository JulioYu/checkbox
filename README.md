# checkbox


## Table of Contents

* [Installation](#installation)
* [API documentation](#api-documentation)
* [Examples](#examples)

## Installation

You can use [npm](https://npmjs.org/) to install:

    $ npm install https://github.com/JulioYu/icons


## API documentation

```jsx

<Checkbox
  /*
    Key value of checkbox.
  */
  id={id}

  /*
    Displaying text of checkbox.
  */
  name={name}

  /*
    Boolean describing for the checkbox status.
  */
  checked={checked}

  /*
    Boolean describing if the checkbox is disabled or not.
  */
  disabled={disabled}

  /*
    Optional. You can change the style if you want.
  */
  className={className}

  /*
    Function that will be run when the checkbox has been clicked.
  */
  onChange={handleOnChange}
/>

```

## Examples

Here is a simple example of checkbox:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Checkbox from 'checkbox';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      checked: false
    };

    this.handleCheck = this.handleCheck.bind(this);
  }

  handleCheck(status) {
    this.setState({
      checked: status
    });
  }

  render() {
    const { node } = this.props;

    return (
      <div>
        <Checkbox
          id={node.id}
          name={node.name}
          checked={this.state.checked}
          onChange={this.handleCheck}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, appElement);
```
