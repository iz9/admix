import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { BannerTitle } from '..'
import { Box } from 'theme-ui'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI/BannerTitle',
  component: BannerTitle,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   onClick: { action: 'clicked' },
  // },
} as ComponentMeta<typeof BannerTitle>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BannerTitle> = args => (
  <BannerTitle {...args} />
)

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {}

Primary.args = {
  children: 'Some Banner text'.toUpperCase(),
}
Primary.decorators = [
  Story => (
    <Box p={4} backgroundColor={'black'}>
      {Story()}
    </Box>
  ),
]

export const Colored = Template.bind({})
Colored.args = {
  children: 'Some Banner text'.toUpperCase(),
  color: 'accentYellow',
}
Colored.decorators = [
  Story => (
    <Box p={4} backgroundColor={'black'}>
      {Story()}
    </Box>
  ),
]
