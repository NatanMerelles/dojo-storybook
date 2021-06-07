import React from 'react';

import { Button } from '../components/buttons';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {

  },
};

const Template = (args) => <Button {...args} />;

export const Base = Template.bind({});
Base.args = {
  children: 'Botão',
  fill: false
};