// app/blog/[slug]/page.js

import { notFound } from 'next/navigation';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { client } from '../../utils/contentful';
import Footer from '../../components/Footer';

async function getPost(slug: string) {
  const entries = await client.getEntries({
    content_type: 'post',
    'fields.slug': slug,
  });

  if (!entries.items[0]) {
    notFound();
  }

  return entries.items[0];
}

export default async function Post({ params }) {
  const { slug } = params;
  const post = await getPost(slug);
  const { title, content, image } = post.fields;

  return (
    <div>
      <main className='container mx-auto p-4'>
        <article className='prose lg:prose-xl'>
          {image && (
            <img
              src={image.fields.file.url}
              alt={title}
              className='w-full h-96 object-cover mb-8'
            />
          )}
          <h1 className='text-4xl font-bold mb-4'>{title}</h1>
          <div>{documentToReactComponents(content)}</div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
