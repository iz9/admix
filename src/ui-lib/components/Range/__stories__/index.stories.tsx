import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Range } from '..'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI/Range',
  component: Range,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onChange: { action: 'changed' },
  },
} as ComponentMeta<typeof Range>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Range> = args => <Range {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  min: 0,
  max: 100,
  onChange: ({ min, max }) => console.log('changed', min, max),
}
