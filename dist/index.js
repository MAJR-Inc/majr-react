var React = require('react');

var styles = {"flat-light":"_styles-module__flat-light__37uGn","inputLight":"_styles-module__inputLight__5gfdI","button":"_styles-module__button__2hTXI","buttonDark":"_styles-module__buttonDark__2kUFE","buttonSecondary":"_styles-module__buttonSecondary__1Gipg","buttonMain":"_styles-module__buttonMain__1iiPs","linkAnimated":"_styles-module__linkAnimated__vrVpH","link":"_styles-module__link__71S8l","iconButton":"_styles-module__iconButton__2570K","navbarBtnActive":"_styles-module__navbarBtnActive__1W0H_","navbarBtnActiveDark":"_styles-module__navbarBtnActiveDark__9TPHE","navbarBtn":"_styles-module__navbarBtn__2gBhj","iconButtonDark":"_styles-module__iconButtonDark__1vMvm","navbarBtnDark":"_styles-module__navbarBtnDark__1_LN9","rounded":"_styles-module__rounded__3gdqJ","inputWrapper":"_styles-module__inputWrapper__1V-hJ","input":"_styles-module__input__2IYfc","textarea":"_styles-module__textarea__24IuX","inputDark":"_styles-module__inputDark__2johG","textareaDark":"_styles-module__textareaDark__2tmLN","textareaproperties":"_styles-module__textareaproperties__b3Ocf","radio":"_styles-module__radio__kkn6a","spotlight":"_styles-module__spotlight__1SOsU","spotlightDark":"_styles-module__spotlightDark__2YjhR","checkbox":"_styles-module__checkbox__3kknd","checkboxDark":"_styles-module__checkboxDark__2eX8z","radioDark":"_styles-module__radioDark__3QjCQ","radio__inner":"_styles-module__radio__inner__2t5pY","spotlight__inner":"_styles-module__spotlight__inner__hynTg","spotlight__innerActive":"_styles-module__spotlight__innerActive__1WUYa","checkbox__inner":"_styles-module__checkbox__inner__3O63b","radio__innerActive":"_styles-module__radio__innerActive__1y9gd","checkbox__innerActive":"_styles-module__checkbox__innerActive__2nnyc","select__inner":"_styles-module__select__inner__K4kjf","select__innerDark":"_styles-module__select__innerDark__3oq5m","select__options":"_styles-module__select__options__2OWeN","select__optionsDark":"_styles-module__select__optionsDark__2fH9V"};

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
    dark: styles.inputDark,
    password: styles.input,
    passwordDark: styles.inputDark,
    search: styles.input,
    searchDark: styles.inputDark
  };
  var _React$useState = React.useState(false),
    seePass = _React$useState[0],
    setSeePass = _React$useState[1];
  return React.createElement("section", {
    className: "" + styles.inputWrapper
  }, React.createElement("input", {
    type: variant !== null && variant !== void 0 && variant.includes('password') && !seePass ? 'password' : 'text',
    className: "" + (variant ? classname[variant] : classname.light),
    value: text,
    onChange: function onChange(e) {
      return setText(e.target.value);
    },
    placeholder: placeholder || 'Enter text'
  }), variant === 'password' ? React.createElement("svg", {
    onClick: function onClick() {
      return setSeePass(!seePass);
    },
    width: '14',
    height: '11',
    viewBox: '0 0 14 11',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, React.createElement("path", {
    fillRule: 'evenodd',
    clipRule: 'evenodd',
    d: 'M7.25 9.25C5.05731 9.25 3.16279 8.02526 1.57907 5.375C3.16279 2.72474 5.05731 1.5 7.25 1.5C9.44269 1.5 11.3372 2.72474 12.9209 5.375C11.3372 8.02526 9.44269 9.25 7.25 9.25ZM7.25 0.5C4.50999 0.5 2.28697 2.11517 0.56588 5.12692C0.478035 5.28064 0.478035 5.46936 0.56588 5.62308C2.28697 8.63483 4.50999 10.25 7.25 10.25C9.99 10.25 12.213 8.63483 13.9341 5.62308C14.022 5.46936 14.022 5.28064 13.9341 5.12692C12.213 2.11517 9.99 0.5 7.25 0.5ZM6.5 5.375C6.5 4.96079 6.83578 4.625 7.25 4.625C7.66421 4.625 8 4.96079 8 5.375C8 5.78921 7.66421 6.125 7.25 6.125C6.83578 6.125 6.5 5.78921 6.5 5.375ZM7.25 3.625C6.2835 3.625 5.5 4.4085 5.5 5.375C5.5 6.3415 6.2835 7.125 7.25 7.125C8.21649 7.125 9 6.3415 9 5.375C9 4.4085 8.21649 3.625 7.25 3.625Z',
    fill: '#38383B',
    fillOpacity: '0.5'
  })) : null, variant === 'passwordDark' ? React.createElement("svg", {
    onClick: function onClick() {
      return setSeePass(!seePass);
    },
    width: '14',
    height: '11',
    viewBox: '0 0 14 11',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, React.createElement("path", {
    fillRule: 'evenodd',
    clipRule: 'evenodd',
    d: 'M7.25 9.25C5.05731 9.25 3.16279 8.02526 1.57907 5.375C3.16279 2.72474 5.05731 1.5 7.25 1.5C9.44269 1.5 11.3372 2.72474 12.9209 5.375C11.3372 8.02526 9.44269 9.25 7.25 9.25ZM7.25 0.5C4.50999 0.5 2.28697 2.11517 0.56588 5.12692C0.478035 5.28064 0.478035 5.46936 0.56588 5.62308C2.28697 8.63483 4.50999 10.25 7.25 10.25C9.99 10.25 12.213 8.63483 13.9341 5.62308C14.022 5.46936 14.022 5.28064 13.9341 5.12692C12.213 2.11517 9.99 0.5 7.25 0.5ZM6.5 5.375C6.5 4.96079 6.83578 4.625 7.25 4.625C7.66421 4.625 8 4.96079 8 5.375C8 5.78921 7.66421 6.125 7.25 6.125C6.83578 6.125 6.5 5.78921 6.5 5.375ZM7.25 3.625C6.2835 3.625 5.5 4.4085 5.5 5.375C5.5 6.3415 6.2835 7.125 7.25 7.125C8.21649 7.125 9 6.3415 9 5.375C9 4.4085 8.21649 3.625 7.25 3.625Z',
    fill: '#f9f9f9',
    fillOpacity: '0.5'
  })) : null, variant === 'search' ? React.createElement("svg", {
    width: '12',
    height: '12',
    viewBox: '0 0 12 12',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, React.createElement("path", {
    fillRule: 'evenodd',
    clipRule: 'evenodd',
    d: 'M1 4.74828C1 2.67816 2.67816 1 4.74828 1C6.81839 1 8.49655 2.67816 8.49655 4.74828C8.49655 6.81839 6.81839 8.49655 4.74828 8.49655C2.67816 8.49655 1 6.81839 1 4.74828ZM4.74828 0C2.12588 0 0 2.12588 0 4.74828C0 7.37068 2.12588 9.49655 4.74828 9.49655C5.87936 9.49655 6.91807 9.10107 7.73367 8.44084L11.0706 11.7778C11.2659 11.973 11.5824 11.973 11.7777 11.7778C11.973 11.5825 11.973 11.2659 11.7777 11.0706L8.44079 7.73374C9.10105 6.91812 9.49655 5.87939 9.49655 4.74828C9.49655 2.12588 7.37068 0 4.74828 0Z',
    fill: '#38383B',
    fillOpacity: '0.5'
  })) : null, variant === 'searchDark' ? React.createElement("svg", {
    width: '12',
    height: '12',
    viewBox: '0 0 12 12',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, React.createElement("path", {
    fillRule: 'evenodd',
    clipRule: 'evenodd',
    d: 'M1 4.74828C1 2.67816 2.67816 1 4.74828 1C6.81839 1 8.49655 2.67816 8.49655 4.74828C8.49655 6.81839 6.81839 8.49655 4.74828 8.49655C2.67816 8.49655 1 6.81839 1 4.74828ZM4.74828 0C2.12588 0 0 2.12588 0 4.74828C0 7.37068 2.12588 9.49655 4.74828 9.49655C5.87936 9.49655 6.91807 9.10107 7.73367 8.44084L11.0706 11.7778C11.2659 11.973 11.5824 11.973 11.7777 11.7778C11.973 11.5825 11.973 11.2659 11.7777 11.0706L8.44079 7.73374C9.10105 6.91812 9.49655 5.87939 9.49655 4.74828C9.49655 2.12588 7.37068 0 4.74828 0Z',
    fill: '#f9f9f9',
    fillOpacity: '0.5'
  })) : null);
};

var Textarea = function Textarea(_ref) {
  var text = _ref.text,
    setText = _ref.setText,
    variant = _ref.variant,
    placeholder = _ref.placeholder;
  var classname = {
    light: styles.textarea,
    dark: styles.textareaDark
  };
  return React.createElement("textarea", {
    className: "" + (variant ? classname[variant] : classname.light),
    value: text,
    onChange: function onChange(e) {
      return setText(e.target.value);
    },
    placeholder: placeholder || 'Enter text'
  });
};

var Radio = function Radio(_ref) {
  var radio = _ref.radio,
    setRadio = _ref.setRadio,
    index = _ref.index,
    variant = _ref.variant;
  var classname = {
    light: styles.radio,
    dark: styles.radioDark
  };
  var handleClick = function handleClick() {
    var newRadio = radio.map(function () {
      return false;
    });
    newRadio[index] = true;
    setRadio(newRadio);
  };
  return React.createElement("div", {
    className: "" + (variant ? classname[variant] : classname.light),
    onClick: function onClick() {
      return handleClick();
    }
  }, React.createElement("div", {
    className: radio[index] ? styles.radio__innerActive : styles.radio__inner
  }));
};

var Checkbox = function Checkbox(_ref) {
  var checkbox = _ref.checkbox,
    setCheckbox = _ref.setCheckbox,
    index = _ref.index,
    variant = _ref.variant;
  var classname = {
    light: styles.checkbox,
    dark: styles.checkboxDark
  };
  var handleClick = function handleClick() {
    setCheckbox(checkbox.map(function (r, i) {
      return i === index ? !r : r;
    }));
  };
  return React.createElement("div", {
    className: "" + (variant ? classname[variant] : classname.light),
    onClick: function onClick() {
      return handleClick();
    }
  }, React.createElement("div", {
    className: checkbox[index] ? styles.checkbox__innerActive : styles.checkbox__inner
  }));
};

var Spotlight = function Spotlight(_ref) {
  var clicked = _ref.clicked,
    setClicked = _ref.setClicked,
    variant = _ref.variant;
  var classname = {
    light: styles.spotlight,
    dark: styles.spotlightDark
  };
  var handleClick = function handleClick() {
    setClicked(!clicked);
  };
  return React.createElement("div", {
    className: "" + (variant ? classname[variant] : classname.light),
    onClick: function onClick() {
      return handleClick();
    }
  }, React.createElement("div", {
    className: clicked ? styles.spotlight__innerActive : styles.spotlight__inner
  }, React.createElement("svg", {
    width: '23',
    height: '23',
    viewBox: '0 0 23 23',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, React.createElement("path", {
    fillRule: 'evenodd',
    clipRule: 'evenodd',
    d: 'M12 1C12 0.447715 11.5523 0 11 0C10.4477 0 10 0.447715 10 1V1.0125C10 1.56479 10.4477 2.0125 11 2.0125C11.5523 2.0125 12 1.56479 12 1.0125V1ZM11 7C8.79086 7 7 8.79086 7 11C7 13.2091 8.79086 15 11 15C13.2091 15 15 13.2091 15 11C15 8.79086 13.2091 7 11 7ZM5 11C5 7.68629 7.68629 5 11 5C14.3137 5 17 7.68629 17 11C17 14.3137 14.3137 17 11 17C7.68629 17 5 14.3137 5 11ZM0 11C0 10.4477 0.447715 10 1 10H1.0125C1.56479 10 2.0125 10.4477 2.0125 11C2.0125 11.5523 1.56479 12 1.0125 12H1C0.447715 12 0 11.5523 0 11ZM20 11C20 10.4477 20.4477 10 21 10H21.0125C21.5648 10 22.0125 10.4477 22.0125 11C22.0125 11.5523 21.5648 12 21.0125 12H21C20.4477 12 20 11.5523 20 11ZM12 21C12 20.4477 11.5523 20 11 20C10.4477 20 10 20.4477 10 21V21.0125C10 21.5648 10.4477 22.0125 11 22.0125C11.5523 22.0125 12 21.5648 12 21.0125V21ZM3.16789 3.16789C3.55842 2.77737 4.19158 2.77737 4.58211 3.16789L4.59461 3.18039C4.98513 3.57092 4.98513 4.20408 4.59461 4.59461C4.20408 4.98513 3.57092 4.98513 3.18039 4.59461L3.16789 4.58211C2.77737 4.19158 2.77737 3.55842 3.16789 3.16789ZM18.8322 3.16794C18.4417 2.77739 17.8085 2.77735 17.4179 3.16784C17.0274 3.55834 17.0273 4.1915 17.4178 4.58206L17.4303 4.59456C17.8208 4.98511 18.454 4.98515 18.8446 4.59466C19.2351 4.20416 19.2352 3.571 18.8447 3.18044L18.8322 3.16794ZM17.4179 17.4179C17.8084 17.0274 18.4416 17.0274 18.8321 17.4179L18.8446 17.4304C19.2351 17.8209 19.2351 18.4541 18.8446 18.8446C18.4541 19.2351 17.8209 19.2351 17.4304 18.8446L17.4179 18.8321C17.0274 18.4416 17.0274 17.8084 17.4179 17.4179ZM4.58206 17.4178C4.1915 17.0273 3.55834 17.0274 3.16784 17.4179C2.77735 17.8085 2.77739 18.4417 3.16794 18.8322L3.18044 18.8447C3.571 19.2352 4.20416 19.2351 4.59466 18.8446C4.98515 18.454 4.98511 17.8208 4.59456 17.4303L4.58206 17.4178Z',
    fill: variant === 'light' && !clicked ? '#de1149' : '#f9f9f9',
    style: {
      transition: 'all 0.3s ease-in-out'
    }
  }))));
};

var Select = function Select(_ref) {
  var select = _ref.select,
    setSelect = _ref.setSelect,
    def = _ref.def,
    variant = _ref.variant;
  var _React$useState = React.useState(false),
    open = _React$useState[0],
    setOpen = _React$useState[1];
  var _React$useState2 = React.useState(-1),
    selected = _React$useState2[0],
    setSelected = _React$useState2[1];
  var handleClick = function handleClick(index) {
    setSelected(index);
    setSelect(index);
    setOpen(false);
  };
  return React.createElement("div", {
    className: styles.select
  }, React.createElement("div", {
    className: variant === 'dark' ? styles.select__innerDark : styles.select__inner,
    onClick: function onClick() {
      return setOpen(!open);
    }
  }, selected !== -1 ? select[selected] : def || 'Select', React.createElement("svg", {
    width: '12',
    height: '7',
    viewBox: '0 0 12 7',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, React.createElement("path", {
    opacity: '0.5',
    d: 'M1 1L6 6L11 1H1Z',
    fill: variant === 'dark' ? '#f9f9f9' : '#38383B',
    stroke: variant === 'dark' ? '#f9f9f9' : '#38383B',
    strokeWidth: '2',
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  }))), open && React.createElement("div", {
    className: variant === 'dark' ? styles.select__optionsDark : styles.select__options
  }, select.map(function (r, i) {
    return React.createElement("div", {
      key: i,
      className: styles.select__option,
      onClick: function onClick() {
        return handleClick(i);
      }
    }, r);
  })));
};

exports.Button = Button;
exports.Checkbox = Checkbox;
exports.IconButton = IconButton;
exports.Input = Input;
exports.Link = Link;
exports.NavbarBtn = NavbarBtn;
exports.Radio = Radio;
exports.Select = Select;
exports.Spotlight = Spotlight;
exports.Textarea = Textarea;
//# sourceMappingURL=index.js.map
