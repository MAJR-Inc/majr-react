# majr-react

 
> Design system for MAJR DAO. Figma: https://www.figma.com/community/file/1181293730237117344 

[![NPM](https://img.shields.io/npm/v/majr-react.svg)](https://www.npmjs.com/package/majr-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save majr-react
```

## Usage

## Example:

```tsx
import React, { Component } from 'react'

import { Button } from 'majr-react'
import 'majr-react/dist/index.css'

export default function Home(){
  return (
    <section>
      <Button onClick={() => {}} text='Main btn' variant='main' />
    </section>
  )
}
```
## Button

**Props:**
```
text: string
onClick: () => void
variant?: 'light' (default) | 'dark' | 'main' | 'highlight' | 'highlightdark'
rounded?: boolean (default: false)
```
```tsx
import React, { Component } from 'react'

import { Button } from 'majr-react'
import 'majr-react/dist/index.css'

<Button onClick={() => {}} text='Main btn' variant='main'/>
```

## IconButton
Uses the same shadows as the Button component, but only has an icon.

**Props:**
```
icon: any
onClick: () => void
variant?: 'light' | 'dark'
rounded?: boolean
```

```tsx
import React, { Component } from 'react'

import { IconButton } from 'majr-react'
import 'majr-react/dist/index.css'

<IconButton onClick={() => {}} text='Main btn' variant='main'/>
```

## Navbar button
These are the buttons used in the navbar of the Chrome extension.

Uses the same shadows as the Button component, but has an icon and text. The active looks like an input

**Props:**
```
icon: any
text: string
onClick: () => void
variant?: 'light' | 'dark' | 'active' | 'activeDark'
rounded?: boolean
```
```tsx
import React, { Component } from 'react'

import { NavbarBtn } from 'majr-react'
import 'majr-react/dist/index.css'

<NavbarBtn onClick={() => {}} text='Main btn' variant='main'/>
```

## Input

**Props:**
```
text: string
setText: (text: string) => void
variant?: 'light' | 'dark'
placeholder?: string
```
```tsx
import React, { Component } from 'react'

import { Input } from 'majr-react'
import 'majr-react/dist/index.css'

<Input text={text} setText={setText} variant='light' placeholder='Enter text'/>
```

## License

MIT © [TomasDmArg](https://github.com/TomasDmArg)
