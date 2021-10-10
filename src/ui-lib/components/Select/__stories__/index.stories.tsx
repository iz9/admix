import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Select } from '..'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI/Select',
  component: Select,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onChange: { action: 'changed' },
  },
} as ComponentMeta<typeof Select>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Select> = args => <Select {...args} />
const decorator = (Story: any) => (
  <div style={{ width: '300px' }}>{Story()}</div>
)
export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  onChange: (value, actionMeta) => console.log('Changed: ', value, actionMeta),
  options: [
    { label: 'Title 1', value: 'value1' },
    { label: 'Title 2', value: 'value2' },
    { label: 'Title 3', value: 'value3' },
  ],
}
Primary.decorators = [decorator]
