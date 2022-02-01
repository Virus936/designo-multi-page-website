import styled from 'styled-components'
import {size} from '../../settings'

const SkillItem = ({title, img, to}) => {
  return <Container>
    <img src={`./asset/skill/bigscreen/${img}`}
        srcset={`./asset/skill/mobile/${img} 450w, ./asset/skill/tablet/${img} 900w, ./asset/skill/bigscreen/${img} 1900w `}         

        alt="" />
    <h1> {title} </h1>
    <a href={to}>view projects</a>

    </Container>
}
const Container = styled.article`
  position:relative;
  display:flex;
  overflow:hidden;
  flex-direction:column;

  justify-content:center;
  align-items:center;
  border-radius:var(--border-radius);
  color:white;
  font-size:18px;
  text-transform:uppercase;
  &:hover{
    background-color:rgba(232, 128, 105, 0.8);
  }
  h1{
    font-weight:700;
    letter-spacing:5px;
    font-size:1em;
    
  }
  a{
    font-weight:700;
    letter-spacing:2px;
    color:white;
    font-size:.8em;
    text-decoration:none;
  }
  img{
    position:absolute;
    object-fit:cover;
    z-index:-1;
    width:100%;
    height:100%;
    @media(min-width:450px){
      height:110%;
      width:auto;
    }
  }

  

  &:first-child{
    @media(min-width:${size.medium}){
      grid-row:1/3;
    }
  }
  &:nth-child(2){
  }
  &:nth-child(3){
  }
`
export default SkillItem
