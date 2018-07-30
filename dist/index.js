"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var classNames = require('classnames/bind');
var css = require('./style.css');
;
;
var Checkbox = (function (_super) {
    __extends(Checkbox, _super);
    function Checkbox(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChange = _this.handleChange.bind(_this);
        _this.state = {
            checked: props.checked || false,
        };
        return _this;
    }
    Checkbox.prototype.handleChange = function (evt) {
        var props = this.props;
        var status = (this.state.checked) ? false : true;
        if (props.disabled)
            return;
        this.setState({ checked: status });
        props.onChange(status);
    };
    Checkbox.prototype.componentWillReceiveProps = function (props) {
        this.setState({
            checked: props.checked
        });
    };
    Checkbox.prototype.render = function () {
        var _a = this.props, className = _a.className, id = _a.id, name = _a.name, disabled = _a.disabled, _b = _a.width, width = _b === void 0 ? 0 : _b;
        var styles = classNames.bind(css);
        var checkedStatus = 0;
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
        var checkboxClassName = styles({
            "checkbox": (!className),
            className: (className)
        });
        var checkedClassName = styles({
            "checkbox_icon_ok": (checkedStatus == 1),
            "checkbox_icon_half": (checkedStatus == 2),
            "checkbox_icon_empty": (checkedStatus == 0)
        });
        var mainStyle = {
            width: (width) ? width + "px" : 'auto',
        };
        return (react_1.default.createElement("div", { className: checkboxClassName, role: "button", style: mainStyle, onClick: this.handleChange },
            react_1.default.createElement("div", { className: checkedClassName }),
            react_1.default.createElement("span", { style: { maxWidth: width ? width - 20 + "px" : 'unset' } }, name)));
    };
    return Checkbox;
}(react_1.default.Component));
exports.default = Checkbox;
//# sourceMappingURL=index.js.map