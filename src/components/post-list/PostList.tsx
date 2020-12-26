import { AxiosError } from 'axios';
import Post from '../post';

export interface PostListProps {
  isFetching: boolean;
  posts: any[] | undefined;
}

const PostList: React.FC<PostListProps> = ({ isFetching, posts }) => {
  return (
    <div>
      {isFetching && (
        <div>
          <span>loading...</span>
        </div>
      )}
      {!isFetching && (
        <div>
          {!posts || (posts.length === 0 && <span>No posts...</span>)}
          {posts && posts.length > 0 && (
            <ul data-testid="postList">
              {posts?.map((post: any) => (
                <Post key={post.id} post={post} />
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default PostList;
