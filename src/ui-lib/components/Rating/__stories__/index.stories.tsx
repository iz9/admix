import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Rating } from '..'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI/Rating',
  component: Rating,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   onClick: { action: 'clicked' },
  // },
} as ComponentMeta<typeof Rating>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Rating> = args => <Rating {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  value: 3.5,
  onChange: value => console.log('Rating: ', value),
}
