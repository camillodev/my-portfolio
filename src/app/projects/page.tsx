import React from 'react';
import { client } from '../utils/contentful';
import Header from '../components/Header'; // Importe o componente Header
import Footer from '../components/Footer'; // Importe o componente Footer
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = async () => {
  const data = await client.getEntries({ content_type: 'project' });
  const projects = data.items;
  // const { title, content, image } = projects;
  // console.log('projects', JSON.stringify(projects));
  return (
    <div>
      <main className='container mx-auto p-4'>
        <h1 className='text-3xl font-bold mb-8'>Meus Projetos</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.length > 0 &&
            projects.map((project, index) => (
              <ProjectCard key={index} project={project.fields} />
            ))}
        </div>
      </main>
      <Footer /> {/* Use o componente Footer aqui */}
    </div>
  );
};

export default Projects;
