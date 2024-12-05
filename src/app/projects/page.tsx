'use client';
import React, { useEffect, useState } from 'react';
import { client } from '../utils/contentful';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<unknown[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProjects = async () => {
    try {
      const response = await client.getEntries({
        content_type: 'project',
        order: '-sys.createdAt',
      });
      setProjects(response.items);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProjects();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className='container mx-auto px-10 pt-10'>
      <h1 className='text-3xl font-bold mb-8'>Meus Projetos</h1>

      <div className='flex flex-col mb-10 w-full h-96 md:h-[500px]'>
        <ProjectCard key={projects[0].sys.id} project={projects[0].fields} />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        {projects.length > 1 &&
          projects
            .slice(1)
            .reverse()
            .map((project, index) => (
              <div key={project.sys.id}>
                <ProjectCard key={index + 1} project={project.fields} />
              </div>
            ))}
      </div>
    </div>
  );
};

export default Projects;
