import * as React from 'react'
import styles from '../../styles.module.css'
import { FooterButton } from '../FooterButton'

interface FooterProps {
  variant?: 'light' | 'dark'
  links: [string, string][]
  twitter?: string
}

export const Footer = ({ variant, links, twitter }: FooterProps) => {
  const classname: any = {
    light: styles.footer,
    dark: styles.footerDark
  }
  return (
    <footer className={`${variant ? classname[variant] : classname.light}`}>
      <section>
        {links.map((link, index) => (
          <FooterButton
            key={index}
            onClick={() => window.open(link[1], '_blank')}
            text={link[0]}
            variant={variant}
          />
        ))}
      </section>
      <section>
        {twitter ? (
          <FooterButton
            onClick={() => window.open(twitter, '_blank')}
            text='Twitter'
            variant='twitter'
          />
        ) : null}
      </section>
    </footer>
  )
}
