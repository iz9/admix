import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { FormattedNumber } from '..'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI/FormattedNumber',
  component: FormattedNumber,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   onClick: { action: 'clicked' },
  // },
} as ComponentMeta<typeof FormattedNumber>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FormattedNumber> = args => (
  <FormattedNumber {...args} />
)

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  value: 763472734,
}

export const Compact = Template.bind({})
Compact.args = {
  value: 763472734,
  variant: 'compact',
}

export const Percentage = Template.bind({})
Percentage.args = {
  value: 69,
  variant: 'percent',
}

export const Currency = Template.bind({})
Currency.args = {
  value: 769.23,
  variant: 'currency',
}
