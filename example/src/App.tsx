import React from 'react'

import { Button, IconButton, Input, Link, NavbarBtn } from 'majr-react'
import 'majr-react/dist/index.css'

const App = () => {
  const tg = (
    <svg
      width='16'
      height='14'
      viewBox='0 0 16 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M10.25 5.5L7.25 8.5L11.75 13L14.75 1L1.25 6.25L4.25 7.75L5.75 12.25L8 9.25'
        stroke='#279FDA'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
  const award = (
    <svg
      width='30'
      height='30'
      viewBox='0 0 30 30'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clip-path='url(#clip0_2_690)'>
        <path
          d='M15 18.75C19.1421 18.75 22.5 15.3921 22.5 11.25C22.5 7.10786 19.1421 3.75 15 3.75C10.8579 3.75 7.5 7.10786 7.5 11.25C7.5 15.3921 10.8579 18.75 15 18.75Z'
          stroke='#DE1149'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M15.0025 18.7538L19.2525 26.1163L21.25 22.075L25.7475 22.365L21.4975 15.0038'
          stroke='#DE1149'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M8.5025 15.0038L4.2525 22.3663L8.75 22.075L10.7475 26.115L14.9975 18.7538'
          stroke='#DE1149'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_2_690'>
          <rect width='30' height='30' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
  const [theme, setTheme] = React.useState(false)
  React.useEffect(() => {
    //Toggle theme on spaceboard press
    window.addEventListener('keydown', (e) => {
      if (e.code === 'Space') {
        setTheme(!theme)
      }
    })
  }, [theme])
  const [username, setUsername] = React.useState('')
  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: theme ? '#33383D' : '#f9f9f9'
      }}
    >
      <Button onClick={() => {}} text='Main btn' variant='main' />
      <br />
      <Button onClick={() => {}} text='Dark btn' variant='dark' />
      <br />
      <Button onClick={() => {}} text='Light btn' />
      <br />
      <Link text='Link - Def.' link='https://github.com' />
      <Link text='Animated' link='https://github.com' variant='animated' />
      <br />
      <IconButton onClick={() => {}} icon={tg} variant='light' />
      <br />
      <IconButton onClick={() => {}} icon={tg} variant='dark' />
      <br />
      <IconButton onClick={() => {}} icon={tg} variant='light' rounded={true} />
      <br />
      <NavbarBtn
        onClick={() => {}}
        icon={award}
        text='Navbar btn'
        variant='light'
      />
      <br />
      <NavbarBtn
        onClick={() => {}}
        icon={award}
        text='Navbar btn'
        variant='dark'
      />
      <br />
      <NavbarBtn
        onClick={() => {}}
        icon={award}
        text='Navbar btn'
        variant='active'
      />
      <br />
      <NavbarBtn
        onClick={() => {}}
        icon={award}
        text='Navbar btn'
        variant='activeDark'
      />
      <br />
      <Input
        text={username}
        setText={setUsername}
        placeholder='Enter username'
        variant='light'
      />
      <br />
      <Input
        text={username}
        setText={setUsername}
        placeholder='Enter username'
        variant='dark'
      />
    </section>
  )
}

export default App
