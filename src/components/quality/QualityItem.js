import styled from 'styled-components'
import {size} from '../../settings'

const QualityItem = ({title, desc, img}) => {

  return <Container>
    <img src={`./asset/qualities/${img}`} alt="" />
    <h1>{title}</h1>
    <p>{desc}</p>
    </Container>
}
const Container = styled.article`
  max-width:600px;
  text-align:center;
  h1{
    text-transform:uppercase;
    letter-spacing:10px;
    font-weight:lighter;
  }
  p{
    font-size:.8em;
  }
  @media(min-width:${size.small}) and ( max-width:${size.medium}){
    display:grid;
    grid-template-columns:min-content 1fr;
    grid-template-rows:min-content min-content;
    h1{
      align-self:end;
    }
    p{
      align-self:start;
      margin-top:1em;
    }
    img{
      grid-row:1/3;
    }
  
  }

`

export default QualityItem
