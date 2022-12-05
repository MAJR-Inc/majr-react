import React from 'react'

import {
  Button,
  Checkbox,
  IconButton,
  Input,
  Link,
  NavbarBtn,
  Radio,
  Select,
  Spotlight,
  Textarea
} from 'majr-react'
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
  const [radio, setRadio] = React.useState<boolean[]>([false, true, false])
  const [radio2, setRadio2] = React.useState<boolean[]>([false, true, false])
  const [checkbox, setCheckbox] = React.useState<boolean[]>([
    false,
    false,
    false
  ])
  const [checkbox2, setCheckbox2] = React.useState<boolean[]>([
    false,
    false,
    false
  ])
  const [spotlight, setSpotlight] = React.useState(false)
  const [select, setSelect] = React.useState(-1)
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
      <Input
        text={username}
        setText={setUsername}
        placeholder='Enter username'
        variant='dark'
      />
      <Input
        text={username}
        setText={setUsername}
        placeholder='Enter password'
        variant='password'
      />
      <Input
        text={username}
        setText={setUsername}
        placeholder='Enter password'
        variant='passwordDark'
      />
      <Input
        text={username}
        setText={setUsername}
        placeholder='Search...'
        variant='searchDark'
      />
      <Textarea text={username} setText={setUsername} placeholder='Search...' />
      <Textarea
        text={username}
        setText={setUsername}
        placeholder='Search...'
        variant='dark'
      />
      <br />
      <Radio radio={radio} setRadio={setRadio} index={0} />
      <Radio radio={radio} setRadio={setRadio} index={1} />
      <Radio radio={radio} setRadio={setRadio} index={2} />
      <br />
      <Radio radio={radio2} setRadio={setRadio2} index={0} variant='dark' />
      <Radio radio={radio2} setRadio={setRadio2} index={1} variant='dark' />
      <Radio radio={radio2} setRadio={setRadio2} index={2} variant='dark' />
      <br />
      <Checkbox checkbox={checkbox} setCheckbox={setCheckbox} index={0} />
      <Checkbox checkbox={checkbox} setCheckbox={setCheckbox} index={1} />
      <Checkbox checkbox={checkbox} setCheckbox={setCheckbox} index={2} />
      <br />
      <Checkbox
        checkbox={checkbox2}
        setCheckbox={setCheckbox2}
        index={0}
        variant='dark'
      />
      <Checkbox
        checkbox={checkbox2}
        setCheckbox={setCheckbox2}
        index={1}
        variant='dark'
      />
      <Checkbox
        checkbox={checkbox2}
        setCheckbox={setCheckbox2}
        index={2}
        variant='dark'
      />
      <br />
      <Spotlight
        clicked={spotlight}
        setClicked={setSpotlight}
        variant='light'
      />
      <Spotlight clicked={spotlight} setClicked={setSpotlight} variant='dark' />
      <br />
      <Select
        select={['Option 1', 'Option 2', 'Option 3', 'Option 4']}
        setSelect={setSelect}
        def='Select an option'
      />
      <Select
        select={['Option 1', 'Option 2', 'Option 3', 'Option 4']}
        setSelect={setSelect}
        def='Select an option'
        variant='dark'
      />
    </section>
  )
}

export default App
