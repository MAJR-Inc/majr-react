/* eslint-disable prettier/prettier */
import * as React from 'react'
import styles from '../styles.module.css'

interface ButtonProps {
  text: string
  onClick: () => void
  variant?: 'light' | 'dark' | 'main' | 'highlight' | 'highlightdark'
  rounded?: boolean
}

export const Button = ({ text, onClick, variant, rounded }: ButtonProps) => {
  const classname: any = {
    light: styles.button,
    dark: styles.buttonDark,
    main: styles.buttonMain,
    highlight: styles.buttonHighlight,
    highlightdark: styles.buttonHighlightDark
  }
  return (
    <button
      className={`${variant ? classname[variant] : classname.light} ${
        rounded ? styles.rounded : ''
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}
