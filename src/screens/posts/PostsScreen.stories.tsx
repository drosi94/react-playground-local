import { Story, Meta } from '@storybook/react/types-6-0';

import PostsScreen from './PostsScreen';

export default {
  component: PostsScreen,
  title: 'Screens/PostsScreen',
} as Meta;

const Template: Story = (args) => <PostsScreen {...args} />;

export const Default = Template.bind({});
