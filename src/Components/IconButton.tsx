/* eslint-disable prettier/prettier */
import * as React from 'react'
import styles from '../styles.module.css'

interface ButtonProps {
  icon: any
  onClick: () => void
  variant?: 'light' | 'dark' | 'main'
  rounded?: boolean
  disabled?: boolean
}

export const IconButton = ({
  icon,
  onClick,
  variant,
  rounded,
  disabled
}: ButtonProps) => {
  const classname: any = {
    light: styles.iconButton,
    dark: styles.iconButtonDark,
    main: styles.iconButtonMain
  }
  return (
    <button
      className={`${variant ? classname[variant] : classname.light} ${
        rounded ? styles.rounded : ''
      }${disabled ? styles.disabled : ''}`}
      onClick={onClick}
    >
      {icon}
    </button>
  )
}
