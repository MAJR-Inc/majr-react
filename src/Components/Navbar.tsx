/* eslint-disable prettier/prettier */
import * as React from 'react'
import styles from '../styles.module.css'

interface ButtonProps {
  icon: any
  text: string
  onClick: () => void
  variant?: 'light' | 'dark' | 'active' | 'activeDark'
  rounded?: boolean
}

export const NavbarBtn = ({
  icon,
  text,
  onClick,
  variant,
  rounded
}: ButtonProps) => {
  const classname: any = {
    light: styles.navbarBtn,
    dark: styles.navbarBtnDark,
    active: styles.navbarBtnActive,
    activeDark: styles.navbarBtnActiveDark
  }
  return (
    <button
      className={`${variant ? classname[variant] : classname.light} ${
        rounded ? styles.rounded : ''
      }`}
      onClick={onClick}
    >
      {icon}
      {variant && variant.includes('active') ? text : null}
    </button>
  )
}
