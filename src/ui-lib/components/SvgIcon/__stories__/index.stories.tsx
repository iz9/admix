import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SvgIcon } from '..'
import { ReactComponent as DetailsSvg } from 'ui-lib/assets/svg/details.svg'
import { ReactComponent as SearchSvg } from 'ui-lib/assets/svg/search.svg'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI/SvgIcon',
  component: SvgIcon,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   onClick: { action: 'clicked' },
  // },
} as ComponentMeta<typeof SvgIcon>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SvgIcon> = args => <SvgIcon {...args} />

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  Icon: SearchSvg,
}

export const Colored = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Colored.args = {
  Icon: SearchSvg,
  color: 'accentPink',
}

export const Sized = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Sized.args = {
  Icon: DetailsSvg,
  width: 60,
  height: 60,
}
