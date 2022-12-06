import * as React from 'react'
import styles from '../styles.module.css'

interface SwitchProps {
  value: boolean
  setSwitch: (target: boolean) => void
}

export const ThemeSwitch = ({ value, setSwitch }: SwitchProps) => {
  return (
    <div
      className={`${!value ? styles.switch : styles.switchDark}`}
      onClick={() => setSwitch(!value)}
    >
      <div
        className={!value ? styles.switch__innerActive : styles.switch__inner}
      >
        <svg
          width='19'
          height='19'
          viewBox='0 0 19 19'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M9.4612 12.6924C11.1605 12.6924 12.5381 11.3148 12.5381 9.6155C12.5381 7.91616 11.1605 6.53857 9.4612 6.53857C7.76186 6.53857 6.38428 7.91616 6.38428 9.6155C6.38428 11.3148 7.76186 12.6924 9.4612 12.6924Z'
            stroke='#f9f9f9'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M2.53821 9.61558H3.30744M9.46128 2.6925V3.46174M15.6151 9.61558H16.3844M9.46128 15.7694V16.5387M4.53821 4.6925L5.07667 5.23097M14.3844 4.6925L13.8459 5.23097M13.8459 14.0002L14.3844 14.5387M5.07667 14.0002L4.53821 14.5387'
            stroke='#f9f9f9'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </div>
      <div
        className={value ? styles.switch__innerActive : styles.switch__inner}
      >
        <svg
          width='20'
          height='19'
          viewBox='0 0 20 19'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M9.92312 2.69243C10.0247 2.69243 10.1254 2.69243 10.2254 2.69243C9.23722 3.61067 8.60203 4.84616 8.43026 6.18414C8.25849 7.52212 8.56101 8.878 9.28522 10.0161C10.0094 11.1541 11.1096 12.0025 12.3943 12.4136C13.6791 12.8247 15.0674 12.7725 16.3177 12.2663C15.8368 13.4236 15.0506 14.4286 14.0433 15.1742C13.0359 15.9197 11.845 16.3778 10.5977 16.4997C9.35032 16.6215 8.09332 16.4024 6.96072 15.8658C5.82813 15.3292 4.86243 14.4953 4.16665 13.4529C3.47086 12.4105 3.07108 11.1988 3.00995 9.94703C2.94882 8.69525 3.22864 7.45035 3.81955 6.34514C4.41047 5.23992 5.29032 4.31584 6.36524 3.67146C7.44017 3.02708 8.66985 2.68658 9.92312 2.68628V2.69243Z'
            stroke={!value ? '#171717' : '#f9f9f9'}
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </div>
    </div>
  )
}

interface SwitchProps2 {
  value: boolean
  setSwitch: (target: boolean) => void
  variant?: 'light' | 'dark'
}
export const SwitchComponent = ({
  value,
  setSwitch,
  variant
}: SwitchProps2) => {
  return (
    <div
      className={`${variant === 'light' ? styles.switch2 : styles.switch2Dark}`}
      onClick={() => setSwitch(!value)}
    >
      <div
        className={value ? styles.switch2__innerActive : styles.switch2__inner}
      />
    </div>
  )
}
