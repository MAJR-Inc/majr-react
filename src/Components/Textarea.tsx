import * as React from 'react'
import styles from '../styles.module.css'

interface InputProps {
  text: string
  setText: (text: string) => void
  variant?: 'light' | 'dark'
  placeholder?: string
  className?: string
  disabled?: boolean
}

export const Textarea = ({
  text,
  setText,
  variant,
  placeholder,
  className,
  disabled
}: InputProps) => {
  const classname: any = {
    light: styles.textarea,
    dark: styles.textareaDark
  }
  return (
    <textarea
      className={`${variant ? classname[variant] : classname.light} ${
        className || ''
      } ${disabled ? styles.disabled : ''}`}
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder={placeholder || 'Enter text'}
    />
  )
}
