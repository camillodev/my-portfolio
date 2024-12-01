import React, { useEffect, useState } from 'react';
import { client } from '../utils/contentful'; // Adjust the import path as necessary
import ProjectCard from './ProjectCard';

const LatestProjects: React.FC = () => {
  const [projects, setProjects] = useState<any[]>([]); // Adjust the type as necessary
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await client.getEntries({
          content_type: 'project',
          order: '-sys.createdAt',
          limit: 3,
        });
        setProjects(response.items);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Loading state
  }

  return (
    <div className='latest-projects container mx-auto'>
      <h2 className='text-2xl font-bold mb-4'>Latest Projects</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
        {projects.map((project, index) => (
          <div
            className={
              index === 0
                ? 'col-span-1 md:col-span-4'
                : 'col-span-1 md:col-span-2'
            }
            key={project.sys.id}
          >
            <ProjectCard
              project={{
                title: project.fields.title,
                description: project.fields.description,
                slug: project.fields.slug,
                imageCover: project.fields.imageCover,
                technologies: project.fields.technologies || [],
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestProjects;
