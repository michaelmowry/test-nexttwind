import { ComponentMeta, ComponentStory } from '@storybook/react';
import SolutionCard, { ISolutionCard } from './SolutionCard';
import { mockSolutionCardProps } from './SolutionCard.mocks';

export default {
  title: 'cards/SolutionCard',
  component: SolutionCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SolutionCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SolutionCard> = (args) => (
  <SolutionCard {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockSolutionCardProps.base,
} as ISolutionCard;
