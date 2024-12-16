import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';

import Switch from './index';
import Button from '../button/index';
import { FC,useState} from 'react'



const meta = {
  title: 'Example/Switcher',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Switcher',
  },
};
const onChange = (checked: boolean) => {
  console.log(`switch to ${checked}`);
};
export const Basic:FC= () =>{
  return(
    <>
   <Switch defaultChecked onChange={onChange} />
    </>
  )
}
export const Disabled: React.FC = () => {
  const [disabled, setDisabled] = useState(true);

  const toggle = () => {
    setDisabled(!disabled);
  };

  return (
    <>
      <Switch disabled={disabled} defaultChecked />
      <br /><br />
      <Button type="primary" onClick={toggle}>
        Toggle disabled
      </Button>
    </>
  );
};

export const CheckedChild: React.FC = () => (
  <>
    <Switch checkedChildren="开启" unCheckedChildren="关闭" defaultChecked />
    <br />
    <Switch checkedChildren="1" unCheckedChildren="0" />
    <br />
    <Switch
      checkedChildren={<CheckOutlined />}
      unCheckedChildren={<CloseOutlined />}
      defaultChecked
    />
  </>
);