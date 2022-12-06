import * as React from 'react'
import styles from '../styles.module.css'

interface ProfileProps {
  variant?: 'light' | 'dark'
  url: string
  alt?: string
  size?: 'sm' | 'md' | 'lg'
}

export const Profile = ({ variant, url, alt, size }: ProfileProps) => {
  const classname: any = {
    light: styles.profile,
    dark: styles.profileDark
  }
  const getSize = () => {
    let res = '30px'
    if (size === 'md') res = '50px'
    if (size === 'lg') res = '70px'

    return res
  }
  return (
    <div className={`${variant ? classname[variant] : classname.light}`}>
      <img
        src={url}
        alt={alt || 'Profile'}
        style={{
          width: getSize(),
          height: getSize()
        }}
      />
    </div>
  )
}
