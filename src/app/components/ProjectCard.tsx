import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import React from 'react';

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
  const { title, description, slug, imageCover } = project;

  return (
    <div className='bg-white shadow-md rounded-lg overflow-hidden'>
      {imageCover && (
        <img
          src={imageCover.fields.file.url}
          alt={title}
          className='w-full h-48 object-cover'
        />
      )}
      <div className='p-4'>
        <h2 className='text-xl font-bold mb-2'>{title}</h2>
        <div className='text-gray-700 mb-4'>
          {documentToReactComponents(description)}{' '}
          {/* Renderiza o conteúdo rich text */}
        </div>{' '}
        <a
          href={`/projects/${slug}`}
          target='_blank'
          rel='noopener noreferrer'
          className='inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >
          Ver Projeto
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
