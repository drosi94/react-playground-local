import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import PostsScreen from './screens/posts/PostsScreen';

const queryClient = new QueryClient();

const App: React.FC<any> = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <PostsScreen />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
