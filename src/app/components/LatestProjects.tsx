'use client';
import React, { useEffect, useState } from 'react';
import { client } from '../utils/contentful';
import ProjectCard from './ProjectCard';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';

const LatestProjects: React.FC = () => {
  const router = useRouter();
  const [projects, setProjects] = useState<unknown[]>([]);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    fetchProjects();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const goToProjectsPage = () => {
    router.push('/projects');
  };

  return (
    <section className='latest-projects'>
      <div className='section-header flex justify-between align-middle mb-5'>
        <h1 className='text-4xl mt-2'>Latest Projects</h1>
        <Button
          variant='outlined'
          className='py-3 px-6 font-bold 2xl:text-xl rounded-3xl whitespace-nowrap h-12'
          onClick={goToProjectsPage}
        >
          See all <span className='hidden md:inline ml-2'> Projects</span>
        </Button>
      </div>
      <div className='mb-10 w-full h-96'>
        <ProjectCard key={projects[0].sys.id} project={projects[0].fields} />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2  gap-8'>
        {projects.slice(1).map((project, index) => (
          <div className='col-span-1' key={project.sys.id}>
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
    </section>
  );
};

export default LatestProjects;
