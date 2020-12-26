import { Story, Meta } from '@storybook/react/types-6-0';

import Post, { PostProps } from './Post';

const Template: Story<PostProps> = (args) => <Post {...args} />;

export default {
  component: Post,
  title: 'Components/Posts/Post',
} as Meta;

export const Default = Template.bind({});
Default.args = {
  post: {
    title: 'Test todo',
  },
};
