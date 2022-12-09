import * as React from 'react'
import styles from '../../styles.module.css'

import { Button } from '../Button'
import { ThemeSwitch } from '../Switch'

interface NavbarProps {
  theme: boolean
  variant?: 'theme' | 'buttons'
  buttons?: [string, string][]
  setTheme: (target: boolean) => void
}

export const Navbar = ({ theme, variant, buttons, setTheme }: NavbarProps) => {
  const [open, setOpen] = React.useState<boolean>(false)
  const NavbarContent = () => (
    <section>
      {variant === 'theme' ? (
        <ThemeSwitch value={theme} setSwitch={setTheme} />
      ) : variant === 'buttons' ? (
        buttons?.map((button, index) => (
          <Button
            key={index}
            text={button[0]}
            onClick={() =>
              window?.open(button[1], '_blank', 'noopener,noreferrer')
            }
            variant={theme ? 'dark' : 'light'}
          />
        ))
      ) : null}
    </section>
  )
  return (
    <nav className={`${theme ? styles.navbarDark : styles.navbarLight}`}>
      <section>
        <h2>
          MAJR <b>DAO</b>
        </h2>
        {!open ? (
          <svg
            onClick={() => setOpen(!open)}
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            strokeWidth='2'
            stroke={theme ? '#f9f9f9' : '#171717'}
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <line x1='4' y1='6' x2='20' y2='6' />
            <line x1='4' y1='12' x2='20' y2='12' />
            <line x1='4' y1='18' x2='20' y2='18' />
          </svg>
        ) : (
          <svg
            onClick={() => setOpen(!open)}
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            strokeWidth='2'
            stroke={theme ? '#f9f9f9' : '#171717'}
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <line x1='18' y1='6' x2='6' y2='18' />
            <line x1='6' y1='6' x2='18' y2='18' />
          </svg>
        )}
      </section>
      <NavbarContent />
      {open && <section />}
      {open ? <NavbarContent /> : null}
    </nav>
  )
}
