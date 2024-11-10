import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div>
                <h2 className='text-4xl md:text-5xl' data-aos="zoom-in-up">Technologies I work With</h2>
                <p className='text-gray-500 pt-2'>
                  I have foundation in web development, specialization in HTML, CSS , Javascript. My experience extends to using framework like and next.js to create  dynamic & user-friendly application. im  also proficient in Tailwind Css  for efficient styling and design. with a position for learning, I  stay updated on the latest technologies to enhance my skill set and contribute effectively to project. </p>
            </div>
        <div className='grid grid-cols-2 text-cyan-700 text-3xl sm:text-4xl'>
          <div className='space-y-2'>
            <h2 data-aos="fade-down">Typescript</h2>
            <h2 data-aos="fade-down">Node js</h2>
            <h2 data-aos="fade-down">Next js</h2>
          </div>

          <div className='space-y-2'>
            <h2 data-aos="fade-down">Tailwind</h2>
            <h2 data-aos="fade-down">Css</h2>
            <h2 data-aos="fade-down">Node js</h2>
          </div>
          
            </div>

        </div>
      
    </div>
  )
}

export default Skills
