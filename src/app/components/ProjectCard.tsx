import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Project {
  title: string;
  description: any;
  link: string;
  imageCover: {
    fields: {
      file: {
        url: string;
      };
    };
  };
  slug: string;
  technologies: string[];
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const { title, slug, imageCover } = project;

  return (
    <div className='shadow-mdx rounded-lg overflow-hidden w-full h-96'>
      <Link
        href={`/projects/${slug}`}
        passHref
        className='inline-block text-inherit no-underline w-full h-full'
      >
        {imageCover && (
          <div className='relative h-full'>
            <Image
              src={'https://' + imageCover.fields.file.url}
              alt={title}
              width={300}
              height={200}
              className='object-cover w-full h-full '
              sizes='(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw'
            />
            <h2 className='absolute inset-0 flex items-center justify-center text-4xl font-bold text-primary bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100'>
              {title}
            </h2>
          </div>
        )}
      </Link>
    </div>
  );
};

export default ProjectCard;
