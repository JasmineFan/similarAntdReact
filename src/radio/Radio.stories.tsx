import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import  Radio  from '.';
import { FC} from 'react'



const meta = {
  title: 'Example/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;
export const test: Story = {
  args: {
    children: 'Radio',
  },
};


export const Basic:FC= () =>{
  return(
    <>

    <Radio onChange={e=>console.log(e)}>Default Radio</Radio>

    </>
  )
}
export const Unchecked:FC= () =>{
  return(
    <>

    <Radio checked={false}>Default Radio</Radio>

    </>
  )
}
export const Disabled:FC= () =>{
  return(
    <>

    <Radio disabled={true}>Default Radio</Radio>

    </>
  )
}
