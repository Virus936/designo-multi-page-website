import styled from 'styled-components'
import {useNavigate} from 'react-router-dom'
import {size} from '../../settings'

const images = [
  {
    key:'graphic',
    img:'image-graphic-design.jpg'
  },
  {
    key:'app',
    img:'image-app-design.jpg'
  },
  {
    key:'web',
    img:'image-web-design.jpg'
  },
]
const src = document.location.origin
const WebDesignItem = ({title,img,to}) => {
  const navigate = useNavigate()

  const handleNavigate = goto => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
    navigate('/design'+goto)
  }
  return <Container>
    <img src={`${src}/asset/skill/bigscreen/${img}`}
        alt="" />

    <h1> {title} </h1>
    <span onClick={() => handleNavigate(`/${to}`)}>view projects</span>
  </Container>
}

const Container = styled.div`
  position:relative;
  display:flex;
  padding:90px;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  color:white;
  overflow:hidden;


  @media(min-width:${size.small}){
    border-radius:var(--border-radius);
  }

  @media(min-width:${size.medium}){
    flex:1;
  }


  user-select:none;
  font-size:18px;
  text-transform:uppercase;
  flex:90vw;
  &:hover{
    background-color:rgba(232, 128, 105, 0.8);
  }
  h1{
    font-weight:700;
    letter-spacing:5px;
    font-size:1em;
  }
  span{
    font-weight:700;
    letter-spacing:2px;
    color:white;
    font-size:.8em;
    cursor:pointer;
    text-decoration:none;
  }
  img{
    position:absolute;
    object-fit:cover;
    z-index:-1;
    width:100%;
  }

`

export default WebDesignItem
