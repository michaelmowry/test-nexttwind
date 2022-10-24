import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SessionProvider } from 'next-auth/react';
import AppHeader, { IAppHeader } from './AppHeader';
import { mockHeaderProps } from './AppHeader.mocks';

export default {
  title: 'navigation/AppHeader',
  component: AppHeader,
  decorators: [
    (Story) => (
      <SessionProvider>
        <Story />
      </SessionProvider>
    ),
  ],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof AppHeader>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AppHeader> = (args) => (
  <AppHeader {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockHeaderProps.base,
} as IAppHeader;
