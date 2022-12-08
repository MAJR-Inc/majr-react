import * as React from 'react'
import styles from '../styles.module.css'

interface StepsProps {
  current: number
  total: number
  variant?: 'light' | 'dark'
}
interface StepsBarProps {
  active: boolean
  theme?: 'light' | 'dark'
}
interface StepsNumberProps {
  number: number
  active: boolean
  theme?: 'light' | 'dark'
}
export const StepsBar = ({ active, theme }: StepsBarProps) => (
  <div
    className={`${theme === 'dark' ? styles.stepsBarDark : styles.stepsBar} ${
      active ? styles.stepsBarActive : ''
    }`}
  />
)

export const StepsNumber = ({ number, active, theme }: StepsNumberProps) => {
  return (
    <div
      className={`${
        theme === 'dark' ? styles.stepsNumberDark : styles.stepsNumber
      } `}
    >
      <div
        className={`${styles.stepsNumberInner} ${
          active ? styles.stepsNumberInnerActive : ''
        }`}
      >
        {number}
      </div>
    </div>
  )
}

export const Steps = ({ current, total, variant }: StepsProps) => {
  // Place a bar between each step and the last number has a bar on the right
  return (
    <div className={variant === 'dark' ? styles.stepsDark : styles.steps}>
      <StepsBar active={current > 0} theme={variant} />
      {Array.from(Array(total).keys()).map((step) => (
        <React.Fragment key={step}>
          <StepsNumber
            number={step + 1}
            active={current >= step + 1}
            theme={variant}
          />
          {step < total - 1 && (
            <StepsBar active={current > step + 1} theme={variant} />
          )}
        </React.Fragment>
      ))}
      <StepsBar active={false} theme={variant} />
    </div>
  )
}
