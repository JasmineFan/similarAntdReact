import React from 'react';
import CheckboxGroup from './CheckboxGroup'
import type { Meta, StoryObj } from '@storybook/react';

import Checkbox from './index';

const meta = {
  title: 'Example/CheckboxGroup',
  component: CheckboxGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
 
} satisfies Meta<typeof CheckboxGroup>;
export default meta;
type Story = StoryObj<typeof meta>;


export const ContextDemo = () => {
  return (<CheckboxGroup defaultValue={['2']}>
  <span><Checkbox value="1" key="1">选项1</Checkbox></span>
  <span><Checkbox value="2" key="2">选项2</Checkbox></span>
  <Checkbox value="3" key="3">选项3</Checkbox>
  </CheckboxGroup>)
}
