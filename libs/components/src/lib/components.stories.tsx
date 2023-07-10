import type { Meta } from 'storybook-framework-qwik';
import { Components } from './components';

export default {
  title: 'Components',
  tags: ['autodocs'],
  parameters: {},
  argTypes: {
    // put component params here
  },
  render(args) {
    return <Components {...args} />;
  },
} as Meta;

export const Primary = {};
