import { createElement } from 'react';

var styles = {"flat-light":"_styles-module__flat-light__37uGn","inputLight":"_styles-module__inputLight__5gfdI","button":"_styles-module__button__2hTXI","buttonDark":"_styles-module__buttonDark__2kUFE","buttonSecondary":"_styles-module__buttonSecondary__1Gipg","buttonMain":"_styles-module__buttonMain__1iiPs","linkAnimated":"_styles-module__linkAnimated__vrVpH","link":"_styles-module__link__71S8l","iconButton":"_styles-module__iconButton__2570K","navbarBtnActive":"_styles-module__navbarBtnActive__1W0H_","navbarBtnActiveDark":"_styles-module__navbarBtnActiveDark__9TPHE","navbarBtn":"_styles-module__navbarBtn__2gBhj","iconButtonDark":"_styles-module__iconButtonDark__1vMvm","navbarBtnDark":"_styles-module__navbarBtnDark__1_LN9","rounded":"_styles-module__rounded__3gdqJ","input":"_styles-module__input__2IYfc","inputDark":"_styles-module__inputDark__2johG"};

const Button = ({
  text,
  onClick,
  variant,
  rounded
}) => {
  const classname = {
    light: styles.button,
    dark: styles.buttonDark,
    main: styles.buttonMain,
    highlight: styles.buttonHighlight,
    highlightdark: styles.buttonHighlightDark
  };
  return createElement("button", {
    className: `${variant ? classname[variant] : classname.light} ${rounded ? styles.rounded : ''}`,
    onClick: onClick
  }, text);
};

const Link = ({
  text,
  link,
  variant
}) => {
  const classname = {
    light: styles.link,
    dark: styles.linkDark,
    animated: styles.linkAnimated
  };
  return createElement("a", {
    className: `${variant ? classname[variant] : classname.light}`,
    onClick: () => window.open(link, '_blank')
  }, text);
};

const IconButton = ({
  icon,
  onClick,
  variant,
  rounded
}) => {
  const classname = {
    light: styles.iconButton,
    dark: styles.iconButtonDark
  };
  return createElement("button", {
    className: `${variant ? classname[variant] : classname.light} ${rounded ? styles.rounded : ''}`,
    onClick: onClick
  }, icon);
};

const NavbarBtn = ({
  icon,
  text,
  onClick,
  variant,
  rounded
}) => {
  const classname = {
    light: styles.navbarBtn,
    dark: styles.navbarBtnDark,
    active: styles.navbarBtnActive,
    activeDark: styles.navbarBtnActiveDark
  };
  return createElement("button", {
    className: `${variant ? classname[variant] : classname.light} ${rounded ? styles.rounded : ''}`,
    onClick: onClick
  }, icon, variant && variant.includes('active') ? text : null);
};

const Input = ({
  text,
  setText,
  variant,
  placeholder
}) => {
  const classname = {
    light: styles.input,
    dark: styles.inputDark
  };
  return createElement("input", {
    type: 'text',
    className: `${variant ? classname[variant] : classname.light}`,
    value: text,
    onChange: e => setText(e.target.value),
    placeholder: placeholder || 'Enter text'
  });
};

export { Button, IconButton, Input, Link, NavbarBtn };
//# sourceMappingURL=index.modern.js.map
