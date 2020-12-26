import { addDecorator } from '@storybook/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import '../src/index.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

const AppDecorator = (storyFn) => {
  const queryClient = new QueryClient();
  return <QueryClientProvider client={queryClient}>{storyFn()}</QueryClientProvider>;
};

addDecorator(AppDecorator);
