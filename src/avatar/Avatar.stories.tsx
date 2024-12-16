import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import  Avatar  from '.';
import { FC} from 'react'
import { UserOutlined } from '@ant-design/icons';




const meta = {
  title: 'Example/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {

    children: 'Avatar',
  },
};

export const Basic:FC= () =>{
  return(
    <>
     <div style={{display: 'flex', gap: 8, alignItems: 'center'}}>
    <Avatar size={64} icon={<UserOutlined />} />
    <Avatar size="large" icon={<UserOutlined />} />
    <Avatar icon={<UserOutlined />} />
    <Avatar size="small" icon={<UserOutlined />} />
  </div>
  <br/>
  <div style={{display: 'flex', gap: 8, alignItems: 'center'}}>
    <Avatar shape="square" size={64} icon={<UserOutlined />} />
    <Avatar shape="square" size="large" icon={<UserOutlined />} />
    <Avatar shape="square" icon={<UserOutlined />} />
    <Avatar shape="square" size="small" icon={<UserOutlined />} />
  </div>
    </>
  )
}
