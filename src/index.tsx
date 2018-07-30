import React from 'react';
import classNames from 'classnames';
import 'icons';
import './style.css';

interface Props {
    id: string;
    name: string;
    className?: string;
    checked: number | boolean;
    disabled?: boolean;
    width?: number;
    onChange: (status: boolean) => void;
}

interface State {
    checked: number | boolean;
}

class Checkbox extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            checked: props.checked || false,
        };
    }

    handleChange(evt: any): void {
        const { props } = this;
        const status = (this.state.checked) ? false : true;

        if (props.disabled) return;

        this.setState({ checked: status });

        props.onChange(status);
    }

    componentWillReceiveProps(props: Props): void {
        this.setState({
            checked: props.checked,
        });
    }

    render() {
        const { className, id, name, disabled, width = 0 } = this.props;
        let checkedStatus: number = 0;

        switch (this.state.checked) {
            case true:
                checkedStatus = 1;
                break;
            case 2:
                checkedStatus = 2;
                break;
            case false:
            default:
                checkedStatus = 0;
                break;
        }

        const checkboxClassName = classNames({
            checkbox: (!className),
            className: (className),
        });
        const checkedClassName = classNames({
            checkbox_icon_ok: (checkedStatus === 1),
            checkbox_icon_half: (checkedStatus === 2),
            checkbox_icon_empty: (checkedStatus === 0),
        });

        const mainStyle = {
            width: (width) ? `${width}px` : 'auto',
        };

        return (
            <div
                className={checkboxClassName}
                role="button"
                style={mainStyle}
                onClick={this.handleChange}
            >
                <div className={checkedClassName} />
                <span style={{ maxWidth: width ? `${width - 20}px` : 'unset' }}>{name}</span>
            </div>
        );
    }
}

export default Checkbox;
