import * as React from 'react'
import styles from '../styles.module.css'

interface TagProps {
  theme?: 'light' | 'dark'
  icon?: any
  text: string
  color?: string
  onClick?: () => void
  className?: string
  disabled?: boolean
}

export const Tag = ({
  theme,
  icon,
  text,
  onClick = () => {},
  color,
  className,
  disabled
}: TagProps) => {
  const classname: any = {
    light: styles.tag,
    dark: styles.tagDark
  }
  if (!color) color = theme === 'dark' ? '#f9f9f9' : '#171717'
  const handleClick = () => {
    if (!disabled) onClick()
  }
  return (
    <button
      className={`${theme ? classname[theme] : classname.light} ${
        className || ''
      } ${disabled ? styles.disabled : ''}`}
      onClick={handleClick}
      style={{ color: color }}
    >
      {text}
      {icon || null}
    </button>
  )
}
