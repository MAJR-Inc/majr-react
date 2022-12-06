import * as React from 'react'
import styles from '../styles.module.css'

interface FooterProps {
  variant?: 'light' | 'dark'
  text: string
  onClick?: () => void
}

export const FooterButton = ({ variant, text, onClick }: FooterProps) => {
  const classname: any = {
    light: styles.footerButton,
    dark: styles.footerButtonDark
  }
  return (
    <button
      className={`${variant ? classname[variant] : classname.light}`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}
