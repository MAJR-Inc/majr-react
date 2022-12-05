/* eslint-disable prettier/prettier */
import * as React from 'react'
import styles from '../styles.module.css'

interface InputProps {
  text: string
  setText: (text: string) => void
  variant?: 'light' | 'dark'
  placeholder?: string
}

export const Input = ({ text, setText, variant, placeholder }: InputProps) => {
  const classname: any = {
    light: styles.input,
    dark: styles.inputDark
  }
  return (
    <input
      type='text'
      className={`${variant ? classname[variant] : classname.light}`}
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder={placeholder || 'Enter text'}
    />
  )
}
