import { Story, Meta } from '@storybook/react/types-6-0';

import * as PostStories from '../post/Post.stories';
import PostList, { PostListProps } from './PostList';

export default {
  component: PostList,
  title: 'Components/Posts/PostList',
} as Meta;

const Template: Story<PostListProps> = (args) => <PostList {...args} />;

export const Default = Template.bind({});
Default.args = {
  posts: [
    { ...PostStories?.Default?.args?.post, id: '1', title: 'Task 1' },
    { ...PostStories?.Default?.args?.post, id: '2', title: 'Task 2' },
    { ...PostStories?.Default?.args?.post, id: '3', title: 'Task 3' },
    { ...PostStories?.Default?.args?.post, id: '4', title: 'Task 4' },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  posts: [],
  isFetching: true,
};

export const Empty = Template.bind({});
Empty.args = {
  ...Loading.args,
  isFetching: false,
};
