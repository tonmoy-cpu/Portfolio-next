import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Projects = () => {
  return (
    <div id='projects' className='flex flex-col items-center justify-center py-20'>
        <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
          My Projects
        </h1>
        <ProjectCard
        src='/NextWebsite.jpg'
        title='ChatBotX'
        description='Chat application with gpt 3.5 included'
        />
        <ProjectCard
        src='/CardImage.png'
        title='E-commerce Website'
        description='This is a fully build ecommerce website'
        />
        <ProjectCard
        src='/SpaceWebsite.png'
        title='Space Themed Website'
        description='anything'
        />
    </div>
  )
}

export default Projects