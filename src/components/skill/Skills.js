import React, {useState} from "react"
import styled from 'styled-components'
import SkillItem from './SkillItem'
import {size} from '../../settings'


const skills = [
  {
    title:'web design',
    img:'image-web-design.jpg',
    to:'/'
  },
  {
    title:'app design',
    img:'image-app-design.jpg',
    to:'/'
  },
  {
    title:'graphic design',
    img:'image-graphic-design.jpg',
    to:'/'
  },
]

function Skills(){
  return(
    <Container>
      {skills?.map((skill, _index) => <SkillItem {...skill} key={_index} /> )}

    </Container>
    )
}
const Container = styled.section`
  display:grid;
  margin:32px calc(max(2em, ( 100vw - var(--max-width) )/2 ));
  gap:22px;
  grid-template-columns:1fr;
  grid-template-rows:repeat(3, 250px);
  @media(min-width:${size.medium}){


    grid-template-rows:repeat(2, 250px);
    grid-template-columns:repeat(2, 1fr);

  }
`


export default Skills
