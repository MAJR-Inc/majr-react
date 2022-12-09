import * as React from 'react'
import styles from '../styles.module.css'

interface FlatBoxProps {
  variant?: 'light' | 'dark'
  width: string
  height: string
  children: React.ReactNode
}

export const FlatBox = ({ variant, width, height, children }: FlatBoxProps) => {
  const classname: any = {
    light: styles.flatBox,
    dark: styles.flatBoxDark
  }
  return (
    <div
      className={`${variant ? classname[variant] : classname.light}`}
      style={{
        width: width,
        height: height
      }}
    >
      {children}
    </div>
  )
}
