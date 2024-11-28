import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import React from 'react';
import Image from 'next/image';

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
    <div className='shadow-md rounded-lg overflow-hidden w-full h-96 flex flex-col'>
      <a
        href={`/projects/${slug}`}
        target='_blank'
        rel='noopener noreferrer'
        className='inline-block no-underline'
      >
        {imageCover && (
          <div className='relative'>
            <Image
              src={'https://' + imageCover.fields.file.url}
              alt={title}
              width={400}
              height={300}
              className='object-cover bg-white w-full h-96 '
              sizes='(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw'
            />
            <h2 className='absolute inset-0 flex items-center justify-center text-4xl font-bold text-primary bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100'>
              {title}
            </h2>
          </div>
        )}
      </a>
    </div>
  );
};

export default ProjectCard;
