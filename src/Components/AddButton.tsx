import * as React from 'react'
import styles from '../styles.module.css'

interface AddButtonProps {
  onClick?: () => void
  disabled?: boolean
}

export const AddButton = ({ onClick, disabled }: AddButtonProps) => {
  return (
    <button
      className={`${styles.addButton} ${disabled ? styles.disabled : ''}`}
      onClick={onClick}
    >
      <svg
        width='17'
        height='17'
        viewBox='0 0 17 17'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g clipPath='url(#clip0_229_730)'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M9.5 3.54175C9.5 2.98946 9.05228 2.54175 8.5 2.54175C7.94772 2.54175 7.5 2.98946 7.5 3.54175V7.5H3.54199C2.98971 7.5 2.54199 7.94772 2.54199 8.5C2.54199 9.05228 2.98971 9.5 3.54199 9.5H7.5V13.4584C7.5 14.0107 7.94772 14.4584 8.5 14.4584C9.05228 14.4584 9.5 14.0107 9.5 13.4584V9.5H13.4587C14.0109 9.5 14.4587 9.05228 14.4587 8.5C14.4587 7.94772 14.0109 7.5 13.4587 7.5H9.5V3.54175Z'
            fill='#F9F9F9'
          />
        </g>
        <defs>
          <clipPath id='clip0_229_730'>
            <rect width='17' height='17' fill='white' />
          </clipPath>
        </defs>
      </svg>
    </button>
  )
}
