// app/blog/page.tsx

import type { Metadata } from 'next';
import { client } from '../utils/contentful';
import PostCard from '../components/PostCard';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Blog',
};

const Blog: React.FC = async () => {
  const entries = await client.getEntries({ content_type: 'post' });
  const posts: any[] = entries.items;

  return (
    <div>
      <main className='container mx-auto p-4'>
        <h1 className='text-3xl font-bold mb-8'>Blog</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {posts.map((post) => (
            <PostCard key={post.sys.id} post={post} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
