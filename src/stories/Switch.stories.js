import React from 'react';

import { Switch } from '../components/switch';

export default {
  title: 'Example/Switch',
  component: Switch,
  argTypes: {

  },
};

const Template = (args) => <Switch {...args} />;

export const BaseSwitch = Template.bind({});
BaseSwitch.args = {
  children: 'Botão',
  fill: false
};