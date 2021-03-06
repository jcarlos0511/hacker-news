import * as React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Icon from '.'

export default {
  title: 'Atoms/Icon',
  component: Icon
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />

export const Primary = Template.bind({})
Primary.args = {
  name: 'angular',
  width: 20,
  heigth: 20
}
