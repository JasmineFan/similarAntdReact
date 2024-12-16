import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import  Input  from '.';
import { FC} from 'react'
import React from 'react';

import { UserOutlined } from '@ant-design/icons';



const meta = {
  title: 'Example/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic = () => {
  return <Input placeholder="basic usage" defaultValue="abcd" />
}


export const Prefix = () => {
  return <>
    <Input size="large" placeholder="large size" prefix={<UserOutlined />} />
    <br />
    <br />
    <Input placeholder="default size" prefix={<UserOutlined />} />
    <br />
    <br />
    <Input size="small" placeholder="small size" prefix={<UserOutlined />} />
  </>
}

export const Size = () => {
  return <>
    <Input size="small" placeholder="small" /><br />
    <Input placeholder="small" /><br />
    <Input size="large" placeholder="small" /><br />
  </>
}

export const Control = () => {
  const [value, setValue] = React.useState('')
  return <>
    <Input value={value} onChange={(e: any) => setValue(e.target.value)} /><br />

    <button onClick={() => setValue('set by button')}>set value</button>
  </>
}
//@ts-ignore
const onChange = e => {
  console.log('Change:', e.target.value);
};

export const MaxLength = () => (
  <>
    <Input maxLength={20} onChange={onChange} />
  </>
);
export const TextAreaBasic = () => (
  <>
    <Input.TextArea onChange={onChange} defaultValue="a\nb\nc\nd\ncddd"/>


  </>
);