import * as React from 'react'
import styles from '../styles.module.css'

interface FooterProps {
  variant?: 'light' | 'dark' | 'twitter'
  text: string
  onClick?: () => void
}

export const FooterButton = ({ variant, text, onClick }: FooterProps) => {
  const classname: any = {
    light: styles.footerButton,
    dark: styles.footerButtonDark,
    twitter: styles.footerButtonTwitter
  }
  return (
    <button
      className={`${variant ? classname[variant] : classname.light}`}
      onClick={onClick}
    >
      {variant !== 'twitter' ? (
        text
      ) : (
        <svg
          width='18'
          height='15'
          viewBox='0 0 18 15'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M16.4715 1.58279C15.7229 1.94959 14.9893 2.09856 14.2258 2.32388C13.3866 1.37693 12.1425 1.32453 10.947 1.77218C9.75153 2.21983 8.96852 3.31424 8.98574 4.5696V5.31818C6.55662 5.38031 4.39324 4.27392 2.99715 2.32388C2.99715 2.32388 -0.133389 7.88803 5.99144 10.5582C4.59011 11.4917 3.19253 12.1212 1.5 12.0553C3.97628 13.405 6.67489 13.8691 9.01119 13.1909C11.6911 12.4124 13.8934 10.404 14.7385 7.39547C14.9906 6.48046 15.1158 5.53516 15.1106 4.58607C15.1091 4.39968 16.2409 2.51102 16.4715 1.58204V1.58279Z'
            fill='white'
            stroke='white'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      )}
    </button>
  )
}
