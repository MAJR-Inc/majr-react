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
}

export const Button = ({ text, onClick, variant, rounded, icon, iconPosition, className, size, altFont }: ButtonProps) => {
  const classname: any = {
    light: styles.button,
    dark: styles.buttonDark,
    main: styles.buttonMain,
    highlight: styles.buttonHighlight,
    highlightdark: styles.buttonHighlightDark,
    green: styles.buttonGreen,
  }
  const sizesClassNames: any = {
    small: styles.buttonSm,
    normal: styles.buttonMd,
    fillWidth: styles.buttonFill,
  }
  return (
    <button
      className={`${variant ? classname[variant] : classname.light} ${
        rounded ? styles.rounded : ''
      } ${className || ''} ${size ? sizesClassNames[size] : ''} ${
        altFont ? styles.altFont : ''}  
      `}
      onClick={onClick}
    >
      {
        iconPosition === 'left' && icon
      }
      {text}
      {
        iconPosition === 'right' && icon
      }
    </button>
  )
}
