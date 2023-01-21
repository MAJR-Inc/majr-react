/* eslint-disable prettier/prettier */
import * as React from 'react'
import styles from '../styles.module.css'

interface ButtonProps {
  text: string
  onClick: () => void
  variant?: 'light' | 'dark' | 'main' | 'highlight' | 'highlightdark' | 'green'
  rounded?: boolean
  icon?: React.ReactElement
  iconPosition?: 'right' | 'left'
  className?: string
  size?: 'small' | 'normal' | 'fillWidth'
  altFont?: boolean
  color?: 'yellow' | 'blue' | 'red' | 'green' | 'black'
  disabled?: boolean
}

export const ButtonShadow = ({
  text,
  onClick,
  variant,
  rounded,
  icon,
  iconPosition,
  className,
  size,
  altFont,
  color,
  disabled
}: ButtonProps) => {
  const classname: any = {
    light: styles.buttonShadow,
    dark: styles.buttonShadowDark
  }
  const colors: any = {
    yellow: styles.buttonShadowYellow,
    blue: styles.buttonShadowBlue,
    red: styles.buttonShadowRed,
    green: styles.buttonShadowGreen,
    black: styles.buttonShadowBlack
  }
  const sizesClassNames: any = {
    small: styles.buttonSm,
    normal: styles.buttonMd,
    fillWidth: styles.buttonFill
  }
  return (
    <button
      className={`${variant ? classname[variant] : classname.light} ${
        rounded ? styles.rounded : ''
      } ${className || ''} ${size ? sizesClassNames[size] : ''} ${
        altFont ? styles.altFont : ''
      } ${color ? colors[color] : ''}  
        ${disabled ? styles.disabled : ''}
      `}
      onClick={onClick}
    >
      {iconPosition === 'left' && icon}
      {text}
      {iconPosition === 'right' && icon}
    </button>
  )
}
