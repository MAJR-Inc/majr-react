import React from 'react'

import {
  AddButton,
  Button,
  Checkbox,
  FooterButton,
  IconButton,
  IconVerified,
  Image,
  Input,
  Link,
  NavbarBtn,
  Profile,
  Progress,
  ProgressWDashes,
  Radio,
  Select,
  Spotlight,
  Steps,
  SwitchComponent,
  Tag,
  Textarea,
  ThemeSwitch
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
  const [radio2, setRadio2] = React.useState<boolean[]>([false, true, false])
  const [switchValue, setSwitchValue] = React.useState(false)
  const [checkbox, setCheckbox] = React.useState<boolean[]>([
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
      <Button
        onClick={() => {}}
        text='Light btn'
        variant={theme ? 'dark' : 'light'}
      />
      <br />
      <Link
        text='Link - Def.'
        link='https://github.com'
        variant={theme ? 'dark' : 'light'}
      />
      <Link text='Animated' link='https://github.com' variant='animated' />
      <br />
      <IconButton
        onClick={() => {}}
        icon={tg}
        variant={theme ? 'dark' : 'light'}
      />
      <br />
      <br />
      <IconButton
        onClick={() => {}}
        icon={tg}
        variant={theme ? 'dark' : 'light'}
        rounded={true}
      />
      <br />
      <NavbarBtn
        onClick={() => {}}
        icon={award}
        text='Navbar btn'
        variant={theme ? 'dark' : 'light'}
      />
      <br />
      <NavbarBtn
        onClick={() => {}}
        icon={award}
        text='Navbar btn'
        variant={theme ? 'activeDark' : 'active'}
      />
      <br />
      <Input
        text={username}
        setText={setUsername}
        placeholder='Enter username'
        variant={theme ? 'dark' : 'light'}
      />
      <Input
        text={username}
        setText={setUsername}
        placeholder='Enter password'
        variant={theme ? 'passwordDark' : 'password'}
      />
      <Input
        text={username}
        setText={setUsername}
        placeholder='Search...'
        variant={theme ? 'searchDark' : 'search'}
      />
      <Textarea
        text={username}
        setText={setUsername}
        placeholder='Enter text...'
        variant={theme ? 'dark' : 'light'}
      />
      <br />
      <Radio
        radio={radio2}
        setRadio={setRadio2}
        index={0}
        variant={theme ? 'dark' : 'light'}
      />
      <Radio
        radio={radio2}
        setRadio={setRadio2}
        index={1}
        variant={theme ? 'dark' : 'light'}
      />
      <Radio
        radio={radio2}
        setRadio={setRadio2}
        index={2}
        variant={theme ? 'dark' : 'light'}
      />
      <br />
      <Checkbox
        checkbox={checkbox}
        setCheckbox={setCheckbox}
        index={0}
        variant={theme ? 'dark' : 'light'}
      />
      <Checkbox
        checkbox={checkbox}
        setCheckbox={setCheckbox}
        index={1}
        variant={theme ? 'dark' : 'light'}
      />
      <Checkbox
        checkbox={checkbox}
        setCheckbox={setCheckbox}
        index={2}
        variant={theme ? 'dark' : 'light'}
      />
      <br />
      <Spotlight
        clicked={spotlight}
        setClicked={setSpotlight}
        variant={theme ? 'dark' : 'light'}
      />
      <Spotlight clicked={spotlight} setClicked={setSpotlight} variant='dark' />
      <br />
      <Select
        select={['Option 1', 'Option 2', 'Option 3', 'Option 4']}
        setSelect={setSelect}
        def='Select an option'
        variant={theme ? 'dark' : 'light'}
      />
      <br />
      <ThemeSwitch value={theme} setSwitch={setTheme} />
      <div
        style={{
          height: '60px',
          width: '590px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: '20px auto',
          overflow: 'hidden'
        }}
      >
        <FooterButton
          onClick={() => {}}
          text='Footer'
          variant={theme ? 'dark' : 'light'}
        />
        <FooterButton
          onClick={() => {}}
          text='Footer'
          variant={theme ? 'dark' : 'light'}
        />
        <FooterButton
          onClick={() => {}}
          text='Footer'
          variant={theme ? 'dark' : 'light'}
        />
        <FooterButton onClick={() => {}} text='Twitter' variant={'twitter'} />
      </div>
      <div
        style={{
          height: '60px',
          width: '300px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: '20px auto'
        }}
      >
        <Profile
          url='https://avatars.githubusercontent.com/u/56499359?v=4'
          alt='Profile'
          size='lg'
          variant={theme ? 'dark' : 'light'}
        />
        <Profile
          url='https://avatars.githubusercontent.com/u/56499359?v=4'
          alt='Profile'
          size='md'
          variant={theme ? 'dark' : 'light'}
        />
        <Profile
          url='https://avatars.githubusercontent.com/u/56499359?v=4'
          alt='Profile'
          size='sm'
          variant={theme ? 'dark' : 'light'}
        />
      </div>
      <Image
        url='https://avatars.githubusercontent.com/u/56499359?v=4'
        alt='Profile'
        width={200}
        height={50}
        variant={theme ? 'dark' : 'light'}
      />
      <br />
      <SwitchComponent
        value={switchValue}
        setSwitch={setSwitchValue}
        variant={theme ? 'dark' : 'light'}
      />
      <br />
      <Progress
        value={3}
        max={5}
        variant={theme ? 'dark' : 'light'}
        width='100px'
      />
      <ProgressWDashes
        value={3}
        max={5}
        variant={theme ? 'dark' : 'light'}
        width='100px'
      />
      <br />
      <Tag
        text='Metamask'
        theme={theme ? 'dark' : 'light'}
        icon={<IconVerified />}
        color='#de1149'
        onClick={() => {}}
      />
      <Tag
        text='Metamask'
        theme={theme ? 'dark' : 'light'}
        onClick={() => {}}
      />
      <AddButton onClick={() => {}} />
      <br />
      <br />
      <Steps current={2} total={4} variant={theme ? 'dark' : 'light'} />
    </section>
  )
}

export default App
