var React = require('react');

var styles = {"flat-light":"_37uGn","inputLight":"_5gfdI","button":"_2hTXI","buttonDark":"_2kUFE","buttonSecondary":"_1Gipg","buttonMain":"_1iiPs","linkAnimated":"_vrVpH","link":"_71S8l","iconButton":"_2570K","navbarBtnActive":"_1W0H_","navbarBtnActiveDark":"_9TPHE","navbarBtn":"_2gBhj","iconButtonDark":"_1vMvm","navbarBtnDark":"_1_LN9","rounded":"_3gdqJ","input":"_2IYfc","inputDark":"_2johG"};

var Button = function Button(_ref) {
  var text = _ref.text,
    onClick = _ref.onClick,
    variant = _ref.variant,
    rounded = _ref.rounded;
  var classname = {
    light: styles.button,
    dark: styles.buttonDark,
    main: styles.buttonMain,
    highlight: styles.buttonHighlight,
    highlightdark: styles.buttonHighlightDark
  };
  return React.createElement("button", {
    className: (variant ? classname[variant] : classname.light) + " " + (rounded ? styles.rounded : ''),
    onClick: onClick
  }, text);
};

var Link = function Link(_ref) {
  var text = _ref.text,
    link = _ref.link,
    variant = _ref.variant;
  var classname = {
    light: styles.link,
    dark: styles.linkDark,
    animated: styles.linkAnimated
  };
  return React.createElement("a", {
    className: "" + (variant ? classname[variant] : classname.light),
    onClick: function onClick() {
      return window.open(link, '_blank');
    }
  }, text);
};

var IconButton = function IconButton(_ref) {
  var icon = _ref.icon,
    onClick = _ref.onClick,
    variant = _ref.variant,
    rounded = _ref.rounded;
  var classname = {
    light: styles.iconButton,
    dark: styles.iconButtonDark
  };
  return React.createElement("button", {
    className: (variant ? classname[variant] : classname.light) + " " + (rounded ? styles.rounded : ''),
    onClick: onClick
  }, icon);
};

var NavbarBtn = function NavbarBtn(_ref) {
  var icon = _ref.icon,
    text = _ref.text,
    onClick = _ref.onClick,
    variant = _ref.variant,
    rounded = _ref.rounded;
  var classname = {
    light: styles.navbarBtn,
    dark: styles.navbarBtnDark,
    active: styles.navbarBtnActive,
    activeDark: styles.navbarBtnActiveDark
  };
  return React.createElement("button", {
    className: (variant ? classname[variant] : classname.light) + " " + (rounded ? styles.rounded : ''),
    onClick: onClick
  }, icon, variant && variant.includes('active') ? text : null);
};

var Input = function Input(_ref) {
  var text = _ref.text,
    setText = _ref.setText,
    variant = _ref.variant,
    placeholder = _ref.placeholder;
  var classname = {
    light: styles.input,
    dark: styles.inputDark
  };
  return React.createElement("input", {
    type: 'text',
    className: "" + (variant ? classname[variant] : classname.light),
    value: text,
    onChange: function onChange(e) {
      return setText(e.target.value);
    },
    placeholder: placeholder || 'Enter text'
  });
};

exports.Button = Button;
exports.IconButton = IconButton;
exports.Input = Input;
exports.Link = Link;
exports.NavbarBtn = NavbarBtn;
//# sourceMappingURL=index.js.map
