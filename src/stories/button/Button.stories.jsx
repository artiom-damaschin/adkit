import React from 'react'
import { text } from '@storybook/addon-knobs'

import Button from '../../components/buttons/Button'

export default {
  title: 'Button',
  parameters: {
    info: {
      text: 'Description here',
      inline: true,
    },
  },
}

export function Button1() {
  return <Button>{text('Label', 'Click Me')}</Button>
}
