import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SessionProvider } from 'next-auth/react';
import AppLayout, { IAppLayout } from './AppLayout';
import { mockAppLayoutProps } from './AppLayout.mocks';

export default {
  title: 'layouts/AppLayout',
  component: AppLayout,
  decorators: [
    (Story) => (
      <SessionProvider>
        <Story />
      </SessionProvider>
    ),
  ],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof AppLayout>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AppLayout> = (args) => (
  <AppLayout {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockAppLayoutProps.base,
} as IAppLayout;
