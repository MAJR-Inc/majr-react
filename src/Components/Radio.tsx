import * as React from 'react'
import styles from '../styles.module.css'

interface RadioProps {
  radio: boolean[]
  setRadio: (target: boolean[]) => void
  index: number
  variant?: 'light' | 'dark'
}

export const Radio = ({ radio, setRadio, index, variant }: RadioProps) => {
  const classname: any = {
    light: styles.radio,
    dark: styles.radioDark
  }
  const handleClick = () => {
    // Set all to false, then set the clicked one to true
    const newRadio = radio.map(() => false)
    newRadio[index] = true
    setRadio(newRadio)
  }

  return (
    <div
      className={`${variant ? classname[variant] : classname.light}`}
      onClick={() => handleClick()}
    >
      <div
        className={
          radio[index] ? styles.radio__innerActive : styles.radio__inner
        }
      />
    </div>
  )
}
