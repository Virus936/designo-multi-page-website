import parse from 'html-react-parser';
import styled from 'styled-components'
import {size} from '../../settings'

const srcAbout = `${document.location.origin}/asset/about/`
const AboutQuality = ({title, desc, img}) => {
  return <Container>
    <img
      src={`${srcAbout}desktop/${img}`} 
      srcset={`${srcAbout}mobile/${img} 400w,
              ${srcAbout}tablet/${img} 900w,
              ${srcAbout}mobile/${img} 1900w,
      `}
      alt="" />
    <div>
      <h1>{title}</h1>
      {parse(desc)}
    </div>
  </Container>
}

const Container = styled.section`
  overflow:hidden;
  background:#fdf4f2;
  img{
    display:block;
    width:100%;
  }
  text-align:center;
  h1{
    color:var(--color-peach);
    margin-top:2em;
  }
  p{
    margin: 2em ;
  }
  @media(min-width:${size.small}){
    margin:30px calc(max(2em, ( 100vw - var(--max-width) )/2 ));
    border-radius:var(--border-radius);
  }
  @media(min-width:${size.medium}){
    display:flex;
    
    img{
      flex:1;
    }
    div{
      flex:2;
    }
    :nth-of-type(4){
      img{
        order:1;
      }
    }
  }

`
export default AboutQuality
