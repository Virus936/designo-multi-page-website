import ProjectItem from './ProjectItem';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

let projects = [
  {
    tag: 'web',
    img: 'image',
    title: 'express',
    desc: 'A multi-carrier shipping website for ecommerce businesses',
  },
  {
    tag: 'web',
    img: 'image',
    title: 'transfer',
    desc: 'Site for low-cost money transfers and sending money within seconds ',
  },
  {
    tag: 'web',
    img: 'photom',
    title: 'photon',
    desc:
      'A state-of-the-art music player with high-resolution audio and DSP effects ',
  },
  {
    tag: 'web',
    img: 'image',
    title: 'builder',
    desc: 'Connects users with local contractors based on their location',
  },
  {
    tag: 'web',
    img: 'image',
    title: 'blogr',
    desc: 'Blogr is a platform for creating an online blog or publication',
  },
  {
    tag: 'web',
    img: 'image',
    title: 'camp',
    desc: 'Get expert training in coding, data, design, and digital marketing',
  },
  {
    tag: 'graphic',
    img: 'image',
    title: 'tim brown',
    desc: 'A book cover designed for Tim Brown’s new release, ‘Change’',
  },
  {
    tag: 'graphic',
    img: 'image',
    title: 'boxed water',
    desc: 'A simple packaging concept made for Boxed Water',
  },
  {
    tag: 'graphic',
    img: 'image',
    title: 'science!',
    desc: 'A poster made in collaboration with the Federal Art Project',
  },
  {
    tag: 'app',
    img: 'image',
    title: 'airfilter',
    desc:
      'Solving the problem of poor indoor air quality by filtering the air ',
  },
  {
    tag: 'app',
    img: 'image',
    title: 'eyecam',
    desc:
      'Product that lets you edit your favorite photos and videos at any time',
  },
  {
    tag: 'app',
    img: 'image',
    title: 'faceit',
    desc: 'Get to meet your favorite internet superstar with the faceit app ',
  },
  {
    tag: 'app',
    img: 'image',
    title: 'todo',
    desc: 'A todo app that features cloud sync with light and dark mode',
  },
  {
    tag: 'app',
    img: 'image',
    title: 'loopstudios',
    desc: 'A VR experience app made for Loopstudios',
  },
];
const Projects = () => {
  let params = useParams();
  return (
    <Container>
      {projects
        .filter((project) => project.tag === params.design)
        .map((project, _index) => (
          <ProjectItem key={_index} {...project} />
        ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: var(--location-gap);
  margin: 0 calc(max(2em, (100vw - var(--max-width))/2));
  margin-top: 5em;
`;

export default Projects;
