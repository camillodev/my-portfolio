import React from 'react';
import { Entry } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import ContactForm from './ContactForm'; // Importe o componente ContactForm

interface AboutMeProps {
  aboutMe: Entry<any>;
}

const AboutMe: React.FC<AboutMeProps> = ({ aboutMe }) => {
  const { name, role, bio, image } = aboutMe.fields;

  return (
    <div className='container mx-auto p-4'>
      <div className='flex flex-col md:flex-row items-center'>
        {image && (
          <img
            src={image.fields.file.url}
            alt={name}
            className='w-64 h-64 rounded-full mb-4 md:mb-0 md:mr-8'
          />
        )}
        <div>
          <h2 className='text-3xl font-bold mb-4'>{name}</h2>
          <h3 className='text-xl text-gray-700 mb-4'>{role}</h3>
          <div className='prose'>{documentToReactComponents(bio)}</div>
          <ContactForm /> {/* Use o componente ContactForm aqui */}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
