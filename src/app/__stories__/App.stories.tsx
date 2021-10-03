import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import styled from 'styled-components/macro'

interface TestStoryCmpProps {
  label: string
}
const H1 = styled.h1`
  color: ${p => p.theme.colors.primary};
`
const TestStoryCmp: React.FC<TestStoryCmpProps> = ({ label }) => (
  <H1>Test story cmp {label}</H1>
)

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/TestStoryCmp',
  component: TestStoryCmp,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof TestStoryCmp>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TestStoryCmp> = () => (
  <TestStoryCmp label={'label'} />
)

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: 'TestStoryCmp',
}
