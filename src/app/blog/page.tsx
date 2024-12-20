'use client';
import React, { useEffect, useState } from 'react';
import { client } from '../utils/contentful';
import PostCard from '../components/PostCard';

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<unknown[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      const response = await client.getEntries({
        content_type: 'post',
        order: '-sys.createdAt',
      });
      setPosts(response.items);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className='container mx-auto px-10 py-14'>
      <div className='flex flex-col mb-24 w-full h-96 md:h-[550px] '>
        <PostCard post={posts[0].fields} />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-24 gap-x-10'>
        {posts.length > 1 &&
          posts
            .slice(1)
            .reverse()
            .map((post, index) => (
              <div key={post.sys.id} className='h-96'>
                <PostCard post={post.fields} />
              </div>
            ))}
      </div>
    </div>
  );
};

export default Blog;
