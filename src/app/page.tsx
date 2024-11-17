'use client';
import { useEffect, useState } from 'react';
import PostCard from './components/PostCard';
import { client } from './utils/contentful';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const entries: any = await client.getEntries({ content_type: 'post' });
      setPosts(entries.items);
    };

    fetchPosts();
  }, []);

  return (
    <main className='container mx-auto p-4'>
      <h1 className='text-3xl font-bold mb-8 text-primary'>Últimos Posts</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {posts.map((post) => (
          <PostCard key={post.sys.id} post={post} />
        ))}
      </div>
    </main>
  );
}
