'use client';

import { Post, Todo, useJSONPlaceholder } from '@/hooks/useJSONPlaceholder';

function DataFetchingPage() {
  const { data: posts, isPending: isPostsPending } = useJSONPlaceholder<Post[]>('posts/1');
  const { data: todos, isPending: isTodosPending } = useJSONPlaceholder<Todo[]>('todos/1');

  if (isPostsPending || isTodosPending) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Data Fetching</h1>
      <h2>Posts</h2>
      <ul>
        {posts &&
          Object.entries(posts).map(([key, post]) => <li key={key}>{`${key}: ${post}`}</li>)}
      </ul>
      <h2>Todos</h2>
      <ul>
        {todos &&
          Object.entries(todos).map(([key, todo]) => <li key={key}>{`${key}: ${todo}`}</li>)}
      </ul>
    </div>
  );
}

export default DataFetchingPage;
