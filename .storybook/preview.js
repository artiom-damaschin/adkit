import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'
import { withConsole } from '@storybook/addon-console';

addDecorator((story, context) => withInfo()(story)(context))
addDecorator((story, context) => withConsole()(story)(context))
addDecorator(withKnobs)


configure(require.context('../', true, /\.stories.jsx$/), module)