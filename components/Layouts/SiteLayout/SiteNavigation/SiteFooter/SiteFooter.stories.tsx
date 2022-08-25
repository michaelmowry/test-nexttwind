import { ComponentMeta, ComponentStory } from '@storybook/react';
import SiteFooter, { ISiteFooter } from './SiteFooter';

export default {
  title: 'navigation/Footer',
  component: SiteFooter,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof SiteFooter>;

const Template: ComponentStory<typeof SiteFooter> = (args) => (
  <SiteFooter {...args} />
);

export const Base = Template.bind({});
Base.args = {} as ISiteFooter;
