import React, { useEffect, useState } from 'react';
import { client } from '../utils/contentful';
import Image from 'next/image';
import PostCard from './PostCard';
import { Button } from '@mui/material';

const LatestBlog: React.FC = ({}) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const entries = await client.getEntries({ content_type: 'post' });
      setPosts(entries.items);
    };

    fetchPosts();
  }, []);

  const firstPost = posts.at(0) ?? posts.at(0);
  const secondPost = posts.at(1) ?? posts.at(1);
  const thirdPost = posts.at(2) ?? posts.at(2);

  return (
    <div className='my-20'>
      <div className='flex justify-between mb-5'>
        <h1 className='text-4xl mt-2'>Recent Blog Post</h1>
        <Button
          variant='outlined'
          className='py-3 px-6 font-bold 2xl:text-xl rounded-3xl'
        >
          See all Posts
        </Button>
      </div>
      <div className='flex flex-col lg:flex-row gap-10 py-5'>
        <div className='basis-1/2'>
          <div className='blog w-full'>
            {firstPost ? (
              <PostCard
                title={firstPost.fields.title}
                image={firstPost.fields.image}
                tags={firstPost.fields.tags}
              />
            ) : (
              <p>No posts found.</p>
            )}
          </div>
        </div>
        <div className='basis-1/2 gap-10 flex flex-col'>
          {secondPost ? (
            <PostCard
              isHorizontal
              title={secondPost.fields.title}
              image={secondPost.fields.image}
              tags={secondPost.fields.tags}
            />
          ) : (
            <p>No posts found.</p>
          )}
          {thirdPost ? (
            <PostCard
              isHorizontal
              title={thirdPost.fields.title}
              image={thirdPost.fields.image}
              tags={thirdPost.fields.tags}
            />
          ) : (
            <p>No posts found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LatestBlog;
