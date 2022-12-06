import * as React from 'react'
import styles from '../styles.module.css'

interface ImageProps {
  variant?: 'light' | 'dark'
  url: string
  alt?: string
  width?: number
  height?: number
}

export const Image = ({ variant, url, alt, width, height }: ImageProps) => {
  const classname: any = {
    light: styles.image,
    dark: styles.imageDark
  }
  return (
    <div className={`${variant ? classname[variant] : classname.light}`}>
      <img
        src={url}
        alt={alt || 'Image'}
        style={{
          width: width + 'px',
          height: height + 'px'
        }}
      />
    </div>
  )
}
