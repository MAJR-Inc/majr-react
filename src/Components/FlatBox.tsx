import * as React from 'react'
import styles from '../styles.module.css'

interface FlatBoxProps {
  variant?: 'light' | 'dark'
  width: string
  height: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

export const FlatBox = ({
  variant,
  width,
  height,
  children,
  className,
  onClick = () => {},
  onMouseEnter = () => {},
  onMouseLeave = () => {}
}: FlatBoxProps) => {
  const classname: any = {
    light: styles.flatBox,
    dark: styles.flatBoxDark
  }
  return (
    <div
      className={`${variant ? classname[variant] : classname.light} ${
        className || ''
      }`}
      style={{
        width: width,
        height: height
      }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  )
}
