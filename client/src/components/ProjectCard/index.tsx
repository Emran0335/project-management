import { Project } from '@/state/api'
import React from 'react'

type ProjectProps = {
  project: Project
}

const ProjectCard = ({project}: ProjectProps) => {
  return (
    <div className='rounded border p-4 shadow'>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <p>Start Date: {project.startDate}</p>
      <p>End Date: {project.endDate}</p>
    </div>
  )
}

export default ProjectCard