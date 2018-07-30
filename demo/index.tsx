import React from 'react';
import ReactDOM from 'react-dom';
import Checkbox from '../src';

interface State {
    checked: number | boolean;
}

class APP extends React.Component<{}, State> {
    constructor(props) {
        super(props);

        this.state = {
            checked: false,
        };

        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(data): void {
        console.log(data);
    }

    render() {
        return (
            <div>
                <Checkbox
                    id="test"
                    name="Checkbox"
                    checked={this.state.checked}
                    onChange={this.handleOnChange}
                />
            </div>
        );
    }
}

ReactDOM.render(
    <APP />,
    document.getElementById('root'),
);
