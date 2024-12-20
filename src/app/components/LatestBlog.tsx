import React, { useEffect, useState } from 'react';
import { client } from '../utils/contentful';
import PostCard from './PostCard';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';

const LatestBlog: React.FC = ({}) => {
  const router = useRouter();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const entries = await client.getEntries({ content_type: 'post' });
      setPosts(entries.items);
    };

    fetchPosts();
  }, []);

  const firstPost = posts.at(0) ?? posts.at(0);

  const goToBlogsPage = () => {
    router.push('/blog');
  };

  return (
    <section className='latest-blog my-10 h-[1150px] md:h-[850px]'>
      <div className='section-header flex justify-between mb-5'>
        <h1 className='text-4xl '>Latest Posts</h1>
        <Button
          variant='outlined'
          className='py-3 px-6 font-bold 2xl:text-xl rounded-3xl'
          onClick={goToBlogsPage}
        >
          See all <span className='hidden md:inline ml-2'> Posts</span>
        </Button>
      </div>
      <div className='flex flex-col md:grid  md:grid-cols-2 md:h-[650px] gap-5'>
        <div className='md:col-span-1'>
          {firstPost ? (
            <div className='w-full h-full'>
              <PostCard key={firstPost.sys.id} post={firstPost.fields} />
            </div>
          ) : (
            <p className='text-center'>No posts found.</p>
          )}
        </div>
        <div className='md:col-span-1'>
          <div className='md:h-60'>
            {posts.slice(1, 3).map((post, index) => (
              <div className='mb-5 md:col-span-1' key={post.sys.id}>
                <PostCard post={post.fields} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestBlog;
