import * as React from 'react'
import styles from '../styles.module.css'

interface CheckboxProps {
  checkbox: boolean[]
  setCheckbox: (target: boolean[]) => void
  index: number
  variant?: 'light' | 'dark'
}

export const Checkbox = ({
  checkbox,
  setCheckbox,
  index,
  variant
}: CheckboxProps) => {
  const classname: any = {
    light: styles.checkbox,
    dark: styles.checkboxDark
  }
  const handleClick = () => {
    // Invert the clicked one
    setCheckbox(checkbox.map((r, i) => (i === index ? !r : r)))
  }

  return (
    <div
      className={`${variant ? classname[variant] : classname.light}`}
      onClick={() => handleClick()}
    >
      <div
        className={
          checkbox[index]
            ? styles.checkbox__innerActive
            : styles.checkbox__inner
        }
      />
    </div>
  )
}
