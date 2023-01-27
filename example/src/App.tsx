import React from 'react'

import {
  AddButton,
  Button,
  Checkbox,
  FlatBox,
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
  ThemeSwitch,
  Navbar,
  Footer,
  Circle,
  ButtonShadow
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
  const shield = (
    <svg
      width='30'
      height='30'
      viewBox='0 0 30 30'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clip-path='url(#clip0_232_275)'>
        <path
          d='M11.25 15L13.75 17.5L18.75 12.5'
          stroke='#38383D'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M15 3.75C17.9198 6.33322 21.7306 7.67821 25.625 7.5C26.192 9.42877 26.3655 11.4518 26.1352 13.449C25.9048 15.4461 25.2754 17.3766 24.2843 19.1257C23.2931 20.8747 21.9605 22.4067 20.3656 23.6306C18.7706 24.8545 16.946 25.7453 15 26.25C13.054 25.7453 11.2293 24.8545 9.63443 23.6306C8.03951 22.4067 6.70689 20.8747 5.71574 19.1257C4.7246 17.3766 4.09517 15.4461 3.86484 13.449C3.63452 11.4518 3.80801 9.42877 4.375 7.5C8.26941 7.67821 12.0802 6.33322 15 3.75Z'
          stroke='#38383D'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_232_275'>
          <rect width='30' height='30' fill='white' />
        </clipPath>
      </defs>
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
      <Button
        disabled={false}
        onClick={() => {}}
        text='Main btn'
        variant='main'
      />
      <br />
      <Button
        disabled={true}
        onClick={() => {}}
        text='Light btn'
        variant={theme ? 'dark' : 'light'}
      />
      <br />
      <Button
        onClick={() => {}}
        text='Highlight btn'
        variant={theme ? 'highlightdark' : 'highlight'}
      />
      <br />
      <Link
        text='Link - Def.'
        link='https://github.com'
        variant={theme ? 'dark' : 'light'}
        disabled={true}
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
        disabled={true}
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
      <br />
      <FlatBox
        height='fit-content'
        width='100px'
        variant={theme ? 'dark' : 'light'}
      >
        <h1>Hi!</h1>
      </FlatBox>
      <Circle
        active={false}
        variant='yellow'
        icon={shield}
        onClick={() => {}}
      />
      <Circle active={true} variant='yellow' icon={shield} onClick={() => {}} />
      <Circle active={false} variant='red' icon={shield} onClick={() => {}} />
      <Circle active={true} variant='red' icon={shield} onClick={() => {}} />
      <Circle active={true} variant='blue' icon={shield} onClick={() => {}} />
      <Circle active={false} variant='blue' icon={shield} onClick={() => {}} />
      <ButtonShadow
        onClick={() => {}}
        text='Button'
        icon={shield}
        altFont={false}
        color='blue'
        iconPosition='left'
        variant='light'
      />
      <ButtonShadow
        onClick={() => {}}
        text='Button'
        icon={shield}
        altFont={false}
        color='green'
        iconPosition='left'
        variant='light'
      />
      <ButtonShadow
        onClick={() => {}}
        text='Button'
        icon={shield}
        altFont={false}
        color='red'
        iconPosition='left'
        variant='light'
      />
      <ButtonShadow
        onClick={() => {}}
        text='Button'
        icon={shield}
        altFont={false}
        color='yellow'
        iconPosition='left'
        variant='light'
      />
      <ButtonShadow
        onClick={() => {}}
        text='Button'
        icon={shield}
        altFont={false}
        color='black'
        iconPosition='left'
        variant='light'
      />
      <br />
      <br />
      <br />
      <h2>Composed</h2>
      <br />

      <Navbar theme={theme} variant={'theme'} setTheme={setTheme} />
      {/* <Navbar
        theme={theme}
        variant={'buttons'}
        buttons={[
          ['Home', '/'],
          ['About', '/about'],
          ['Contact', '/contact']
        ]}
        setTheme={setTheme}
      /> */}
      <Footer
        variant={theme ? 'dark' : 'light'}
        links={[
          ['Home', '/'],
          ['About', '/about'],
          ['Contact', '/contact']
        ]}
        twitter='https://twitter.com/MAJR_DAO'
      />
    </section>
  )
}

export default App
