// app/blog/[slug]/page.js

import { notFound } from 'next/navigation';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { client } from '../../utils/contentful';
import Footer from '../../components/Footer';

async function getProject(slug) {
  const entries = await client.getEntries({
    content_type: 'project',
    'fields.slug': slug,
  });

  if (!entries.items[0]) {
    notFound();
  }

  return entries.items[0];
}

export default async function Project({ params }) {
  const { slug } = params;
  const project = await getProject(slug);
  const { title, description, imageCover } = project.fields;

  return (
    <div>
      <h1>Hello</h1>
      <main className='container mx-auto p-4'>
        <article className='prose lg:prose-xl'>
          {imageCover && (
            <img
              src={imageCover.fields.file.url}
              alt={title}
              className='w-full h-96 object-cover mb-8'
            />
          )}
          <h1 className='text-4xl font-bold mb-4'>{title}</h1>
          <div>{documentToReactComponents(description)}</div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
