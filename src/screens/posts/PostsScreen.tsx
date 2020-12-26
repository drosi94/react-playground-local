import { AxiosError } from 'axios';
import { useQuery } from 'react-query';

import fetchTodos from '../../api/fetchTodos';
import PostList from '../../components/post-list';

const PostsScreen = () => {
  const { isFetching, isError, refetch: refetchPosts, data: posts, error } = useQuery<
    any[],
    AxiosError
  >('posts', fetchTodos, {
    enabled: false,
  });

  if (!isFetching && isError) {
    return (
      <div>
        <span style={{ color: 'red' }}>{error?.message} </span>
      </div>
    );
  }

  return (
    <div>
      <button onClick={() => refetchPosts()}>Press me</button>
      <PostList isFetching={isFetching} posts={posts} />
    </div>
  );
};

export default PostsScreen;
