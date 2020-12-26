import { cleanup, render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import PostList from '../PostList';

describe('Integration Testing', () => {
  afterEach(cleanup);

  it('should generate a list of posts with one post', () => {
    const queryClient = new QueryClient();
    queryClient.setQueryData('todos', [
      {
        id: 1,
        title: 'Title',
      },
    ]);

    const Wrapper = ({ children }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    const { getByTestId } = render(
      <Wrapper>
        <PostList
          isFetching={false}
          isError={false}
          error={null}
          posts={[
            {
              id: 1,
              title: 'Title',
            },
          ]}
        />
      </Wrapper>,
    );

    expect(getByTestId('postList')).toBeInTheDocument();
    expect(getByTestId(`post-Title`)).toBeInTheDocument();
  });
});
