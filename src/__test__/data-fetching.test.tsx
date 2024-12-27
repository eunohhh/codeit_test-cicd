import DataFetchingPage from '@/app/data-fetching/page';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/posts/1', (req, res, ctx) => {
    const fakePost = {
      id: 1,
      title: 'test',
      body: 'testasdfasdfadf',
    };
    return res(ctx.json(fakePost));
  }),
];

describe('DataFetchingPage', () => {
  const server = setupServer(...handlers);

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  const renderDataFetchingComponent = () => {
    const client = new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
          staleTime: Infinity,
        },
      },
    });

    return render(
      <QueryClientProvider client={client}>
        <DataFetchingPage />
      </QueryClientProvider>,
    );
  };

  it('should render the component', async () => {
    renderDataFetchingComponent();

    const postBody = await screen.findByText(/body:/i);

    await waitFor(() => {
      const postbodyByGetBy = screen.getByText(/body:/i);
      expect(postbodyByGetBy).toBeInTheDocument();
    });

    screen.debug();

    expect(postBody).toBeInTheDocument();
  });
});
