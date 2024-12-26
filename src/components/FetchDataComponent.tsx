'use client';

import { useEffect, useState } from 'react';

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

const FakeFetch = () => {
  return new Promise<Post>((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, userId: 1, title: 'fake title', body: 'fake body' });
    }, 1000);
  });
};

function FetchDataComponent() {
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    FakeFetch()
      .then((data) => setPost(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <ul>
      {post && (
        <>
          <li>{post.id}</li>
          <li>{post.userId}</li>
          <li>{post.title}</li>
          <li>{post.body}</li>
        </>
      )}
    </ul>
  );
}

export default FetchDataComponent;
