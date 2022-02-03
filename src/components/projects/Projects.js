import ProjectItem from './ProjectItem'
let projects = [
  {
    img:'image',
    title:'express',
    desc:'A multi-carrier shipping website for ecommerce businesses'
  },
  {
    img:'image',
    title:'transfer',
    desc:'Site for low-cost money transfers and sending money within seconds '
  },
  {
    img:'photom',
    title:'photon',
    desc:'A state-of-the-art music player with high-resolution audio and DSP effects '
  },
  {
    img:'image',
    title:'builder',
    desc:'Connects users with local contractors based on their location'
  },
  {
    img:'image',
    title:'blogr',
    desc:'Blogr is a platform for creating an online blog or publication'
  },
  {
    img:'image',
    title:'camp',
    desc:'Get expert training in coding, data, design, and digital marketing'
  },

]
const Projects = () => {
  return <div>
    {projects.map((project, _index)=> <ProjectItem key={_index} {...project}/>)}
    </div>
}

export default Projects
