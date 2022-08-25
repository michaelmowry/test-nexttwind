import { ComponentMeta, ComponentStory } from '@storybook/react';
import SiteHeader, { ISiteHeader } from './SiteHeader';
import { mockSiteHeaderProps } from './SiteHeader.mocks';

export default {
  title: 'navigation/SiteHeader',
  component: SiteHeader,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SiteHeader>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SiteHeader> = (args) => (
  <SiteHeader {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockSiteHeaderProps.base,
} as ISiteHeader;
