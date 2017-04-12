"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styles_1 = require("./styles");
class Panel extends React.Component {
    render() {
        const _a = this.props, { children } = _a, rest = __rest(_a, ["children"]);
        return (React.createElement(styles_1.PanelStyled, Object.assign({}, rest), children));
    }
}
Panel.defaultProps = {
    footer: "",
    dismissable: false,
    type: "primary"
};
exports.default = Panel;
//# sourceMappingURL=index.js.map