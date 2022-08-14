import { ComponentMeta, ComponentStory } from '@storybook/react';
import SiteLayout, { ISiteLayout } from './SiteLayout';
import { mockSiteLayoutProps } from './SiteLayout.mocks';

export default {
  title: 'layouts/SiteLayout',
  component: SiteLayout,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SiteLayout>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SiteLayout> = (args) => (
  <SiteLayout {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockSiteLayoutProps.base,
} as ISiteLayout;
