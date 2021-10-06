import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Text, TextVariant } from '..'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI/Text',
  component: Text,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Text>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Text> = args => <Text {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: 'Text',
}

export const Uppercase = Template.bind({})
Uppercase.args = {
  ...Primary.args,
  variant: TextVariant.uppercase,
}

export const Lowercase = Template.bind({})
Lowercase.args = {
  ...Primary.args,
  variant: TextVariant.lowercase,
}

export const UpperCaseWithPrimaryColor = Template.bind({})
UpperCaseWithPrimaryColor.args = {
  children: 'Uppercase with primary color',
  variant: TextVariant.uppercase,
  sx: {
    color: 'primary',
  },
}
