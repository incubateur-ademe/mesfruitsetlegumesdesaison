"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ButtonLink;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0.8em 1.6em;\n  font-size: 1.2em;\n  text-align: center;\n  text-decoration: none;\n  color: ", ";\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 1em;\n  opacity: ", ";\n  pointer-events: ", ";\n  cursor: pointer;\n  transition: all 300ms ease-out;\n\n  &:hover {\n    background-color: ", ";\n    color: ", ";\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  ", " {\n    font-size: 1em;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents.default.a(_templateObject(), function (props) {
  return props.hollow ? props.theme.colors.main : props.theme.colors.second;
}, function (props) {
  return props.hollow ? 'transparent' : props.theme.colors.main;
}, function (props) {
  return props.theme.colors.main;
}, function (props) {
  return props.disabled ? 0.5 : 1;
}, function (props) {
  return props.disabled ? 'none' : 'inherit';
}, function (props) {
  return props.hollow ? props.theme.colors.main : props.theme.colors.main;
}, function (props) {
  return props.theme.colors.second;
}, function (props) {
  return props.theme.mq.small;
});

function ButtonLink(props) {
  return /*#__PURE__*/_react.default.createElement(Wrapper, {
    href: props.href,
    target: "_blank",
    rel: "noopener noreferrer",
    disabled: props.disabled,
    hollow: props.hollow
  }, props.children);
}

//# sourceMappingURL=ButtonLink.js.map