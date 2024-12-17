'use client';

import Banner from './components/Banner';
import LatestBlog from './components/LatestBlog';
import LatestProject from './components/LatestProjects';

export default function Home() {
  return (
    <div className='container mx-auto px-8'>
      <Banner />
      <LatestBlog />
      <LatestProject />
    </div>
  );
}
