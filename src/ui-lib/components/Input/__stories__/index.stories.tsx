import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Input } from '..'
import { SvgIcon } from 'ui-lib/components/SvgIcon'
import { ReactComponent as SearchSVG } from 'ui-lib/assets/svg/search.svg'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI/Input',
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   onClick: { action: 'clicked' },
  // },
} as ComponentMeta<typeof Input>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = args => <Input {...args} />
const decorator = (Story: any) => (
  <div style={{ width: '300px' }}>{Story()}</div>
)
const renderIcon = () => <SvgIcon Icon={SearchSVG} width={18} height={18} />

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  placeholder: 'Type something',
}
Default.decorators = [decorator]

export const IconBefore = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
IconBefore.args = {
  renderIconBefore: renderIcon,
  placeholder: 'Type game name',
}
IconBefore.decorators = [decorator]

export const IconAfter = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
IconAfter.args = {
  renderIconAfter: renderIcon,
  placeholder: 'Select gender',
}
IconAfter.decorators = [decorator]
