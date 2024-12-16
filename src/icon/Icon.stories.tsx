import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import  Icon  from '.';
import { FC} from 'react'


const meta = {
  title: 'Example/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
 
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
  args: {
    type: 'fixed',
    children: 'Icon',
  },
};


export const Basic:FC= () =>{
  return(
    <>
    <Icon type="fixed">Primary Icon</Icon>
    </>
  )
}
export const Copy = ()=>{
  return( <Icon type="copy"></Icon>)
   
}

