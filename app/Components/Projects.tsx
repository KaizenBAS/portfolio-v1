import React from 'react'
import Heading from './Heading';
import Card from './Card';

const data = [
{
    id : 0,
    title : "Resume Builder",
    desc : " A react & typescript  application to create a resume.",
    img : "/resumebuilder.png",
    tags :["React" , "Node" , "Css" , "Typescript"],
    link: "https://dynamic-resume-tau-liart.vercel.app/"

},
{
 id : 1,
 title : "Countdown Timer",
 desc : " A Html css & typescript  powered website to track time  with an interactive  countdown feature",
 img : "/timer.png",
 tags : ["Html" , "Node" , "CSS" , "typescript"],
},
{
  id : 2,
  title : "Calculator",
  desc : "Creating calculators with HTML, CSS, and JavaScript allows me to build interactive and functional tools for a variety of applications." ,
  img : "/pic4.png",
  tags : ["Html" , "Css" , "javascript" , "Node"],
},
];


const Projects = () => {

  return (
    <div id='projects' className='container pt-32'>
      <Heading title='My projects' />
      <div className='grid gap-10 xl:gap xl:gap-y-10 md-grid-cols-3 lg:grid-cols-3 place-items-center'>
        {data.map((element) => (
          <a key={element.id} href={element.link} target="_blank" rel="noopener noreferrer">
            <Card
              title={element.title}
              desc={element.desc}
              img={element.img}
              tags={element.tags}
            />
          </a>
        ))}
      </div>
    </div>
  );
}


export default Projects
