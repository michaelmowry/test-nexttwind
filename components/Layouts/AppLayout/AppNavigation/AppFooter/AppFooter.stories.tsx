import { ComponentMeta, ComponentStory } from '@storybook/react';
import AppFooter, { IAppFooter } from './AppFooter';

export default {
  title: 'navigation/Footer',
  component: AppFooter,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof AppFooter>;

const Template: ComponentStory<typeof AppFooter> = (args) => (
  <AppFooter {...args} />
);

export const Base = Template.bind({});
Base.args = {} as IAppFooter;
