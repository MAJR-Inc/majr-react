import * as React from 'react'
import styles from '../styles.module.css'

interface SelectProps {
  select: string[]
  setSelect: (target: number) => void
  def: string
  variant?: 'light' | 'dark'
}

export const Select = ({ select, setSelect, def, variant }: SelectProps) => {
  const [open, setOpen] = React.useState(false)
  const [selected, setSelected] = React.useState(-1)
  const handleClick = (index: number) => {
    setSelected(index)
    setSelect(index)
    setOpen(false)
  }
  return (
    <div className={styles.select}>
      <div
        className={
          variant === 'dark' ? styles.select__innerDark : styles.select__inner
        }
        onClick={() => setOpen(!open)}
      >
        {selected !== -1 ? select[selected] : def || 'Select'}
        <svg
          width='12'
          height='7'
          viewBox='0 0 12 7'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            opacity='0.5'
            d='M1 1L6 6L11 1H1Z'
            fill={variant === 'dark' ? '#f9f9f9' : '#38383B'}
            stroke={variant === 'dark' ? '#f9f9f9' : '#38383B'}
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </div>
      {open && (
        <div
          className={
            variant === 'dark'
              ? styles.select__optionsDark
              : styles.select__options
          }
        >
          {select.map((r, i) => (
            <div
              key={i}
              className={styles.select__option}
              onClick={() => handleClick(i)}
            >
              {r}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
