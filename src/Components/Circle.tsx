import React from 'react'
import styles from '../styles.module.css'

interface CircleProps {
  variant: 'yellow' | 'blue' | 'red'
  icon: any
  active: boolean
  onClick: () => void
  className?: string
  disabled?: boolean
}

export const Circle = ({
  variant,
  icon,
  active,
  onClick,
  className,
  disabled
}: CircleProps) => {
  const classes = {
    yellow: styles.circleYellow,
    blue: styles.circleBlue,
    red: styles.circleRed
  }
  return (
    <button
      className={`${classes[variant]} ${active ? styles.circleActive : ''} ${
        className || ''
      } ${disabled ? styles.disabled : ''}
      `}
      onClick={onClick}
    >
      {icon}
    </button>
  )
}
