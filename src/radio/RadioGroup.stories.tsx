import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import  Radio  from '.';
// import  RadioGroup  from './Group';


import { FC} from 'react'

const RadioGroup = Radio.Group

const meta = {
  title: 'Example/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Group: Story = {
  args: {
    children: [
      <Radio value="1" key="1">选项1</Radio>,
      <Radio value="2" key="2">选项2</Radio>,
      <Radio value="3" key="3">选项3</Radio>

    ],
  },
};


export const UnderControl:FC= () =>{
  return(
    <RadioGroup value='3'>

      <Radio value="1" key="1">选项1</Radio>
      <Radio value="2" key="2">选项2</Radio>
      <Radio value="3" key="3">选项3</Radio>

    </RadioGroup>
  )
}
