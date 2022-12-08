import * as React from 'react'
import styles from '../styles.module.css'

interface ProgressProps {
  variant?: 'light' | 'dark'
  width: string
  value: number
  max: number
}

export const Progress = ({ variant, value, max, width }: ProgressProps) => {
  const classname: any = {
    light: styles.progress,
    dark: styles.progressDark
  }
  const wrapperClass: any = {
    light: styles.progressWrapper,
    dark: styles.progressWrapperDark
  }
  return (
    <div
      className={`${variant ? wrapperClass[variant] : wrapperClass.light}`}
      style={{
        width: width
      }}
    >
      <div
        className={`${variant ? classname[variant] : classname.light}`}
        style={{
          width: (value / max) * 100 + '%'
        }}
      />
    </div>
  )
}

export const ProgressWDashes = ({
  variant,
  value,
  max,
  width
}: ProgressProps) => {
  const classname: any = {
    light: styles.progress,
    dark: styles.progressDark
  }
  const wrapperClass: any = {
    light: styles.progressWrapper,
    dark: styles.progressWrapperDark
  }
  return (
    <div
      className={`${variant ? wrapperClass[variant] : wrapperClass.light}`}
      style={{
        width: width
      }}
    >
      <div
        className={`${variant ? classname[variant] : classname.light}`}
        style={{
          width: (value / max) * 100 + '%'
        }}
      />
      <section className={styles.progressWrapper__lines}>
        {[...Array(7)].map((_, i) => (
          <div key={i} />
        ))}
      </section>
    </div>
  )
}
