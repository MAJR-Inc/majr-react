# majr-react

> Design system for MAJR DAO

[![NPM](https://img.shields.io/npm/v/majr-react.svg)](https://www.npmjs.com/package/majr-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save majr-react
```

## Usage

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

## License

MIT © [TomasDmArg](https://github.com/TomasDmArg)
