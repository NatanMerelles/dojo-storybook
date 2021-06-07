import React from 'react';

import { Button } from '../components/buttons';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Base = Template.bind({});
Base.args = {
  children: 'Botão'
};